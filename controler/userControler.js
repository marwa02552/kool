const User =require('../schema/UserSchema')
const Request=require('../schema/requestSchema')
const bcrypt = require('bcrypt');
const rounds=10
const nodemailer = require('nodemailer');

const getAlluser=async(req,res)=>{
    const users=await User.find()
    return res.json(users)
}
const sendResquest =async(req,res)=>{
    const {firstName,lastName,email,phoneNumber,restaurantName,restaurantLocation}=req.body
    const existEmail=await Request.findOne({email:email})
    if(existEmail){
        return res.json({err:'this requrst is already existe please try with another email'})
    }
    const request=new Request({
        firstName,lastName,email,phoneNumber,restaurantName,restaurantLocation
    })
    await request.save()
    return res.json(request)
}
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use the service you want to send through
    auth: {
      user: 'koolDev2023@gmail.com',
      pass: 'zazr janz egup shpv'
    }
  });
const updateStatus=async(req,res)=>{
    const mailOptions = {
        from: 'koolDev2023@gmail.com',
        to: 'm.nassane@esi-sba.dz',
        subject: 'Hello from Node.js',
        text: 'This is a test email sent from a Node.js application.' 
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email: ', error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })
}
module.exports={
 getAlluser,
 sendResquest,
 updateStatus
}