import requests
from flask import Blueprint, jsonify, request
from pony.orm import db_session
from config.environment import google_places_token

router = Blueprint('venues', __name__)

@router.route('/venues', methods=['GET'])
@db_session
def index():
    location = request.args.get('location')
    place_type = request.args.get('type')

    req = requests.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        params={
            'key': google_places_token,
            'location': location,
            'radius': 1000,
            'type': place_type
        }
    )

    return jsonify(req.json())
