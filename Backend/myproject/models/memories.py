from myproject import db
from datetime import datetime

class Memory(db.Model):
    __tablename__ = 'memories'
    memory_id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer)
    title = db.Column(db.String(200))
    description = db.Column(db.Text)
    cover_image = db.Column(db.String(200))
    created_date = db.Column(db.DateTime, default = datetime.utcnow())
    updated_date = db.Column(db.DateTime, default = datetime.utcnow())

    def __init__(self, user_id, title, description, cover_image):
        self.user_id = user_id
        self.title = title
        self.description = description
        self.cover_image = cover_image
