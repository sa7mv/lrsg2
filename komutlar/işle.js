const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  if(meh.get(`Taş_${message.author.id}`) >= 10){
    
    meh.add(`Taş_${message.author.id}`, -10);
    meh.add(`Madeni_Token_${message.author.id}`, 125);
    let embd = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`10 taş işlendi para almak için 125 token verildi \` <${ayarlar[message.guild.id].prefix}sat <token> <miktar> \``)
    .setTimestamp()
    .setFooter(`sunucu ${message.guild.memberCount} kişi`)
    message.channel.send(embd);
    
    
  }
  else
  {
    message.channel.send(`> YETERİ KADAR TAŞ YOK EN AZ 10 TAŞ GEREKLİ`);
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
  aliases: ["taşişle"],
  permLevel: 0,
};

exports.help = {
  name: "işle",
  description: "",
  usage: "",
};