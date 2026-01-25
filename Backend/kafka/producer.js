const { Kafka } = require('kafkajs');

if (!process.env.KAFKA_BROKER) {
  throw new Error('KAFKA_BROKER is not defined');
}

const kafka = new Kafka({
  clientId: 'backend-service',
  brokers: [process.env.KAFKA_BROKER],
});


const producer = kafka.producer();
console.log('Kafka broker:', process.env.KAFKA_BROKER);

async function connectProducer() {
  await producer.connect();
  console.log('Kafka producer connected');
}

async function publishEvent(topic, payload) {
  await producer.send({
    topic,
    messages: [
      {
        value: JSON.stringify(payload),
      },
    ],
  });
}

module.exports = { connectProducer, publishEvent };
