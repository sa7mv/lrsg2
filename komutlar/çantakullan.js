const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
if(meh.get(`Çanta_${message.author.id}`) >= 1){
meh.delete(`ağırgüç_${message.author.id}`);
meh.set(`ağırgüç_${message.author.id}`, 190);
let embd = new Discord.MessageEmbed()
.setColor(`GREEN`)
.setDescription(`ÇANTA TAKILDI AĞIRLIK SAYIN 190 OLDU`)
.setTimestamp()
.setFooter(`sunucu ${message.guild.memberCount} kişi`)
message.channel.send(embd);
} 
else
{
message.channel.send(`> **KULLANICAK ÇANTAN YOK <${ayarlar[message.guild.id].prefix}market>**`);
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
  aliases: ["çantakullan"],
  permLevel: 0,
};

exports.help = {
  name: "cantakullan",
  description: "",
  usage: "",
};