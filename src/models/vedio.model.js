import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
  vediofile: {
    type: String, // cloudinary url
    required: true,
  },
  thumbnails: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  ispublished: {
    type: Boolean,
    default: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
});

export const Vedio = mongoose.model("Vedio", videoSchema);
