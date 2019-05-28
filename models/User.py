# from datetime import datetime, timedelta
# import bcrypt
# import jwt
from pony.orm import Required
from marchmallow import Schema, fields
from app import db

class User(db.Entity):
    username = Required(str, unique=True)
    email = Required(str, unique=True)
    password_hash = Required(str)
    postcode = Required(str)
    closest_station = Required(str)

class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    username = fields.Str(required=True)
    email = fields.Str(required=True)
    postcode = fields.Str(required=True)
    closest_station = fields.Str(required=True)

#     def is_pass_valid(self, plaintext):
#         return bcrypt.checkpw(plaintext.encode('utf8')
#         self.password_hash.encode('utf8'))
#
#     def generate_token(self):
#         payload = {
#             'exp': datetime.utcnow() +
#             timedelta(hours=12),
#             'iat': datetime.utcnow(),
#             'sub': self.id
#         }
#
#         token = jwt.encode(
#             payload,
#             secret,
#             'HS256'
#         ).decode('utf8')
#
#         return token
