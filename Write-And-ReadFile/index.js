const fs  = require("fs");

fs.writeFile("message.txt","Hello from Kumari on learning NOde ",(err) => {
    if (err) throw err;
    console.log('writing the file    and  The file has been saved!');
  }); 
