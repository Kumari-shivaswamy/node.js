const fs  = require("fs");

fs.writeFile("message.txt","Hello from Kumari on learning NOde ",(err) => {
    if (err) throw err;
    console.log('writing the file    and  The file has been saved!');
  }); 
fs.readFile("./message.txt", 'utf8',(err, data) => {
  if (err) throw err;
  console.log("reading the file"+data);
}); 
