const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendVerificationEmail = async (email, verificationCode) => {
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: 'Verificação de Email - GT BEZERRA',
        html: `
            <p>Verificação de Email</p>
            <p>Seu código de verificação é: <strong>${verificationCode}</strong></p>
            <p>Este código é válido por 20 minutos.</p>
            <p>Se você não solicitou este código, por favor ignore este email.</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (e) {
        console.error('Erro ao enviar email de verificação:', e);
        return false;
    }
};

module.exports = {
    sendVerificationEmail
};

