const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log(res);
});

module.exports = router;