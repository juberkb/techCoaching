// routes/inquiryRoutes.js
const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry'); // Adjust the path as necessary
const nodemailer = require('nodemailer');

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another service
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your email password or app password
  },
});

// POST request to save inquiry and send email
router.post('/inquiries', async (req, res) => {
  console.log(req.body);
  const { fullName, emailAddress, mobileNo, address, message } = req.body;

  const inquiry = new Inquiry({ fullName, emailAddress, mobileNo, address, message });
  try {
    // Save inquiry to MongoDB
    await inquiry.save();

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'kbraj289@gmail.com', // Change to the recipient's email
      subject: 'New Inquiry from Contact Us',
      text: `You have a new inquiry from ${fullName}:\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: 'Inquiry submitted and email sent successfully!' });
  } catch (error) {
    console.error('Error saving inquiry or sending email:', error);
    res.status(500).json({ message: 'There was an error submitting your inquiry. Please try again later.', error: error.message });
  }
});

module.exports = router;
