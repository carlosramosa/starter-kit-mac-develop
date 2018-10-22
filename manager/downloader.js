'use strict';

const DownloaderMultiformat = require('downloader-multiformat');

const iTerm2 = () =>
    DownloaderMultiformat(
        {
            name: 'iTerm2'
            , url: 'https://iterm2.com/downloads/stable/latest'
            , format: 'zip'
        }
    );

const docker = () =>
    DownloaderMultiformat(
        {
            name: 'docker'
            , url: 'https://download.docker.com/mac/stable/Docker.dmg'
            , format: 'dmg'
        }
    );

const sublimeText2 = () =>
    DownloaderMultiformat(
        {
            name: 'SublimeText2'
            , url: 'https://download.sublimetext.com/Sublime%20Text%202.0.2.dmg'
            , format: 'dmg'
        }
    );

module.exports = {
    iTerm2
    , docker
    , sublimeText2
};
