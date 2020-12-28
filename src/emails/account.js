const sgMail = require('@sendgrid/mail');

const APIKEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(APIKEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sadhudamodhar12@gmail.com',
        subject: 'Welcome to Task Manager!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sadhudamodhar12@gmail.com',
        subject: 'Sorry to see you go',
        text: `GoodBye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}