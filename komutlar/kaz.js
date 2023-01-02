const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  if(meh.get(`go_${message.author.id}`) == "maden"){
  if(meh.get(`Kazma_${message.author.id}`) >= 1){
  if(meh.get(`ağırlık_${message.author.id}`) <= 100){
    
  meh.add(`Taş_${message.author.id}`, 1);
  let embd = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setDescription(`1 ADET TAŞ TOPLANDI`)
  .setTimestamp()
  .setFooter(`sunucu ${message.guild.memberCount} kişi`)
  message.channel.send(embd);
  
  } 
  else
  {
    message.channel.send(`> **FAZLA AĞIRLIK TAŞINAMAZ**`);
  } 
  } 
  else
  {
    message.channel.send(`> **ENVANTERDE KAZMA BULUNMAMAKTA**`);
  } 
  }
  else
  {
    message.channel.send(`> **ÖNCE MADENE GİTMEN LAZIM <${ayarlar[message.guild.id].prefix}maden>**`);
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
  aliases: ["kaz"],
  permLevel: 0,
};

exports.help = {
  name: "kazı",
  description: "",
  usage: "",
};