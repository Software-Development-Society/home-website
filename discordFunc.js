require('dotenv').config()
const {
    Client,
} = require("discord.js");
const client = new Client({
    intents: 32767,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

var channel;
var channel2;
client.once('ready', async () => {
    console.log('Ready!');
    channel = await client.channels.fetch(process.env.CHANNEL).catch( err=>{
        console.log("Could not find channel `Signup`\n", err);
    });
    channel2 = await client.channels.fetch(process.env.CHANNEL2).catch( err=>{
        console.log("Could not find channel `Site Log`\n", err);
    });
});
function sendMessage(message){
  if(channel){
    try {
        channel.send(message);
    } catch (error) {
        console.log(error);
        console.log("Could not send message");
    }
      
  }
}
function sendMessage2(message){
    if(channel2){
      try {
          channel2.send(message);
      } catch (error) {
          console.log(error);
          console.log("Could not send message");
      }
        
    }
  }


client.login(process.env.DISCORD).catch( error =>{
    console.log(error);
    console.log("\nCould not log in");
});
module.exports = {sendMessage, sendMessage2};