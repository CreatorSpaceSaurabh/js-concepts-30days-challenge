const amqp = require("amqplib");

async function connect() {
  const connection = await amqp.connect("amqp://localhost");
  // ... remaining steps

  const channel = await connection.createChannel();

  // Producer
  const result = await channel.assertQueue("jobs");
  const msg = { number: 42 };
  channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
  console.log(`Sent job: ${msg.number}`);

  // Consumer
  await channel.assertQueue("jobs");

  channel.consume("jobs", (message) => {
    console.log(`Received job: ${message.content.toString()}`);
    channel.ack(message);
  });
}

// Promise/Async API example
(async () => {
  const queue = "tasks";
  const conn = await amqp.connect("amqp://localhost");

  const ch1 = await conn.createChannel();
  await ch1.assertQueue(queue);

  // Listener
  ch1.consume(queue, (msg) => {
    if (msg !== null) {
      console.log("Received:", msg.content.toString());
      ch1.ack(msg);
    } else {
      console.log("Consumer cancelled by server");
    }
  });

  // Sender
  const ch2 = await conn.createChannel();

  setInterval(() => {
    ch2.sendToQueue(queue, Buffer.from("something to do"));
  }, 1000);
})();

module.exports = { connect };
