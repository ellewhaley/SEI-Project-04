import requests
from flask import Blueprint, jsonify, request
from pony.orm import db_session
from config.environment import google_places_token

router = Blueprint('venues', __name__)

@router.route('/venues', methods=['GET'])
@db_session
def index():
    location = request.args.get('location')
    req = requests.get(f'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={location}&radius=1500&type=restaurant',
        params={
            'key': google_places_token
            }
    )

    return jsonify(req.json())
