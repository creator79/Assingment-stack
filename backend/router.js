const express = require('express');
const nodeMailer = require('nodemailer');
 const  router = new express.Router();


 router.post("/send", (req, res) => {
        console.log(req.body);
    
        try{
            const transporter = nodeMailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD,
        }
    });
    // console.log(transCLCCporter);

    const mailOptions = {
        from: process.env.EMAIL,
        to:  req.body.email,
        subject: `Sending this email to the assingment  ${req.body.name}: ${req.body.subject}`,
        html: '<h1>Congratulation sucessfull email is send</h1>',
        text: req.body.message


    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        }
        else {
            console.log('Email sent: ' + infO);
            }
        });
    

  }  catch {
        res.status(201).json({message: "Email not send"})
    
  }


    });

    module.exports = router;