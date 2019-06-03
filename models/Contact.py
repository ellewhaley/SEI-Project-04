# from app import db
# from pony.orm import Required, Optional, Set
# from marshmallow import Schema, fields, post_load
#
# class Contact(db.Entity):
#     name = Required(str)
#     tele = Required(int)
#     postcode = Required(str)
#     lat = Required(float)
#     lng = Required(float)
#     user = Required('User')
#
# class ContactSchema(Schema):
#     id = fields.Int(dump_only=True)
#     name = fields.Str(required=True)
#     tele = fields.Int(required=)
