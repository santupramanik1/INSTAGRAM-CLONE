import mongoose from "mongoose";

// Postschema  for store the user post
const postSchema = new mongoose.Schema({
    caption: { type: String, default: '' },
    image: { type: String, require: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    Comments: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})
export const Post = mongoose.model('Post', postSchema)