const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido Ã s ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { join } = require('path');
const db = require('quick.db');
const { readdirSync } = require('fs');

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.on("ready", () => {
  let activities = [
      `FiveM com ${client.users.cache.size} Membros ðŸŽ®`,
      `VersÃ£o atual: â”‚ 2.0.0 â”‚ðŸ“Œ`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING",
      }), 1000 * 50);
  client.user
      .setStatus("online")
      .catch(console.error);
console.log("Estou Online!")
});


client.on("ready", () => {
  let activities = [
     `Developed by ! Code x7junior#0001 ðŸ’ª`
    ],
    i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "STREAMING",
        url: 'https://www.twitch.tv/x7junior'
      }), 1000 * 60); 
  client.user
      .setStatus("online")
      .catch(console.error);
console.log("Stream ok")
});







client.login(process.env.TOKEN);
