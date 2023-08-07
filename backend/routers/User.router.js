const express=require("express");
const UserRouter=express.Router();

const {RegisterUser,ResetPassword,LoginUser,GetAllUser,GetAllBlogs,ParticularBlogComments}=require("../controllers/User.Controller");


UserRouter.post("/api/post",RegisterUser);
UserRouter.post("/api/post",LoginUser);
UserRouter.patch("/api/reset/Password",ResetPassword);
UserRouter.get("/api/AllUser",GetAllUser);
UserRouter.get('/api/AllBlogs',GetAllBlogs);
UserRouter.get("api/ParticualarBlogs/Comments",ParticularBlogComments)

module.exports={
    UserRouter
}
