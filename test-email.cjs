const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'support@carkasa.com',
        pass: 'rpuivqxpwmerymnh'
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    logger: true,
    debug: true
});

transporter.verify(function (error, success) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Server is ready to take our messages");
    }
});
