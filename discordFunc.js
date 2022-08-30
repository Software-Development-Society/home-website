require('dotenv').config()
const {
    Client,
} = require("discord.js");
const client = new Client({
    intents: 32767,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
var channel;
client.once('ready', async () => {
    console.log('Ready!');
    channel = await client.channels.fetch(process.env.DISCORD);
});
function sendMessage(message){
  if(channel){
      channel.send(message);
  }
}


client.login(process.env.DISCORD);
module.exports = {sendMessage};