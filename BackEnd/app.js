const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Use CORS middleware to allow requests from your client origin

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "vitorfernandoswag@gmail.com",
        pass: "nmde nmrp pdxl fdiw",
    }
});

app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    try {
      await transporter.sendMail({
        from: 'sender@example.com',
        to, // Make sure this is correctly passed from the client
        subject,
        text,
      });
      res.send({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send({ message: 'Failed to send email', error });
    }
  });
  
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });

  const url = "";