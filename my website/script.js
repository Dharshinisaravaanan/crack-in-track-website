// Import the Nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport with Gmail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sdharshini148-email@gmail.com', // Your Gmail account
        pass: 'Dharshini@28' // Your Gmail password or app-specific password
    }
});

// Set up email data
let mailOptions = {
    from: 'sdharshini148-email@gmail.com', // Sender address
    to: 'saravanangind-email@gmail.com', // List of recipients
    subject: 'Safety Alert', // Subject line
    text: 'Alert: Sensor detected a value out of range!' // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});






