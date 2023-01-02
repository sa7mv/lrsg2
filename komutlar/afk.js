const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  
  if(args[0] == null)
  {
    message.channel.send(`> **neden belirtmediniz**`);
  } 
  else
  {
    meh.set(`Neden_${message.member.id}`, args.slice(0).join(' '));
    let embd = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`afk komudu açıldı artık size benim olduğum sunuculardan etiket gelemez.`)
    message.channel.send(embd);
    setTimeout(function() {
      
      meh.set(`Afk2_${message.author.id}`, 1);
      meh.set(`Afk_${message.author.id}`, "afk");
      
    },  2000);
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
  aliases: ["afk"],
  permLevel: 0,
};

exports.help = {
  name: "afk",
  description: "",
  usage: "",
};