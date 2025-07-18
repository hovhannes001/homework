const express = require('express');
const app = express();
const db = require('../db');
const { encrypt, decrypt } = require('../encryptor');

app.post("/", (req,res) => {

})