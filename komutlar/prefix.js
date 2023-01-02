const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const ayarlar = require(`../ayarlar.json`);
const fs = require("fs");
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

let newprefix = args.slice(0).join(``);

  if(!message.member.hasPermission("ADMINISTRATOR"))return message.reply(`> PREFİX DEĞİŞTİRMEK İÇİN YETKİN YETERSİZ`);
  
  ayarlar[message.guild.id].prefix = newprefix;
  
  message.channel.send(`PREFİX ${newprefix} OLARAK AYARLANDI`);
  
  fs.writeFile("./ayarlar.json", JSON.stringify(ayarlar), function(err) {
  if(err) console.log(err);
  });
} 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["prefix-ayarla"],
  permLevel: 0,
};

exports.help = {
  name: "prefix",
  description: "",
  usage: "",
};