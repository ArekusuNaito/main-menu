
let fs = require('fs')
let settingsFile;
let settingsFilePath = './app/data/settings.json'
// fs.readFile('./app/data/settings.json','utf8', function (error,data)
// {
//   if(error)throw error;
//   settings = JSON.parse(data)
//   console.log('Settings',settings);
// })
settingsFile = fs.readFileSync(settingsFilePath,'utf8');
settingsFile = JSON.parse(settingsFile)

$(function() {
  console.log('~ Window Ready ~');
});
