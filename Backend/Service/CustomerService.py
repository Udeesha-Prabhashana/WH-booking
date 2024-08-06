from wsgiref import headers
from werkzeug.security import generate_password_hash, check_password_hash
from flask import jsonify
from DAO.UserDAO import UserDAO
from DAO.RoomDAO import RoomDAO
from Exceptions.InvalidContactNumber import InvalidContactNumber
from Exceptions.InvalidEmail import InvalidEmail
from Exceptions.InvalidName import InvalidName
from Exceptions.PasswordTooShort import PasswordTooShort
from Exceptions.WrongCredentials import WrongCredentials
from Service.RoomService import RoomService
import jwt

class CustomerService:
    customerDAO = UserDAO()
    roomService = RoomService()
    roomDAO = RoomDAO()

    @classmethod
    def getAllCustomers(cls):
        global responseData
        if cls.getAllCustomersCheck():
            responseData = cls.customerDAO.getAllCustomersfromDB()
        return responseData

    @classmethod
    def createCustomer(cls, data):
        password1 = data.get('password')
        hashedPassword = generate_password_hash(password1)

        responseData = cls.customerDAO.createNewCustomer(
            data.get('name'), 
            data.get('username'), 
            hashedPassword, 
            data.get('email'), 
            data.get('contact_no')
        )
        return "Registration successful!"



    @classmethod
    def customerLogin(cls, data, secret_key):
        if cls.customerLoginCheck(data.get('username'), data.get('password')):
            # Assuming you have customer_id and user_role in customerData
            customerData = cls.customerDAO.customerDetails(data.get('username'))
            customer_id = customerData[0]  # Accessing the first element
            user_role = customerData[-1]   # Accessing the last elemen

            print("customerData :", customerData)
            print("customer_id :", customer_id)
            print("user_role :", user_role)

            jwt_token = jwt.encode({'customer_id': customer_id, 'user_role': user_role}, secret_key, algorithm='HS256')
        
            # Return a dictionary containing both the JWT token and the user role
            return {'jwt_token': jwt_token, 'user_role': user_role}
        else:
            raise WrongCredentials

    @classmethod
    def getAllCustomersCheck(cls):
        responseData = cls.customerDAO.getAllCustomersfromDB()
        if responseData is not None:
            return True
        else:
            return False

    @classmethod
    def customerLoginCheck(cls,username,password):
        print("username2 :", username)
        print("password2 :", password)
        
        password_hash = cls.customerDAO.getHashPass(username)
        print("password_hash :", password_hash)
        if password_hash is None:
            return False  # Handle case where password hash is not found
        # passwordHash = password1.get('password')

        # Extract the password hash from the tuple
        password_hash2 = password_hash[0]
        print("password_hash2 :", password)
        result = check_password_hash(password_hash2, password)
        return result
