
let fs = require('fs')
let saveFilePath = './app/data/saveFile.json'
let saveFile;
saveFile = fs.readFileSync(saveFilePath,'utf8');
saveFile = JSON.parse(saveFile)
console.log(saveFile);

function savePlayerData() //Global as well
{
  fs.writeFile(saveFilePath,JSON.stringify(saveFile),'utf8', function (error)
  {
    if(error)throw error;
    console.log('File Saved!');
  })
}

$(function() {
  console.log('~ Window Ready ~');
});
