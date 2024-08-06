from flask import Flask, jsonify
from CustomUtils import CustomUtils
from db_config import get_db_connection
from Service.CustomerService import CustomerService
from Service.HotelsService import HotelService
from Service.RoomService import RoomService
from Service.BookingService import BookingService
from Service.AuthService import decode_jwt_token
from flask import flash, request, render_template
from Exceptions.InvalidContactNumber import InvalidContactNumber
from Exceptions.InvalidEmail import InvalidEmail
from Exceptions.InvalidName import InvalidName
from Exceptions.NewPasswordCannotBeSameAsOldPassword import NewPasswordCannotBeSameAsOldPassword
from Exceptions.OTP_Not_Correct import OTP_Not_Correct
from Exceptions.PasswordTooShort import PasswordTooShort
from Exceptions.WrongCredentials import WrongCredentials
from Exceptions.NoCustomersExist import NoCustomersExist
from Exceptions.RoomNotAvailable import RoomNotAvailable
from Exceptions.SomethingWentWrong import SomethingWentWrong
from flask_cors import CORS
from datetime import datetime
import json

app = Flask(__name__)
app.secret_key = '121333nunnehcnuhbh34h3'
CORS(app)

customerService = CustomerService()

@app.route('/')
def index():
    return "Hello!"

@app.route('/python')
def python():
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM students")
    value = cursor.fetchall()
    print("Values fetched:", value)
    cursor.close()
    connection.close()
    return str(value)


@app.route("/addCustomer", methods=['POST'])
def addCustomerInDB():
    wsResponse = {"resultSet": None, "operationStatus": None}
    try:
        print("Request JSON:", request.json)
        responseData = customerService.createCustomer(request.json)
        print("Response Data:", responseData)
        wsResponse['resultSet'] = responseData
        wsResponse['operationStatus'] = 1
    except InvalidContactNumber:
        wsResponse['resultSet'] = None
        wsResponse['operationStatus'] = CustomUtils.INVALID_CONTACT_NUMBER
    except PasswordTooShort:
        wsResponse['resultSet'] = None
        wsResponse['operationStatus'] = CustomUtils.PASSWORD_TOO_SHORT
    except InvalidEmail:
        wsResponse['resultSet'] = None
        wsResponse['operationStatus'] = CustomUtils.INVALID_EMAIL
    except InvalidName:
        wsResponse['resultSet'] = None
        wsResponse['operationStatus'] = CustomUtils.INVALID_NAME
    except SomethingWentWrong:
        wsResponse['resultSet'] = None
        wsResponse['operationStatus'] = CustomUtils.SOMETHING_WENT_WRONG
    return wsResponse

# Your existing login route
@app.route("/Login", methods=['POST'])
def customerLogin():
    try:
        # Print the request body for debugging
        print("Request JSON:", request.json)

        request_data = request.json  # Get the JSON data from the request
        username = request_data.get('username')  # Extract username from JSON data
        password = request_data.get('password')  # Extract password from JSON data
        
        # Print the extracted username and password for debugging
        print("Username:", username)
        print("Password:", password)
        
        data = customerService.customerLogin({'username': username, 'password': password}, app.secret_key)
        return jsonify({'res': data}), 200
    except WrongCredentials:
        return jsonify({'error': 'Wrong credentials'}), 401
    
#hotels

@app.route('/addhotel', methods=['POST'])
def addhotel():
    wsResponse = {"resultSet": None}
    print("request", request.json)
    responseData = HotelService.addHotel(request.json)
    print("Response", responseData)

    wsResponse['resultSet'] = responseData
    if responseData:
        print("Hotel added successfully")
        return jsonify(wsResponse), 201
    else:
        return jsonify({'error': 'Failed to book room'}), 500

@app.route("/hotels", methods=['GET'])
def getAllHotels():
    Response = HotelService.getAllHotelsfromDBCheck()   
    print("Hotels3", Response) 
    return jsonify(Response)

@app.route("/hotels/countByCity", methods=['GET'])
def countByCity():
    cities = request.args.get('cities', '')
    response = HotelService.countByCity(cities)
    print("countByCity", response)
    return jsonify(response)


@app.route("/getAllFilterdHotels", methods=['GET'])
def getAllFiltedHotels():
    city = request.args.get('city', default=None)
    min_price = request.args.get('min', default=0, type=int)
    max_price = request.args.get('max', default=999, type=int)

    response = HotelService.getAllHotelsfromDBCheck23(city, min_price, max_price)   
    print("Hotels3", response) 
    return jsonify(response)

@app.route("/getHotelByID", methods=['GET'])
def getHotelByID():
    id = request.args.get('id', default=None)

    response = HotelService.gethotelbyID(id)   
    print("Hotels3", response) 
    return jsonify(response[0])

@app.route("/DeleteHotel", methods=['POST'])
def DeleteHOtel():
    Response = HotelService.deleteHotel(request.json)   
    print("Response", Response) 
    return jsonify(Response)


#Rooms

@app.route("/getRooms", methods=['GET'])
def getRoomsByID():
    id = request.args.get('hotelId', default=None)

    response = RoomService.getAllRoomsByID(id)   
    print("Hotels3", response) 
    return jsonify(response)

@app.route('/addroom', methods=['POST'])
def addroom():
    wsResponse = {"resultSet": None}
    print("request", request.json)
    responseData = RoomService.addroom(request.json)
    wsResponse['resultSet'] = responseData
    return wsResponse

@app.route("/deleteRoom", methods=['POST'])
def deleteRoom():
    print("Request JSON:", request.json)
    request_data = request.json
    room_id = request_data.get('room_id')

    print("Room ID:", room_id)
    response = RoomService.deleteRoom(room_id)   
    print("Response", response) 
    return jsonify(response)

@app.route("/rooms", methods=['GET'])
def getAllRooms():

    response = RoomService.getAllRooms()   
    print("Rooms", response) 
    return jsonify(response)

def convert_timestamps_to_dates(timestamps):
    return [datetime.fromtimestamp(timestamp / 1000) for timestamp in timestamps]


@app.route("/updateRoomAvailable", methods=['POST'])
def RoomAvailable():

    roomid = request.args.get('roomid', default=None)
    roomnumber = request.args.get('roomnumber', default=None)
    dates = request.json['dates']

    converted_dates = convert_timestamps_to_dates(dates)
    formatted_dates = [date.strftime('%Y-%m-%d %H:%M:%S') for date in converted_dates]
    print("converted_dates", formatted_dates)
    
    response = RoomService.updateRoomAvailble(roomid , roomnumber , formatted_dates)   
    print("Hotels3", response) 
    return jsonify(response)


#Booking

@app.route('/addRoomBooking', methods=['POST'])
def addRoomBooking():
    wsResponse = {"resultSet": None}
    try:
        auth_header = request.headers.get('Authorization')
        if not auth_header:
            return jsonify({'error': 'Authorization header missing'}), 401

        # Extract the token from the header
        bearer_token = auth_header.split()[1]
        
        # Decode the JWT token to get the customer_id
        customer_id = decode_jwt_token(bearer_token, app.secret_key)
        
        if not customer_id:
            return jsonify({'error': 'Invalid or expired token'}), 401
        
        # Get the request data
        request_data = request.json
        room_id = request_data.get('room_id')
        hotel_id = request_data.get('hotel_id')

        print("Request JSON:", request.json)
        print("Customer ID:", customer_id)
        print("Room ID:", room_id)
        print("Hotel ID:", hotel_id)
        
        # Call the service method to add the room booking
        success = BookingService.addRoomBooking(customer_id, room_id, hotel_id)

        wsResponse['resultSet'] = success
        if success:
            return jsonify(wsResponse), 201
        else:
            return jsonify({'error': 'Failed to book room'}), 500
    except Exception as e:
        print(e)
        return jsonify({'error': 'An error occurred'}), 500
    
@app.route("/Bookings", methods=['GET'])
def getBookings():
    response = BookingService.getAllBookings()
    print("Bookings", response)
    return jsonify(response)

@app.route("/getBookingsByCustomer", methods=['GET'])
def getBookingsByCustomer():
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({'error': 'Authorization header missing'}), 401

    # Extract the token from the header
    bearer_token = auth_header.split()[1]
    
    # Decode the JWT token to get the customer_id
    customer_id = decode_jwt_token(bearer_token, app.secret_key)
    print("Customer ID:", customer_id)
    
    if not customer_id:
        return jsonify({'error': 'Invalid or expired token'}), 401
    
    response = BookingService.getBookingsByCustomerID(customer_id)
    print("One_Customer_Bookings", response)
    return jsonify(response)

@app.route("/deleteBooking", methods=['POST'])
def deleteBooking():

    request_data = request.json
    booking_id = request_data.get('booking_id')
    room_id = request_data.get('room_id')

    print("Request JSON:", request.json)
    print("Booking ID:", booking_id)
    print("Room ID:", room_id)


    response = BookingService.deleteBooking(booking_id, room_id)
    print("DeleteBooking", response)
    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)
