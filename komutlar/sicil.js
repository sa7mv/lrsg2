const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  
  let user = message.mentions.users.first();
  
  if(user == null)return (message.channel.send(`> **KİŞİYİ ETİKETLEYİN LÜTFEN**`))
  
  if(meh.get(`Sicil_${message.guild.id}_${user.id}`) == null){meh.push(`Sicil_${message.guild.id}_${user.id}`, " TEMİZ")}
  
  let embd = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle(`**__KİŞİNİN İŞLEDİĞİ SUÇLAR__**`)
  .setDescription(`__${user} ADLI KİŞİNİN SUÇLARI __${meh.get(`Sicil_${message.guild.id}_${user.id}`).join(' ')}`)
  message.channel.send(embd);
  if(meh.get(`Sicil_${message.guild.id}_${user.id}`).join(` `) == " TEMİZ"){meh.delete(`Sicil_${message.guild.id}_${user.id}`)}
    } 
else
{
message.channel.send(`> BU KOMUTLAR SADECE BOTUN KOMUT KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sicil"],
  permLevel: 0,
};

exports.help = {
  name: "sicil",
  description: "",
  usage: "",
};