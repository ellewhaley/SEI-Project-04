from pony.orm import db_session
from app import db
from models.User import User, UserSchema

db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():
    schema = UserSchema()
    elle = User(
        username='elle',
        email='elle@gmail.com',
        password_hash=schema.generate_hash('pass'),
        own_postcode='se270rs',
        friend_postcode='se270rs',
        closest_station='West Norwood'
    )

    db.commit()
