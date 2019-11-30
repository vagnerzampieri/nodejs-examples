import express from "express";
import { CompressionTypes } from "kafkajs";

const router = express.Router();

router.post("/certifications", async (req, res) => {
  const message = {
    user: { id: 1, name: 'Vagner Zampieri' },
    course: 'Kafka with Node.js'
  };

  await req.producer.send({
    topic: 'issue-certificate',
    compression: CompressionTypes.GZIP,
    messages: [
      { value: JSON.stringify(message) },
      { value: JSON.stringify({ ...message, user: { ...message.user, name: 'Jesus' } }) },
    ]
  });

  return res.json({ ok: true });
});

export { router as certificationRouter };