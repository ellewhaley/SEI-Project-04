from flask import Flask
from pony.orm import Database
from config.environment import db_uri

app = Flask(__name__)
db = Database()
db.bind('postgres', db_uri)

# pylint: disable=W0611,C0413
from config import routes

db.generate_mapping(create_tables=True)

@app.route('/')
def home():
    return 'Hello World!', 200
