const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  joinRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
