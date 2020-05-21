const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    username: { type: String },
    email: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    password: { type: String, default: "" },
    gender: { type: String, enum: ["Female", "Male"] },
    phone: { type: String },
    job: { type: String },
    _contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    _todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }],
    // _chats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
  },
  {
    collection: "users",
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("User", schema);
