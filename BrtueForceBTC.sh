#!/usr/bin/env bash

echo "some seed value here" | openssl sha256


openssl ec -inform DER -text -noout -in <(cat <(echo -n "302e0201010420") <(echo -n "a966eb6058f8ec9f47074a2faadd3dab42e2c60ed05bc34d39d6c0e1d32b8bdf") <(echo -n "a00706052b8104000a") | xxd -r -p) 2>/dev/null | tail -6 | head -5 | sed 's/[ :]//g' | tr -d '\n' && echo



echo 023cba1f4d12d1ce0bced725373769b2262c6daa97be6a0588cfec8ce1a5f0bd09 | xxd -r -p | openssl sha256


echo 8eb001a42122826648e66005a549fc4b4511a7ad3fc378221aa1c73c5efe77ef | xxd -r -p | openssl ripemd160