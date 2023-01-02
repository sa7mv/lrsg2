const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {
  
  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`) || message.channel.id == "1015955561004683374")
  {
  
if(args[0] == null)
{
  message.channel.send("> **yanlış giriş yaptınız**")
}
  else
  {
  let embd = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`📃not alındı ve bota kayıt edildi✅`)
  .setFooter(`sunucuda ${message.guild.memberCount} kişi var`)
  message.channel.send(embd);
  meh.add(`notsayı_${message.author.id}`, 1);
  meh.push(`Not_${message.author.id}`, `İD:${meh.get(`notsayı_${message.author.id}`)}-` + args.slice(0).join(' '));
  meh.push(`Not_${message.author.id}_${meh.get(`notsayı_${message.author.id}`)}`, `İD:${meh.get(`notsayı_${message.author.id}`)}-` + args.slice(0).join(' '));
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
  aliases: ["notal"],
  permLevel: 0,
};

exports.help = {
  name: "notal",
  description: "",
  usage: "",
};