const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  let embd = new Discord.MessageEmbed();
  var yazıtura = [
      "yazı",
    "tura"
    ];
  var de = yazıtura[Math.floor(Math.random() * yazıtura.length)];
  var para = args[1];
  if(args[1] == "all")return (para = meh.get(`Para_${message.author.id}`))
  if("yazı" == de && args[0] == "yazı")
  {
    meh.add(`Para_${message.author.id}`, para);
    embd.setColor(`GREEN`);
    embd.setTitle(`**YAZITURA**`);
    embd.setDescription(`YAZI GELDİ +${para}`);
    embd.setTimestamp();
    embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
  }
  if("yazı" == de && args[0] == "tura")
  {
    meh.add(`Para_${message.author.id}`, -para);
    embd.setColor(`RED`);
    embd.setTitle(`**YAZITURA**`);
    embd.setDescription(`YAZI GELDİ -${para}`);
    embd.setTimestamp();
    embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
  } 
  if("tura" == de && args[0] == "tura")
  {
    meh.add(`Para_${message.author.id}`, para)
    embd.setColor(`GREEN`);
    embd.setTitle(`**YAZITURA**`);
    embd.setDescription(`TURA GELDİ +${para}`);
    embd.setTimestamp();
    embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
  } 
  if("tura" == de && args[0] == "yazı")
  {
    meh.add(`Para_${message.author.id}`, -para);
    embd.setColor(`RED`);
    embd.setTitle(`**YAZITURA**`);
    embd.setDescription(`TURA GELDİ -${para}`);
    embd.setTimestamp();
    embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
  } 
    message.channel.send(embd);
    } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
} 
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazıtura"],
  permLevel: 0,
};

exports.help = {
  name: "yazı-tura",
  description: "",
  usage: "",
};