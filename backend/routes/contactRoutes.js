const express = require("express");
const Contact = require("../models/contact");

const router = express.Router();
router.get("/", (req, res) => {
  res.json({ message: "Contact route is working." });
});
router.post("/", async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const contact = await Contact.create({
      fullName,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact message submitted successfully.",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit contact message.",
    });
  }
});

module.exports = router;