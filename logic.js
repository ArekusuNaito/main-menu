let fs = require('fs')
let settings;
// fs.readFile('./app/data/settings.json','utf8', function (error,data)
// {
//   if(error)throw error;
//   settings = JSON.parse(data)
//   console.log('Settings',settings);
// })
settings = fs.readFileSync('./app/data/settings.json','utf8');
settings = JSON.parse(settings)

window.onload = function()
{
  console.log("Window is ready");
}
