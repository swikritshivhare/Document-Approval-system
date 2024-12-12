const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: {
    type: String,
    enum: ['submitted', 'approved', 'rejected', 'pending'],
    default: 'submitted'
  },
  approvals: [
    {
      approved: { type: Boolean, default: false },
      rejected: { type: Boolean, default: false },
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("loginUsers", userSchema);
module.exports = mongoose.model("documents", documentSchema);

