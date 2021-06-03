import { model, Schema, models } from "mongoose";

const BlogSchema = new Schema({
    title: String,
    content: String,
    imageType: String,
    imagePath: String,
})

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;