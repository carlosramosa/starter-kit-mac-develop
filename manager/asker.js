'use strict';

const inquirer = require('inquirer');
const { one, two, three, four, five, six } = require('./data/questions')
const iTerm = require('./iTerm');
const { execute } = require('./executeScripts');

const ask =  question => script  =>
    script
        ? inquirer.prompt(question).then(script)
        : inquirer.prompt(question);

// //I make my own composition because I do not feel like installing lodash
// const compose = f => x => f(x());

const processAnswer = script => ({ answer }) =>
    answer
        ? execute(script)
        : console.log( 'Are you crazy ?!?!?!?!');

module.exports = () =>
    inquirer.prompt(one)
        .then( () => ask (two) (processAnswer('install_brew')))
        .then( () => ask (three) (processAnswer('install_git')))
        .then( () => ask (four) (processAnswer('install_node')))
        .then( () => ask (five) (processAnswer('install_python')))
        .then( () => ask (six) (iTerm));


