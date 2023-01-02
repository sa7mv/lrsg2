const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if("520213732752621568" == message.author.id)
  {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın');
  message.delete();
  message.channel.send(mesaj);
  } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yaz"],
  permLevel: 0,
};

exports.help = {
  name: "söyle",
  description: "",
  usage: "",
};