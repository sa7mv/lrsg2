const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  var bölge;
  if(isNaN(args[0]))
  {
  if(args[0] == "maden"){
  bölge = args[0];
  }
  else if(args[0] == "orman"){
  bölge = args[0];
  }
  else if(args[0] == "iskele"){
  bölge = args[0];
  } 
  else if(args[0] == "ev"){
  bölge = args[0];
  }
  else{
    message.channel.send(`> **YANLIŞ GİRİŞ YAPTIN. <ÖRN:maden,orman,iskele,ev>**`);
  }
  if(bölge == "maden" || bölge == "orman" || bölge == "iskele" || bölge == "ev"){
    
  meh.set(`go_${message.author.id}`, bölge);
  meh.add(`Para_${message.author.id}`, -5);
  var embd = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setTitle(`**BÖLGEYE GİDİLDİ**`)
  .setDescription(`${args[0]} adlı bölgeye gittin gidiş ücreti olarak 500 TL kaybettin`)
  .setTimestamp()
  .setFooter(`sunucu ${message.guild.memberCount} kişi`)
  message.channel.send(embd);
  }
  }
    } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["go"],
  permLevel: 0,
};

exports.help = {
  name: "git",
  description: "",
  usage: "",
};