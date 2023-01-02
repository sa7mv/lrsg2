const translate = require('node-google-translate-skidz');
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const main = require("../Loris.js");
const db = require("quick.db");
const meh = new db.table('ilh');
var prefix = ayarlar.prefix;
exports.run = async(client, message, args) => {
  
  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  if(args[0] == null)
  {
    message.channel.send(`lütfen atılacak zarın yüzünü seçiniz .örn(${ayarlar[message.guild.id].prefix}zarat 50)`);
  }
  else
  {
  var Random = Math.floor(Math.random() * args[0]) + 1;

  
 message.channel.send("zar atılıyor...").then(message => {
    
   
   
    message.edit(`__${Random}__`);
    const embed = new Discord.RichEmbed()
    message.channel.send(embed);
  });
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
  aliases: ["zarat"],
  permLevel: 0,
};

exports.help = {
  name: "zar-at",
  description: "",
  usage: "",
};