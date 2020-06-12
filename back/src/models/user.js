const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('User', UserSchema, 'users');
