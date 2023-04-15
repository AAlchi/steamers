const express = require("express");

const app = express();

const dotenv = require("dotenv");

dotenv.config();

let envitem =
  "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";

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require('sendgrid');
sgMail.setApiKey(envitem);
const msg = {
  to: "alialchi07@gmail.com", // Change to your recipient
  from: "aalchikhibrahim6522@stu.d214.org", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.log(error);
  });
