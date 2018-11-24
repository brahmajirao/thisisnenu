import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api
from flask_cors import CORS
from flask import send_from_directory

app = Flask(__name__, static_url_path='/static')
app.config['SECRET_KEY'] = 'mysecretkey'
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/thisisnenu'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

db = SQLAlchemy(app)
api = Api(app)
CORS(app)

from myproject.services.memories import Memories
from myproject.services.memories import Memory
api.add_resource(Memories, '/memories')
api.add_resource(Memory, '/memory/<string:id>')



@app.route('/images/<string:item>/<string:imageName>')
def get_image(item, imageName):
    directory = ""
    if item == "memories":
        directory = "user_data/memories"
    return send_from_directory(directory, imageName, as_attachment=False)
    
