const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const userType={
    admin:'admin',
   
    manager:'manager',
    customerServise:'customerService'
}

const User=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    honeNumber:Number,
    userType:{
        enum:Object.values(userType),
     
    }
})

module.exports =mongoose.model('User', User);