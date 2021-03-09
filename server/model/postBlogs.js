import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  Author: String,
});

const PostBlogs = mongoose.model("PostBlogs", postSchema);

export default PostBlogs;
