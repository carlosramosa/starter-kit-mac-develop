'use strict';


const { download } = require('./downloader');
const { turnOnPermissions } = require('./permissionsHandler');
//const Extractor = require('./extractor');


module.exports = () => {
    turnOnPermissions(process.cwd());
    return download.iTerm2()
    // .then(() => Extractor(`${process.cwd()}/iTerm.zip`)(`${process.cwd()}`)
    // )
};