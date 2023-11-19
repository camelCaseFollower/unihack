
from datetime import datetime
from flask import request, jsonify

from unities import app
from unities.models import client
from unities.services.web_scraping.upbBucuresti import data_scraper_Bucuresti
from unities.services.web_scraping.ubbCluj import data_scraper_Cluj
from unities.services.web_scraping.uptTimisoara import data_scraper_Timisoara


@app.route('/')
def get_events():
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    today = datetime.today()
    is_25th = today.day == 25
    if (is_25th):
        data_scraper_Bucuresti()
        data_scraper_Cluj()
        data_scraper_Timisoara()
    
    events = client.unities.events.find()
    events_list = []

    for event in events:
        event_data = {
            'name': event['name'],
            'description': event['description'],
            'county': event['county'],
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

    date_start = datetime.strptime(date_start_str, "%Y-%m-%d").date() \
        if date_start_str else None
    date_end = datetime.strptime(date_end_str, "%Y-%m-%d").date() \
        if date_end_str else None

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
            response_data = {
                'message': 'Event added successfully',
                'event_id': str(result.inserted_id)
            }
            return jsonify(response_data), 201
        else:
            return jsonify({'error': 'Failed to add event'}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/questions', methods=['POST'])
def add_questions():
    question_data = request.get_json()
    try:
        result = client.unities.questions.insert_one(question_data)

        if result.inserted_id:
            response_data = {
                'message': 'Event added successfully',
                'event_id': str(result.inserted_id)
            }
            return jsonify(response_data), 201
        else:
            return jsonify({'error': 'Failed to add event'}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/event/<event_id>')
def get_event(event_id):
    if event_id is None:
        return "Id is null"

    event = client.unities.events.find_one({"_id": ObjectId(event_id)})
    event_data = {
        'name': event['name'],
        'description': event['description'],
        'county': event['county'],
        'dateStart': event['dateStart'],
        'dateEnd': event['dateEnd'],
        'organizer': event['organizer'],
        'imageUrl': event['imageUrl'],
        'category': event['category']
    }
    return jsonify({'event': event_data})
