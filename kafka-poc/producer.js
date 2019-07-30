#!/usr/bin/env node

const { Kafka } = require('kafkajs');

const config = require('./config');

const APP_CONFIG = {
  CLIENT_ID: 'producer-client',
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

const buildMessage = _ => {
  return {
    user_id: 42,
    content: 'some useful info here',
    timestamp: Date.now()
  };
};

const startProducer = async (message) => {
  const producer = kafka.producer();
  await producer.connect();

  await producer.send({
    topic: APP_CONFIG.TOPIC,
    messages: [
      { value: JSON.stringify(message) },
      // { value: 'Can be sent as string as well' },
    ],
  });

  console.log('[+] Message Sent');

  await producer.disconnect();

  return producer;
};

if(require.main === module) {
  const args = process.argv.slice(2);
  const message = args.length > 0 ? args.join(' ') : null;

  startProducer(message || buildMessage()).catch(e => console.error(`[-] Error: ${e.message}`, e));
};

module.exports = startProducer;

