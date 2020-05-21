const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: { type: String, required: true },
    completed: {
      type: Boolean,
      required: true,
    },
    // _user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    collection: "todos",
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Todo", schema);
