const { Kafka } = require('kafkajs');
const { sendMessageToSocketId } = require('../socket');

const kafka = new Kafka({
  clientId: 'socket-service',
  brokers: [process.env.KAFKA_BROKER],
});

const consumer = kafka.consumer({ groupId: 'socket-consumers' });

async function startKafkaConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'ride.created' });
  await consumer.subscribe({ topic: 'ride.confirmed' });
  await consumer.subscribe({ topic: 'ride.started' });
  await consumer.subscribe({ topic: 'ride.ended' });
  await consumer.subscribe({ topic: 'ride.on_sight' });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const payload = JSON.parse(message.value.toString());

      sendMessageToSocketId(payload.socketId, {
        event: payload.event,
        data: payload.data
      });
    }
  });

  console.log('Kafka consumer running');
}

module.exports = { startKafkaConsumer };
