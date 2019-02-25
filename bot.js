const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548138419663011870")
setInterval(function() {
channel.send(` @everyone :)متلعبش معايا :( @everyone  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
