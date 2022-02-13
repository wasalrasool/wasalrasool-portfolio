// project schema

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Project name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter Project description"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  link: {
    type: String,
    required: [true, "Please enter link to your Project"],
  },
  languages: [
    {
      name: {
        type: String,
        required: [true, "Please enter languages used"],
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
