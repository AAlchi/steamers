const express = require("express");
const router = express.Router();
const fun = require('../[id]')

router.get("/", async (req, res, next) => {
  fun.getServerSideVolunteers(req);
});

module.exports = router;