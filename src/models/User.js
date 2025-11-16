// server/models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  lastPlacedAt: { type: Date, default: null }
});
module.exports = mongoose.model('User', UserSchema);
