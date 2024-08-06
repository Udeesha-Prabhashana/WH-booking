import uuid
from db_config import get_db_connection
from flask import jsonify

class BookingDAO:


    @classmethod
    def getAllBookings(cls):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()

            query = """
            SELECT
                booking.booking_id,
                booking.customer_id,
                booking.hotel_id,
                booking.room_id,
                room.room_number,
                hotels.title AS hotel_title,
                hotels.city AS hotel_city,
                customer.name AS customer_name,
                customer.contact_no AS customer_contact_no
            FROM
                booking
            JOIN
                hotels ON booking.hotel_id = hotels.hotel_id
            JOIN
                room ON booking.room_id = room.room_id
            JOIN
                customer ON booking.customer_id = customer.customer_id
            """
            cursor.execute(query)
            rows = cursor.fetchall()
            columns = [column[0] for column in cursor.description]
            result = [dict(zip(columns, row)) for row in rows]

            print("Bookings:", result)
            return result
        except Exception as e:

            print(e)
        finally:
            cursor.close()
            conn.close()


    @classmethod
    def getBookingsByCustomerId(cls, customer_id):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()

            query = """
            SELECT
                booking.booking_id,
                booking.customer_id,
                booking.hotel_id,
                booking.room_id,
                room.room_number,
                hotels.title AS hotel_title,
                hotels.city AS hotel_city
            FROM
                booking
            JOIN
                hotels ON booking.hotel_id = hotels.hotel_id
            JOIN
                room ON booking.room_id = room.room_id
            WHERE
                booking.customer_id = %s
            """
            cursor.execute(query, (customer_id,))
            rows = cursor.fetchall()
            columns = [column[0] for column in cursor.description]
            result = [dict(zip(columns, row)) for row in rows]

            print("Bookings:", result)
            return result
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()



    @classmethod
    def addRoomBooking(cls, customer_id, room_id, hotel_id):
        try:
            bookingId = str(uuid.uuid4())
            conn = get_db_connection()
            cursor = conn.cursor()

            print("Room ID", room_id)
            print("Hotel ID", hotel_id)
            print("Customer ID", customer_id)

            cursor.execute(
                "insert into booking (customer_id,room_id,hotel_id) value ( %s, %s,%s)",
                (customer_id, room_id,hotel_id))
            conn.commit()
            cursor.fetchone()
            return 1
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

    @classmethod
    def deleteBooking(cls, booking_id, room_id):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()

            cursor.execute("SELECT * FROM booking WHERE booking_id = %s", (booking_id,))
            row = cursor.fetchone()
            
            if row is None:
                return None

            cursor.execute("DELETE FROM booking WHERE booking_id = %s", (booking_id,))
            cursor.execute("DELETE FROM room_numbers WHERE room_id = %s AND unavailable_date IS NOT NULL", (room_id,))
            
            conn.commit()
            return row

        except Exception as e:
            print(f"Error: {e}")
            raise e

        finally:
            if cursor:
                cursor.close()
            if conn:
                conn.close()


