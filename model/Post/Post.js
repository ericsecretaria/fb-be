const mongoose = require("mongoose");

// Schema
const postSchema = new mongoose.Schema(
  {
    foodtitle: {
      type: String,
      required: true,
    },
    foodtimeprep: {
      type: String,
      required: true,
    },
    foodrecipe: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    foodcontent: {
      type: String,
      required: true,
    },
    claps: {
      type: Number,
      default: 0,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    shares: {
      type: Number,
      default: 0,
    },
    postViews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    scheduledPublished: {
      type: Date,
      default: null,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

// Compile schema to model

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
