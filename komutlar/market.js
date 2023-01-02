const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  let embd = new Discord.MessageEmbed()
  
  .setColor("GREEN")
  .setTitle(`**        MARKET**`)
  .setDescription(`**KAZMA**⛏️ 2000TL \n**BALTA**🪓 10000TL \n**OLTA**🎣 100000TL \n**BİLGİSAYAR**🖥️ 250000TL \n**Çanta**🎒 21000TL`)
  .setFooter(`sunucuda ${message.guild.memberCount} kişi var`);
  message.channel.send(embd);
    } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["shop"],
  permLevel: 0,
};

exports.help = {
  name: "market",
  description: "",
  usage: "",
};