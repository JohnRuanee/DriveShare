"""Author: Addison Hough
base file for the flask API which allows the react frontend to interact
with the database
"""
from flask import Flask

api = Flask(__name__)

@api.route('/profile/<username>')
def user_profile(username):
    """retrieve the profile information for <username>

    Gets the information from the database and returns it as a dictionary
    for use by the react frontend

    All current values are placeholders
    """
    response_body = {
        "userName": username,
        "realName": "Addison Hough(Placeholder)",
        "userType": "Driver",
        "location": "Reserve At Clemson",
        "profilePic": "image.jpeg",
        "vehicle": "Grey 2016 Nissan Pathfinder",
        "snapchat": "PLACEHOLDER!!!!!!",
        "phoneNumber": "(304)-579-9156",
        "time": []
    }
    return response_body



