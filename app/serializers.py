
from marshmallow import Schema, fields, validate

class NoteSchema(Schema):
    id = fields.Int()
    excerpt = fields.Str()
    content = fields.Str()
    