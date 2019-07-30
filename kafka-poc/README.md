Kafka PoC
========

## Pre-requsites

- `yarn add kafkajs`


## Running

- To send the message

`node producer.js`

OR

`node app.js`

It will run the express server which accepts message body as HTTP POST on `/api/v1/messages`


- To receive and process the message

`node consumer.js`

