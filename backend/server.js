const express = require("express");
const cors = require('cors')

const routes = require('./routes/main')

app.options("*", cors());

const app = express();

app.use('/', routes)
