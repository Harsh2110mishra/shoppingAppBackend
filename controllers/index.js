const { contacts } = require("../models");

module.exports.contact = async (req, res) => {
  try {
    console.log(req.body);
    const contactUs = await contacts.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    console.log(contactUs);
    return res.status(200).json({
      success: true,
      message: contactUs,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      error: error,
    });
  }
};

module.exports.testing = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      greetings: "hello from backend",
    });
  } catch (error) {
    return res.status(400).json({
      success: true,
      error: error,
    });
  }
};
