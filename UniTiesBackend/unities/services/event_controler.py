
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo.mongo_client import MongoClient

from UniTiesBackend.unities import app
from unities.models import client


@app.route('/')
def get_events():
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    events = client.unities.events.find()
    events_list = []

    for event in events:
        event_data = {
            'name': event['name'],
            'description': event['description'],
            'county': event['county'],
            'open': event['open'],
            'accommodation': event['accommodation'],
            'dateStart': event['dateStart'],
            'dateEnd': event['dateEnd'],
            'organizer': event['organizer'],
            'imageUrl': event['imageUrl']
        }
        events_list.append(event_data)

    return jsonify({'events': events_list})


@app.route('/events', methods=['POST'])
def add_event():
    # Your date strings
    event_data = request.get_json()

    # Convert date strings to datetime.date objects
    date_start_str = event_data.get('dateStart', '')
    date_end_str = event_data.get('dateEnd', '')

    date_start = datetime.strptime(date_start_str, "%Y-%m-%d").date() if date_start_str else None
    date_end = datetime.strptime(date_end_str, "%Y-%m-%d").date() if date_end_str else None

    # Convert datetime.date objects to strings in ISO format
    date_start_iso = date_start.isoformat() if date_start else None
    date_end_iso = date_end.isoformat() if date_end else None

    # Update movie_data with ISO formatted date strings
    event_data['dateStart'] = date_start_iso
    event_data['dateEnd'] = date_end_iso

    try:
        result = client.unities.events.insert_one(event_data)

        # Check if the insertion was successful
        if result.inserted_id:
            return jsonify({'message': 'Event added successfully', 'event_id': str(result.inserted_id)}), 201
        else:
            return jsonify({'error': 'Failed to add event'}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 500