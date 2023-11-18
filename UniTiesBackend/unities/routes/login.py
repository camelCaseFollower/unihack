#IMPLEMENTABLE IN A LATER PHASE

from flask_login import LoginManager, UserMixin, login_required
from flask_login import login_user, logout_user
from werkzeug.security import generate_password_hash, check_password_hash
from pymongo import MongoClient
from bson.objectid import ObjectId

from unities import app

uri = "mongodb+srv://User:4lNukg1PfxSL8SZj@unistud.mhdzsny.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(uri)

login_manager = LoginManager()
login_manager.init_app(app)

db = client['unities']  # replace with your database name
users = db['users']  # replace with your users collection name

class User(UserMixin):
    def __init__(self, email, password):
        self.email = email
        self.password = password

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

@login_manager.user_loader
def load_user(user_id):
    user_data = users.find_one({'_id': ObjectId(user_id)})
    if user_data:
        return User(email=user_data['email'], password=user_data['password'])
    return None