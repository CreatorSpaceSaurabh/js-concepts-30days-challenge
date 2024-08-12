require("../MessageQueue/rabbitMq");

// for making kafka producer running
const kafkaService = require("../MessageQueue/kafka");
kafkaService.run();
