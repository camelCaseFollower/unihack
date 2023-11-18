from flask import Flask
from pymongo import PyMongo
from .config import Config

app = Flask(__name__)
app.config.from_object(Config)

mongo = PyMongo(app)

from app import routes