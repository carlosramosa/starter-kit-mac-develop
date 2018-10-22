'use strict';

const shell = require('shelljs');

const turnOnPermissions = path =>
    shell.chmod( '+x', path );


module.exports = {
    turnOnPermissions
};
