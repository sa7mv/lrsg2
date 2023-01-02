const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {
  
  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`) || message.channel.id == "1015955561004683374")
  {
  
  if(meh.get(`Not_${message.author.id}`) == null)return(message.channel.send(`> NOT DEFTERİNİZ BOŞ ZATEN`))
  {
  if(args[0] == null )
  {
    var denemee = meh.get(`notsayı_${message.author.id}`);
    var aa = meh.get(`Not_${message.author.id}`).length;
    let embd = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`${aa} 📃NOT BAŞARI İLE SİLİNDİ✅`)
    message.channel.send(embd);
    for(var m = 0;m <= denemee;m++){
      meh.delete(`Not_${message.author.id}_${m}`);
    } 
    meh.delete(`notsayı_${message.author.id}`);
    meh.delete(`Not_${message.author.id}`);
  }
  else
  {
    message.channel.send(`> **fazla giriş yapmayınız bu komut tamamını siler**`);
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
  aliases: ["nottemizle"],
  permLevel: 0,
};

exports.help = {
  name: "not-temizle",
  description: "",
  usage: "",
};