from flask import Flask # noqa
from flask_cors import CORS

from unities import app

from unities.routes import event_controler, home, login, users # noqa


CORS(app)
