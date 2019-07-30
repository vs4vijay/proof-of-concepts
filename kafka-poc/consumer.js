#!/usr/bin/env node

const { Kafka } = require('kafkajs');

const config = require('./config');

const APP_CONFIG = {
  CLIENT_ID: 'consumer-client',
  GROUP_ID: 'order_processors',
  TOPIC: config.KAFKA_TOPIC,
  KAFKA_BROKERS: config.KAFKA_BROKERS,
  KAFKA_USERNAME: config.KAFKA_USERNAME,
  KAFKA_PASSWORD: config.KAFKA_PASSWORD
};

const kafka = new Kafka({
  clientId: APP_CONFIG.CLIENT_ID,
  brokers: APP_CONFIG.KAFKA_BROKERS,
  ssl: { 
    rejectUnauthorized: false 
  },
  sasl: {
    mechanism: 'scram-sha-256', // scram-sha-256 or scram-sha-512
    username: APP_CONFIG.KAFKA_USERNAME,
    password: APP_CONFIG.KAFKA_PASSWORD
  }
});

// console.log(APP_CONFIG, 'kafka', kafka);

const processOrder = async ({ topic, partition, message }) => {
  const prefix = `${topic} [${partition} | ${message.offset}] / ${message.timestamp}`;
  
  console.log('[+] Prefix:', prefix, message)
  console.log('[+] Received:', message.value.toString());
  console.log('----------')
};


const startConsumer = async _ => {
  const consumer = kafka.consumer({ groupId: APP_CONFIG.GROUP_ID });

  await consumer.connect();

  await consumer.subscribe({ topic: APP_CONFIG.TOPIC });

  console.log('[+] Listening for Messages');

  await consumer.run({ eachMessage: processOrder });

  return consumer;
};


if(require.main === module) {
  startConsumer().catch(e => console.error(`[-] Error: ${e.message}`, e));
}

// try {
//   startConsumer();
// } catch (error) {
//   console.error('error', error);
// }

