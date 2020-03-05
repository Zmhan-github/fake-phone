const uniqueRandomArray = require("unique-random-array");
const phoneNumbers = require("./phone-numbers-kz");

module.exports = {
  all: phoneNumbers,
  random: uniqueRandomArray(phoneNumbers)
};
