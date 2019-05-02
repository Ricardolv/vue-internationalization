
import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');

app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);

console.log('server started '+ port);
