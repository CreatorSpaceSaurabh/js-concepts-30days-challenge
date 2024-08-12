import { Kafka, kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092", "localhost:9092"],
});

const producer = kafka.producer();

export const run = async () => {
  await producer.connect();

  await producer.send({
    topic: "kafka_topic",
    messages: [{ value: "Message that wants to send to consumer" }],
  });

  console.log("Message sent successfully");
};

module.exports = { run };
