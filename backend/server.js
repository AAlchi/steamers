const express = require("express");
const cors = require('cors')

const routes = require('./routes/main')

const app = express();

app.options("*", cors());

app.use('/', routes)

app.listen(8080);