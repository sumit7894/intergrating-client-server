const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors');
app.use(cors());
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})

const health = async (req,res) =>{
    try {
        return res.status(201).json({
        success:true,
        message:"Yup!! the health is great you have successfully fetched the GET requres",
        err:{}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Somthing bad happen",
            err:error
        })
    }
}
const Router = express.Router();
app.use('/api',Router);



Router.route('/health').get(health);