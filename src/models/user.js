// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userId: { 
    type: String, 
    unique: true, 
    default: function() {
      return Math.random().toString(36).substring(2, 8); // Gera um ID aleatório de 6 dígitos
    } 
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
