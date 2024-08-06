import mysql.connector

def get_db_connection():
    connection = mysql.connector.connect(
        host='localhost',
        port='3312',
        database='hotel_booking',
        user='root',
        password='Udee1234@#'
    )
    return connection
