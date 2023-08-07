const express=require("express");
const CommentRouter=express.Router();

const {PostComment,UpdateComment,DeleteComments}=require("../controllers/Comment.Controller");


CommentRouter.post("/api/post",PostComment);
CommentRouter.patch("/api/update",UpdateComment);
CommentRouter.delete('/api/delete',DeleteComments);

module.exports={
    CommentRouter
}









