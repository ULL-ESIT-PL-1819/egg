var {runFromFile}  = require('eggvm');

const fileName = process.argv.slice(2).shift();
if (fileName && fileName.length > 0) runFromFile(fileName);

