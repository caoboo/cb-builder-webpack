const glob = require('glob');
const path = require('path');

module.exports = (projectRoot) => {
  const entry = {};
  const entryFiles = glob.sync(path.join(projectRoot, './src/*/index.js'));
  entryFiles.forEach((file) => {
    const match = file.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1];
    entry[pageName] = file;
  });

  return entry;
};
