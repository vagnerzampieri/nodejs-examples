import { Kafka } from "kafkajs";

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  clientId: 'certificate'
});

const topic = 'issue-certificate';
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'certificate-group' });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
      console.log(`- ${prefix} ${message.key}#${message.value}`);

      // send message for api
      const payload = JSON.parse(message.value);

      producer.send({
        topic: 'certification-response',
        messages: [
          { value:  `User certificate ${payload.user.name} from course ${payload.course} is generated!`}
        ]
      })
    }
  })
};

run().catch(console.error);