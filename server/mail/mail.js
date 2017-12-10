class Email {
    

    constructor(f, t, m, s) {
        this.from = f;
        this.to = t;
        this.message = m;
        this.subject = s;
    }

    send() {
        const nodemailer = require('nodemailer');
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        nodemailer.createTestAccount((err, account) => {

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: "greg.remenyi@gmail.com", // generated ethereal user
                    pass: "yhkwqgmsvhtbvdiq"  // generated ethereal password
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: this.from, // sender address
                to: this.to, // list of receivers
                subject: this.subject, // Subject line
                text: this.message, // plain text body
            };

            console.log(mailOptions)

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });
    }
}

module.exports = Email; 