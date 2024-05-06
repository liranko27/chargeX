const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chargexisrael@gmail.com',
        pass: 'zqwx retp zuex baez'
    }
});



function sendMail() {
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const customer_email = document.body.getElementsByClassName('customer_email').value
const customer_message = document.body.getElementsByClassName('customer_message').value
const customer_subject = document.body.getElementsByClassName('customer_issue').value
const form_submit = document.body.getElementsByClassName('submit')

const mailOptions = {
    from: 'chargexisrael@gmail.com',
    to: 'chargexisrael@gmail.com',
    subject: customer_subject,
    text: customer_message + customer_email
};

form_submit.addEventListener('click', (e) => {
    e.preventDefault()
    sendMail()
})