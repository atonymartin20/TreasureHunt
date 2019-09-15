import os
import hashlib
import requests
import sys
# from uuid import uuid4
import time
from utils import printMessages
from timeit import default_timer as timer

import random
from dotenv import load_dotenv #Loads .env file
load_dotenv()
key = os.getenv("KEY")

init_headers = {
    'Authorization': f"Token {key}",
}

def proof_of_work(last_proof, difficulty):
    """
    Multi-Ouroboros of Work Algorithm
    - Find a number p' such that the last six digits of hash(p) are equal
    to the first six digits of hash(p')
    - IE:  last_hash: ...999123456, new hash 123456888...
    - p is the previous proof, and p' is the new proof
    """

    start = timer()

    print("Searching for next proof")
    proof = last_proof
    last_hash = hashlib.sha256(f'{last_proof}'.encode()).hexdigest()

    while valid_proof(last_proof, proof, difficulty) is False:
        proof += 1

    print("Proof found: " + str(proof) + " in " + str(timer() - start))
    return proof


def valid_proof(last_hash, proof, difficulty):
    """
    Validates the Proof:  Multi-ouroborus:  Do the last six characters of
    the last hash match the first six characters of the proof?

    IE:  last_hash: ...999123456, new hash 123456888...
    """

    # Hash the string
    guess = f'{last_hash}{proof}'.encode()
    guess_hash = hashlib.sha256(guess).hexdigest()

    # Check for <difficulty> leading 0's
    beg = guess_hash[0:int(difficulty)]
    comp = "".zfill(int(difficulty))

    if beg == comp:
        print(f"{guess_hash} {beg} {comp}")
        return True
    return False


def mine():
    # What node are we interacting with?
    if len(sys.argv) > 1:
        node = sys.argv[1]
    else:
        node = "https://lambda-treasure-hunt.herokuapp.com/api/bc"

    coins_mined = 0

    # Load or create ID
    # Run forever until interrupted
    while True:
        # Get the last proof from the server
        r = requests.get(url=node + "/last_proof",  headers=init_headers)
        data = r.json()
        printMessages(data)
        time.sleep(data.get('cooldown'))

        new_proof = proof_of_work(data.get('proof'), data.get('difficulty'))
        
        post_data = {"proof": new_proof}

        r = requests.post(url=node + "/mine",  headers=init_headers, json=post_data)
        data = r.json()
        printMessages(data)
        time.sleep(data.get('cooldown'))
        return
        
