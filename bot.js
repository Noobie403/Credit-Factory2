const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543752674055553029")
setInterval(function() {
channel.send(`Hello mother fuckers it's nice for me the fuck your mam هلو يا ورعان اي نيد يو تو ريبيت`);
}, 30)
})

client.login(process.env.BOT_TOKEN);