const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`Olá ${message.author}, Abaixo está uma listinha sobre mim:`)
    .setTimestamp()
    .setFooter(`Comando feito por: ${message.author.username}`)
    .addFields(
        {
            name: 'Meu nome e minha #',
            value: `${client.user.tag}`,
            inline: true
        },
        {
            name: '<a:seta:808028820849688646> Servidores:',
            value: `Estou em **${client.guilds.cache.size}** servidores.`,
            inline: true
        },
        {
            name: '<a:seta:808028820849688646> Canais:',
            value: `Tenho **${client.channels.cache.size}** canais de texto.`,
            inline: true
        },
        {
            name: '<a:seta:808028820849688646> Usuários:',
            value: `Cuido de **${client.users.cache.size}** usuários.`,
            inline: true
        },
        {
            name: '<a:seta:808028820849688646> Meu ping:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: true
        },
        {
            name: '<a:seta:808028820849688646> Meus criadores:',
            value: 'NPC REWARDS, !by saikon.',
            inline: true
        },
        {
            name: '<a:seta:808028820849688646> Meu servidor:',
            value:'https://discord.gg/U53QnfahkH',
            inline: true
        },
                {
            name: '<:9136_js:808247510102704198> PLATAFORMA:',
            value: 'estou sendo desevolvido em node.js',
            inline: true
        },
    )
    message.channel.send(embed);
}
