const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    username: { type: String },
    email: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String, default: "" },
    _chats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("User", schema);
