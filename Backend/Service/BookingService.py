from wsgiref import headers
from flask import session
from werkzeug.wrappers import json
from werkzeug.security import generate_password_hash, check_password_hash

from DAO.RoomDAO import RoomDAO
from DAO.BookingDAO import BookingDAO
from Exceptions.NoBookingsExist import NoBookingsExist


class BookingService:

    bookingDAO = BookingDAO()
    roomDAO = RoomDAO()
        
    @classmethod
    def getAllBookings(cls):
        responseData = cls.bookingDAO.getAllBookings()
        if responseData is not None:
            return responseData
        else:
            raise NoBookingsExist
        
    @classmethod
    def getBookingsByCustomerID(cls, customer_id):
        responseData = cls.bookingDAO.getBookingsByCustomerId(customer_id)
        if responseData is not None:
            return responseData
        else:
            raise NoBookingsExist
        
    @classmethod
    def deleteBooking(cls, booking_id , room_id):
        responseData = cls.bookingDAO.deleteBooking(booking_id , room_id)
        if responseData is not None:
            return "Booking deleted!"
        else:
            raise NoBookingsExist
        
    @classmethod
    def addRoomBooking(cls, customer_id, room_id, hotel_id):
        
        print("Room ID", room_id)
        print("Hotel ID", hotel_id)
        print("Customer ID", customer_id)

        responseData = cls.bookingDAO.addRoomBooking(customer_id , room_id, hotel_id)
        if responseData is not None:
            return "Booking successful!"
        else:
            return "Booking unsuccessful!"
        