from flask import Flask
from flask_httpauth import HTTPBasicAuth

from pprint import pprint
import json

app = Flask(__name__)
auth = HTTPBasicAuth()

CONFIG_FILE = "config.json"

@auth.get_password
def get_password(username):

	config_file = open(CONFIG_FILE, "r")
	config = json.load(config_file)
	pprint(config)

	users = config["users"]
	if username in users:
		return users.get(username)
	return None


@app.route("/")
def index():
	return json.dumps({"success": True, "message": "Hello World"})


@app.route("/auth")
@auth.login_required
def auth():
	data = {
		"success": True, 
		"message": "*******Secure Content******"
	}
	return json.dumps(data)


if __name__ == '__main__':
	app.run()