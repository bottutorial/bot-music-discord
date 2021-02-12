module.exports.run = async (client, message, args) => {

  const m = await message.channel.send('ping?');

  m.edit(`ola ${message.author}, aki esta seu ping,\n📡 **| Pong!**\nPing do Only com server: **${m.createdTimestamp -

      message.createdTimestamp}ms.**\n🚀 Seu Ping é: **${Math.round(

      client.ws.ping

    )}ms**`

  );

}; 
