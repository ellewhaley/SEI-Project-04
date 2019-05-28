import os

secret = os.getenv('SECRET', 'this is a secret')
db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/inbetween-us')
