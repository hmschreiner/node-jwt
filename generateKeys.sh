#!/bin/bash

ssh-keygen -t rsa -b 2048 -m PEM -f ./src/private.key
openssl rsa -in ./src/private.key -pubout -outform PEM -out ./src/public.key