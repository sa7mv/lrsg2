const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
const meh = new db.table('ilh');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
  
  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  
message.channel.startTyping();
        const mehmet = new Discord.MessageEmbed()

             .setColor('#ff1111')
             .setTitle(`\n \n YOUTUBE ~~Loris~~`)
             .setAuthor(`botu yapan => Loris`, client.user.avatarURL())
             .setThumbnail(`https://cdn.glitch.me/47b94618-5613-4c30-b4ba-a70264db8412%2FIMG_20210812_053040_290_copy_250x250.jpg?v=1639265877884`)
             .addField(`__YOUTUBE__`, `[Loris](https://youtube.com/channel/UCWD6khaGHMQFnzc41nOK8mA)`) // bunlar boş kalırsa hata verir
       
        setTimeout(function() {
       return message.channel.send(mehmet);
        }, 2000);
  message.channel.stopTyping();
    } 
else
{
message.channel.send(`> BU KOMUTLAR SADECE BOTUN KOMUT KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["youtube"],
  permLevel: 0,
};

exports.help = {
  name: "yt",
  description: "",
  usage: "",
};