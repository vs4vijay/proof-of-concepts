import json
import random
import hashlib
import datetime as dt

class Block:
	def __init__(self, data, previous_hash):
		self.data = data
		self.previous_hash = previous_hash
		self.timestamp = str(dt.datetime.now())
		self.nonce, self.hash = self.start_mining(data)

	def is_valid_hash(self, hash):
		# There must be N zeros in hash
		N = 14
		zero_count = len(list(filter(lambda x: x == '0', list(hash))))
		return zero_count == N

	def start_mining(self, data):
		NONCE_THRESHOLD = 50000
		for nonce in range(0, NONCE_THRESHOLD):
			nonced_data = json.dumps(data) + str(nonce)
			hash = hashlib.sha256(nonced_data.encode('utf-8')).hexdigest()
			# print(nonce, ':', hash)
			if self.is_valid_hash(hash):
				break
		return (nonce, hash)

	def __repr__(self):
		return json.dumps(self.__dict__)