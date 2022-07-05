export default async(req, res) => {
  require('dotenv').config()  
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "srinichrocks@gmail.com", 
          pass: process.env.password,
        },
    });
    const mailData = {
      from: "srinichrocks@gmail.com", // sender address
      to: "sraghavendran17@berkeley.edu", // list of receivers
      subject: req.body.subject, // Subject line
      text: "Name: " + req.body.name + "\nEmail: " + req.body.email + "\nMessage: " + req.body.message,
     }
     transporter.sendMail(mailData, function (err, info) {
      if(err){
        console.log(err);
        res.send("error" + JSON.stringify(err));
      }
      else{
        console.log("mail send");
        res.send("success");
      }
    })
    res.status(200)
    // console.log(typeof(process.env.password))
  }
  