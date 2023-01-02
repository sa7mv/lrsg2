const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {
  
  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`) || message.channel.id == "1015955561004683374")
  {
  
  const silmefiltresi = meh.get(`Not_${message.author.id}`).filter(x => x !== "" + meh.get(`Not_${message.author.id}_${args[0]}`));
  
if(meh.get(`Not_${message.author.id}`) == null)
{
  message.channel.send(`> **silecek not kalmadı**`);
}
  else
  {
  if(args[0] == null)
  {
    message.channel.send(`> **yanlış giriş yaptınız**`);
  }
  else
  {
    meh.set(`Not_${message.author.id}`, silmefiltresi)
    let embd = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`📃not silme işlemi başarılı✅`)
    message.channel.send(embd);
    meh.delete(`Not_${message.author.id}_${args[0]}`);
    if(meh.get(`Not_${message.author.id}`) == ""){
     meh.delete(`Not_${message.author.id}`);
    } 
  }
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
  aliases: ["notsil"],
  permLevel: 0,
};

exports.help = {
  name: "notsil",
  description: "",
  usage: "",
};