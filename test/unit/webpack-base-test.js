const assert = require('assert');

/* eslint-disable */
describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')
    it('entry', () => {
        assert.equal(baseConfig.entry.main.indexOf('/main/index.js') > 0 , true);
        assert.equal(baseConfig.entry.search.indexOf('/search/index.js')> 0, true);
    });
});