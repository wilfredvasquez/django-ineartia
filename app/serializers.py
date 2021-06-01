from marshmallow import Schema, fields

class NoteSchema(Schema):
    id = fields.Int(required=False)
    excerpt = fields.Str()
    content = fields.Str()
    