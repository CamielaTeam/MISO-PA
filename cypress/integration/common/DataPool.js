const { faker } = require("@faker-js/faker");

export const dataDict = {
  "a correct email": "test5@example.com",
  "a correct password": "password123",
  "an incorrect email": "test@",
  numbers: "6391012648201",
  "a short password": "abc",
  "a long password":
    "qwertyuiopasdfghjklñzxcvbnmqqqqqqqqqqqqqqwqweqwetyuiophjklfdsazzmxnxnxbcbcbfqqtwtwseijdjdjdjdkslzieeqpaaatetetwwqqqwweerrrtttyyuuu",
  "an empty text": " ",
  "an email with whitespace at the end": "test_email@example.com ",
  "an email with whitespace": "test email@example.com",
};

export const pseudoRandDict = {
  "a correct email": faker.internet.email(),
  "a correct password": faker.internet.password(),
  "a very long password": faker.internet.password(100),
  "a password with whitespace": faker.internet.password(
    null,
    null,
    null,
    "                    "
  ),
};
