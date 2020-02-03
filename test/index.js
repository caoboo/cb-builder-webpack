const path = require('path');
/* eslint-disable */
process.chdir(path.join(__dirname, 'smoke/template'));
describe('builder-webpack test case', () => {
    require('./unit/webpack-base-test');
});