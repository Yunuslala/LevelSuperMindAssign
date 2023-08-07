const express=require("express");
const BlogRouter=express.Router();

const {PostBlog,UpdateBlog,DeleteBlogs}=require("../controllers/Blog.Controller");


BlogRouter.post("/api/post",PostBlog);
BlogRouter.patch("/api/update",UpdateBlog);
BlogRouter.delete('/api/delete',DeleteBlogs);

module.exports={
    BlogRouter
}