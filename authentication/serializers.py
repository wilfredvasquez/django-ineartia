from marshmallow import Schema, fields

class RegisterSchema(Schema):
    firstName = fields.Str()
    lastName = fields.Str()
    username = fields.Str()
    email = fields.Str()
    password = fields.Str()