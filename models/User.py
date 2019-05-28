#
# class User(db.Entity):
#     username = Required(str, unique=True)
#     email = Required(str, unique=True)
#     password_hash = Required(str)
#     postcode = Required(str)
#     closest_station = Required(str)
#
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
