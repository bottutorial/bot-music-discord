const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`ajuda`)
    .setDescription(` <:discord:810304348990341131> AJUDA <a:discord:810304348990341131>
    
      <a:1_:810304949979971634><a:emoji_2:810211688153481246> : diversão

      <a:2_:810304950352478239><a:emoji_2:810211688153481246> : moderação

      🌐<a:emoji_2:810211688153481246> para voltar ao menu principal
      
      `)
    .setColor("RANDOM")    
    message.channel.send(embed).then(msg => {
      msg.react("1️⃣")
      msg.react("2️⃣")
      msg.react("🌐")

      let filtro1 = (r, u) => r.emoji.name === '1️⃣'&& u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '2️⃣'&& u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '🌐' && u.id === message.author.id;



      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);


      coletor.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de diversão`)
        .setDescription(`o!slap\no!hug\no!kiss\no!calculate\no!ping\no!corona\no!anime\no!dm\no!conselho\no!ascii`)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })

      coletor2.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Comandos de moderação`)
        .setDescription(`o!mute\no!unmute\no!warn\no!kick\no!ban\no!clear\no!sorteio.`)
        .setColor("RANDOM")

        msg.edit(embed)
      })
      
      coletor3.on("collect", c => {
        let embed = new Discord.MessageEmbed()
        .setTitle(`Central de comandos`)
        .setDescription(` <:discord:810304348990341131> AJUDA <a:discord:810304348990341131>
    
      <a:1_:810304949979971634><a:emoji_2:810211688153481246> :diversão

      <a:2_:810304950352478239><a:emoji_2:810211688153481246> :moderação

      🌐<a:emoji_2:810211688153481246> para voltar ao menu principal
      
      `)
        .setColor("RANDOM")
        
        msg.edit(embed)
      })
    })
  }
