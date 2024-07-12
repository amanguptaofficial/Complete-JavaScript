const {Client} = require("whatsapp-web.js");


const client = new Client();

client.on('qr',(qr)=>{
   console.log("QR Recieved...", qr); 
   
})

client.on('ready',()=>{
 console.log("client is ready...");
})

client.initialize();