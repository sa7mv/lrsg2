const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
if(meh.get(`ağırgüç_${message.author.id}`) == 190){
meh.delete(`ağırgüç_${message.author.id}`);
meh.set(`ağırgüç_${message.author.id}`, 100);
let embd = new Discord.MessageEmbed()
.setColor(`GREEN`)
.setDescription(`ÇANTA ÇIKARILDI AĞIRLIK 100 OLDU`)
.setTimestamp()
.setFooter(`sunucu ${message.guild.memberCount} kişi`)
message.channel.send(embd);
} 
else
{
message.channel.send(`> **TAKILI ÇANTA YOK**`);
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
  aliases: ["çantaçıkar"],
  permLevel: 0,
};

exports.help = {
  name: "cantacıkar",
  description: "",
  usage: "",
};