const express = require('express');
const connect = require('../../../mongo');

const app = express();

// Enable parsing of JSON bodies sent in POST requests
app.use(express.json());

// The remaining code was removed because it is converted into individual serverless functions.
