// console.log("Email module loaded");

const mailer = require('nodemailer');

// which service to use -- gmail 
let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sweetpoison307@gmail.com'
        , pass: '#' 
    }
});
// message ka object

let message = {
    from: 'sweetpoison307@gmail.com'
    , to: 'nandinii2005@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email sent using Node.js and Nodemailer.',
};

transporter.sendMail(message, (error, info) => {
    if (error) {
        console.log('Error occurred while sending email:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});