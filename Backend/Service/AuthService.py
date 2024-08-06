import jwt

def decode_jwt_token(jwt_token, secret_key):
    try:
        decoded_token = jwt.decode(jwt_token, secret_key, algorithms=['HS256'])
        customer_id = decoded_token.get('customer_id')
        return customer_id
    except jwt.ExpiredSignatureError:
        # Handle expired token
        return None
    except jwt.InvalidTokenError:
        # Handle invalid token
        return None
