const express = require('express');
const nodeMailer = require('nodemailer');
 const  router = new express.Router();


 router.post("/user-form", (req, res) => {

        console.log(req.body);
    
        try{
            const transporter = nodeMailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'upadhyayvivek.19@gmail.com',
                    pass: 'gqreruvpwrlxudhs',
        }
    });
    if (!isValidPhoneNumber(phone)) {
        return res.status(400).json({ message: 'Invalid phone number' });
    }
    
    
    function isValidPhoneNumber(phone) {
            const phoneRegex = /^\+?(\d{1,3})\)?[-. ]?(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;
            return phoneRegex.test(phone);
    }
    const mailOptions = {
        from: process.env.EMAIL,
        to:  req.body.email,
        subject: `Sending this email to the assingment  ${req.body.name}: ${req.body.subject}`,
        html: '<h1>Congratulation sucessfully email is send</h1>',
        body: req.body.message,
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






// new code goes here 


// const express = require('express');
// const router = express.Router();
// const nodemailer = require('nodemailer');
// const moment = require('moment');
// const User = require('./models/user');

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// router.post('/user-form', async (req, res) => {
//   const { name, email, phone, dob } = req.body;

//   try {
//     // Save user to the database
//     const user = new User({ name, email, phone, dob });
//     await user.save();

//     // Validate phone number
//     if (!isValidPhoneNumber(phone)) {
//       return res.status(400).json({ message: 'Invalid phone number' });
//     }

//     // Send confirmation email
//     await transporter.sendMail({
//       from: 'My App <noreply@myapp.com>',
//       to: email,
//       subject: 'Form Submission Confirmation',
//       html: `
//         <p>Thank you for submitting the form. Here is a summary of your details:</p>
//         <ul>
//           <li>Name: ${name}</li>
//           <li>Email: ${email}</li>
//           <li>Phone: ${phone}</li>
//           <li>Date of birth: ${moment(dob).format('MMMM Do YYYY')}</li>
//         </ul>
//       `,
//     });

//     res.json({ message: 'Form submitted' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred. Please try again later.' });
//   }
// });

// function isValidPhoneNumber(phone) {
//     const phoneRegex = /^\+?(\d{1,3})\)?[-. ]?(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;
//     return phoneRegex.test(phone);

    
// }

// module.exports = router;
