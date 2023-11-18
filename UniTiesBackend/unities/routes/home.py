from flask import jsonify

from unities import app

@app.route('/home')
def home():
    return jsonify({"message": "Welcome to our application!"}), 200