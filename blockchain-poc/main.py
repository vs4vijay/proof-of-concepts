#!/usr/bin/env python3

import sys
import json
import random
import hashlib
import datetime as dt

from block import Block
from blockchain_miner import BlockchainMiner

sys.setrecursionlimit(10000)

def main():
	filename = 'blockchain.json'
	blockchain_miner = BlockchainMiner('My Miner', filename)
	blockchain_miner.start()

if __name__ == '__main__':
	main()