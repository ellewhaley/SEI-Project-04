import requests
from flask import Blueprint, jsonify
from pony.orm import db_session
from config.environment import google_places_token

router = Blueprint('auth', __name__)

@router.route('/venues', methods=['GET'])
@db_session
def index(venue):
    req = requests.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5074,0.0722&radius=1500&type=restaurant/json',
        params={
            'key': google_places_token,
            'input':venue
            }
    )

    return jsonify(req.json())
