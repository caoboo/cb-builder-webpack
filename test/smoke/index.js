const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

/*eslint-disable */
const mocha = new Mocha({
    timeout: '100000ms'
});

process.chdir(path.join(__dirname, 'template'));


const prodConfig = require('../../lib/webpack.prod.js');

rimraf('./dist', () => {
    const prodConfig = require('../../lib/webpack.prod.js');
    webpack(prodConfig, (err, stats) => {
        if (err) {
            console.error(err);
            process.exit(2);
        }
        console.log(stats.toString({
            colors: true,
            modules: false,
            children: false
        }));

        console.log('Webpack build success, begin run test.');

        mocha.addFile(path.join(__dirname, 'html-test.js'));
        mocha.addFile(path.join(__dirname, 'css-js-test.js'));
        mocha.run();
    });
});