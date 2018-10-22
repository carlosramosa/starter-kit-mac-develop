'use strict';

const DownloaderMultiformat = require('downloader-multiformat');

const iTerm2 = () =>
    DownloaderMultiformat(
        {
            name: 'iTerm2'
            , url: 'https://iterm2.com/downloads/stable/latest'
        }
    );

module.exports.download = {
    iTerm2
};
