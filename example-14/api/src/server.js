import express from "express";
import { Kafka, logLevel } from "kafkajs";

import { certificationRouter } from "./routes/certifications.js";

const app = express();

// Connection with Kafka
const kafka = new Kafka({
  clientId: 'api',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
  retry: {
    initialRetryTime: 300,
    retries: 10
  }
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'certificate-group-receiver' });

// Add Producer for all the routes
app.use((req, res, next) => {
  req.producer = producer;
  return next();
});

app.use("/", certificationRouter);

async function run() {
  await producer.connect();
  await consumer.connect();
  // await consumer.subscribe({ topic: 'certification-response' });

  app.listen(3333);
}

run().catch(console.error)