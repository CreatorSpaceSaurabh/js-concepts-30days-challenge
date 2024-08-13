import { Kafka, kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092", "localhost:9092"],
});

// ==============Producer===================

const producer = kafka.producer();

const runProducer = async (res) => {
  await producer.connect();

  await producer.send({
    topic: "kafka_topic",
    messages: [
      {
        value: JSON.stringify(res), //"Message that wants to send to consumer"
      },
    ],
  });

  console.log("Message sent successfully");
};

// ==============Consumer===================
const consumer = kafka.consumer({ groupId: "kafka" });

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "kaffka_topic", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log("*****Arrived in consumer*****");
      const obj = JSON.parse(message.value);
      console.log(obj);
      // this part to create our user file
      try {
        const newFile = new File({
          userId: Math.floor(Math.random()),
          username: obj.username,
        });
        const response = await newFile.save();
        if (response) {
          console.log("File created successfully");
        }
      } catch (error) {
        console.log("Catch error:", error);
      }
    },
  });
};

module.exports = { runProducer, runConsumer };
