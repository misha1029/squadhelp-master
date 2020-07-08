import nodemailer from 'nodemailer';

module.exports.emailLinkPassword = (token, to) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fran1rip11f@gmail.com',
            pass: '12344321q',
        }
    });

    const mailOptions = {
        from: 'fran1rip11f@gmail.com',
        to: to,
        subject: 'Password recovery with SquadHelp',
        html: '<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.' +
            'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it: <a href="http://localhost:3000/reset/' + token + '">Link</a>' +
            ' If you did not request this, please ignore this email and your password will remain unchanged.</p>',
    };

    transporter.sendMail (mailOptions, function (err, info) {
        if (err)
            console.log (err);
        else
            console.log (info);
    });
};