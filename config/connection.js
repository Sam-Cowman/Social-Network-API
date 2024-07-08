// config/connection.js
const { connect, connection } = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network';

connect(connectionString);

connection.on('connected', () => {
  console.log('Mongoose connected to ' + connectionString);
});

connection.on('error', (err) => {
  console.error('Mongoose connection error: ', err);
});

connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = connection;