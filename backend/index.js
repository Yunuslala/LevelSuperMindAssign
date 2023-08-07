const express=require("express");
const app=express();
const {connection}=require("./config/db");
const cors=require("cors");
const {UserRouter}=require("./routers/User.router");
const {CommentRouter}=require("./routers/comment.route");
const {BlogRouter}=require("./routers/Blog.route");
const {AdminRouter}=require("./routers/admin.route");


require('dotenv').config()
app.use(cors());
app.use(express.json());

app.use("/user",UserRouter);
app.use("/Comments",CommentRouter);
app.use("/Blogs",BlogRouter);
app.use("/Admin",AdminRouter);





app.listen(process.env.port||5000,async()=>{
    try {
        await connection
        console.log("rds is connected")
    } catch (error) {
        console.log("rds is not coonected")
    }
    console.log(`http://localhost:5000`)
})