import json
import pickle
from os import path

from block import Block

class BlockchainMiner:

	def __init__(self, name, blockchain_filename):
		self.name = name
		self.blockchain_filename = blockchain_filename

	def start(self):
		if(path.exists(self.blockchain_filename)):
			print(f'Blockchain file exists: {self.blockchain_filename}')
		else:
			print('No Blockchain file found')
			print(f'Creaing Blockchain file: {self.blockchain_filename}')

			print('Creating Genesis Block')
			genesis_block = Block('This is 1st block a.k.a genesis block!', 0)
			self.create_blockchain_with_genesis_block(genesis_block)

		previous_block = self.get_last_mined_block()
		print(f'Last Mined Block: {previous_block} \n')

		while True:
			user_choice = input('Enter \'new\' to input transaction info or type \'exit\': ')

			if user_choice == 'exit':
				break
			elif user_choice == 'new':
				data = self.get_user_input()

				new_block = Block(data, previous_block['hash'])
				print(f'New block: {new_block} \n')
				self.add_block_to_blockchain(new_block)
				print(f'Added Block {new_block.hash} to Blockchain')
				print('---------------')

				previous_block = new_block.__dict__
		print(f'Exiting from Blockchain Program, Blockchain is stored at: {self.blockchain_filename}')


	def create_blockchain_with_genesis_block(self, genesis_block):
		with open(self.blockchain_filename, 'w+') as blockchain_file:
		    data = {
		    	'name': self.name,
		    	'blocks': [ genesis_block.__dict__ ]
		    }
		    json.dump(data, blockchain_file)
		print(f'Created Genesis Block {genesis_block.hash} to Blockchain')


	def get_last_mined_block(self):
		with open(self.blockchain_filename, 'r+') as blockchain_file:
		    data = json.load(blockchain_file)

		    blocks = data['blocks']
		    last_mined_block = blocks[-1]
		    return last_mined_block


	def add_block_to_blockchain(self, block):
		with open(self.blockchain_filename, 'r+') as blockchain_file:
		    data = json.load(blockchain_file)

		    blocks = data['blocks']
		    blocks.append(block.__dict__)

		    blockchain_file.seek(0)
		    json.dump(data, blockchain_file)
		    blockchain_file.truncate()


	def get_user_input(self):
		data_from = input('\t\tFROM: ')
		data_to = input('\t\tTO: ')
		data_amount = input('\t\tAMOUNT: ')

		data = {
			"from": data_from,
			"to": data_to,
			"amount": data_amount
		}
		return data
