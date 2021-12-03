const express = require ('express');
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();

const PORT = process.env.PORT|| 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));