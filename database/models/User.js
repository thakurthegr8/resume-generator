const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = Schema({
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const educationSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
});

const projectSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
});

const experienceSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
});

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    contact: {
      type: contactSchema,
    },
    education: {
      type: [educationSchema],
    },
    project: {
      type: [projectSchema],
    },
    experience: {
      type: [experienceSchema],
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("resume_user", userSchema);

module.exports = User;
