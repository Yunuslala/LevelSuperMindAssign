

const RegisterUser=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}


const ResetPassword=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}


const LoginUser=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}


const GetAllUser=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

const GetAllBlogs=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

const ParticularBlogComments=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":"Internal Server Error",error})
    }
}

module.exports={
    RegisterUser,ResetPassword,LoginUser,GetAllUser,GetAllBlogs,ParticularBlogComments
}