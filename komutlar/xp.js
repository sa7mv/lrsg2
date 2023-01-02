const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  let embd = new Discord.MessageEmbed()
  .setColor(`RANDOM`)
  .setTitle(`**${message.author.username} XP**`)
  .setThumbnail(message.author.avatarURL({dynamic : true}))
  .setDescription(`${meh.get(`Xp1_${message.author.id}`)} Xp=${meh.get(`Xp_Puan1_${message.author.id}`)}-${meh.get(`Xp_kalan1_${message.author.id}`)}`)
  .setTimestamp()
  .setFooter(`sunucu ${message.guild.memberCount} kişi`)
  message.channel.send(embd);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["XP","Xp"],
  permLevel: 0,
};

exports.help = {
  name: "xp",
  description: "",
  usage: "",
};