from flask import Flask
from flask_cors import CORS

from unities import app

from unities.routes import event_controller, home, login, users

CORS(app)