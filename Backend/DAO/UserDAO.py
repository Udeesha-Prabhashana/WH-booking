import uuid
# import pymysql
import json
# from dbconfig import mysql
from flask import jsonify
from db_config import get_db_connection
import logging


class UserDAO:

    @classmethod
    def OTPCheck(cls, OTP):
        try:
            connection = get_db_connection()
            cursor = connection.cursor()

            cursor.execute("SELECT * from customer WHERE OTP = %s",
                           OTP)
            row = cursor.fetchone()
            return row
        except Exception as e:

            print(e)
        finally:
            cursor.close()
            connection.close()


    @classmethod
    def forgotPasswordCheck(cls, customer_id,email):
        try:
            connection = get_db_connection()
            cursor = connection.cursor()

            cursor.execute("SELECT * from customer WHERE customer_id = %s and email=%s",
                           (customer_id,email))
            row = cursor.fetchone()
            return row
        except Exception as e:

            print(e)
        finally:
            cursor.close()
            connection.close()


    @classmethod
    def forgotPasswordDB(cls,customer_id,email,otp):
        try:
            connection = get_db_connection()
            cursor = connection.cursor()

            cursor.execute("update customer set otp=%s where customer_id=%s and email=%s",
                           (otp,customer_id,email))
            connection.commit()
            cursor.execute("SELECT * from customer WHERE customer_id = %s",
                           customer_id)
            row = cursor.fetchone()
            return row
        except Exception as e:

            print(e)
        finally:
            cursor.close()
            connection.close()


    @classmethod
    def UpdateNewPassword(cls, password, OTP):
        try:
            connection = get_db_connection()
            cursor = connection.cursor()


            cursor.execute("Update customer set password = %s where OTP=%s",
                           (password,OTP))
            connection.commit()
            cursor.execute("Update customer set OTP = null where password=%s",
                           password)
            connection.commit()
            cursor.execute("select * from customer where password = %s",
                           password)

            row = cursor.fetchone()
            return row
        except Exception as e:

            print(e)
        finally:
            cursor.close()
            connection.close()


    @classmethod
    def getAllCustomersfromDB(cls):
        try:
            connection = get_db_connection()
            cursor = connection.cursor()

            cursor.execute("SELECT customer_id,name,username,email,contact_no from customer")
            rows = cursor.fetchall()
            return rows
        except Exception as e:

            print(e)
        finally:
            cursor.close()
            connection.close()


    @classmethod
    def createNewCustomer(cls, name, username, password, email, contact_no):
        try:
            # customerId = int(uuid.uuid4())

            # print("IDD", customerId)
            connection = get_db_connection()
            cursor = connection.cursor()

            cursor.execute(
                "insert into customer (name,username,password,email,contact_no,user_role) value ( %s, %s,%s, %s, %s,%s)",
                (name, username, password, email, contact_no,1))
            connection.commit()

            return 1
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            connection.close()


    @classmethod
    def checkCustomerFromSessionID(cls,session_id):
        try:
            connection = get_db_connection()
            cursor = connection.cursor()

            cursor.execute("SELECT * from customer where session_id=%s",
                           session_id)
            rows = cursor.fetchone()
            return rows
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            connection.close()


    @classmethod
    def customerDetails(cls, username):
        try:
            connection = get_db_connection()
            cursor = connection.cursor()

            cursor.execute("SELECT * FROM customer WHERE username = %s", (username,))
            row = cursor.fetchone()
            print("rows2", row)
            return row
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            connection.close()

    @classmethod
    def customerLoginfromCustID(cls, username):
        try:
            connection = get_db_connection()
            cursor = connection.cursor()

            cursor.execute("SELECT * from customer where username=%s",
                           username)
            rows = cursor.fetchone()
            if rows is not None:
                sessionId = str(uuid.uuid4())
                cursor.execute("update customer set session_id = %s where username = %s",
                               (sessionId, username))
                connection.commit()

                cursor.execute("SELECT * from customer where username = %s",
                               username)
                rows = cursor.fetchone()
            return rows
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            connection.close()


    @classmethod
    def getHashPass(cls, username):
        try:
            connection = get_db_connection()
            cursor = connection.cursor() 

            print("getHashPass value:", username)
            cursor.execute("SELECT password from customer where username = %s", (username,))
            rows = cursor.fetchone()

            print("rows", rows)
            # Log the SQL query and its result
            logging.info(f"SQL query executed: SELECT password from customer where username={username}")
            logging.info(f"Result: {rows}")
            return rows
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            connection.close()


    @classmethod
    def userLogoutDAO(cls,customer_id):
        try:
            connection = get_db_connection()
            cursor = connection.cursor()

            cursor.execute("update customer set session_id = null where customer_id = %s",
                           customer_id)
            connection.commit()

            cursor.execute("SELECT * from customer where customer_id = %s",
                           customer_id)
            row = cursor.fetchone()
            return row
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            connection.close()