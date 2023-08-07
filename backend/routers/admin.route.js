const express=require("express");
const AdminRouter=express.Router();
const {BlockPost,BlockUser,DeleteUser}=require("../controllers/Admin.cotroller")

AdminRouter.get("/api/blockPost",BlockPost);
AdminRouter.get("/Api/blockUser",BlockUser);
AdminRouter.delete("/api/deleteUser",DeleteUser);



module.exports={
    AdminRouter
}

