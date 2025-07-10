const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const User = require('../models/user');

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

test('toJSON removes password', async () => {
  const user = new User({ username: 'test', password: 'secret', signedUp: true });
  await user.save();
  const json = user.toJSON();
  expect(json.password).toBeUndefined();
});
