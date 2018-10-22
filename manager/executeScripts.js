'use strict';

const { turnOnPermissions } = require('./permissionsHandler');
const shell = require('shelljs');

const runScript = script =>
    shell.exec(`${process.cwd()}/manager/scripts/${script}.sh`);

const path = script => `${process.cwd()}/manager/scripts/${script}.sh`;

const execute = script => {
    turnOnPermissions(path(script));
    runScript(script);
};

module.exports = {
    execute
};
