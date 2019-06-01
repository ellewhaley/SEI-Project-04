# import os
# from flask import abort
from app import app
from controllers import auth
from controllers import venues

app.register_blueprint(auth.router, url_prefix='/api')
app.register_blueprint(venues.router, url_prefix='/api/')

@app.route('/')
def home():
    return 'Hello World!'
