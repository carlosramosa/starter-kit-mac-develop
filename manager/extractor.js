'use strict';

const extract = require('extract-zip');
const fs = require('fs');

module.exports = file => dir =>
    extract(file, { dir }), err => console.log (err);
