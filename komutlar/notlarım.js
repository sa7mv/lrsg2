const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`) || message.channel.id == "1015955561004683374")
  {
  
  if(meh.get(`Not_${message.author.id}`) == null)return (message.channel.send(`> **NOT DEFTERİNİZ BOŞ**`))
  else if(args[0] == null)
  {
    let embd = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`**📃__NOTLARINIZ__** \n \n${meh.get(`Not_${message.author.id}`).join("\n")}`);
    message.channel.send(embd);
  }
  else
  {
    message.channel.send("> **fazladan giriş yaptınız**");
  } 
    } 
else
{
message.channel.send(`> BU KOMUTLAR SADECE BOTUN KOMUT KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["notlarım"],
  permLevel: 0,
};

exports.help = {
  name: "notlarım",
  description: "",
  usage: "",
};