const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const ms = require("parse-ms");

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  let user = message.author;

  let timeout = 86400000;
  let para = 2500;

   let daily = await meh.fetch(`Daily_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
    let embd = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`**${user.username}**, DAİLY DEN SADECE 24 SAATDE 1 PARA ALINIR KALAN SÜRE=> \`${time.hours} SAAT, ${time.minutes} DAKİKA, ${time.seconds} SANİYE\`.`)
    message.channel.send(embd);
  } else {

    let embd = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setTitle(`**__GÜNLÜK HAYATTA KALMA MÂŞI 😆__**`)
    .setDescription(`**${user.username}**, ADLI KİŞİYE \`${para}\` TL 💸 VERİLDİ✅`);
    message.channel.send(embd);
    
  meh.add(`Para_${user.id}`, para)
  meh.set(`Daily_${user.id}`, Date.now())
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
  aliases: ["daily"],
  permLevel: 0,
};

exports.help = {
  name: "daily",
  description: "",
  usage: "",
};