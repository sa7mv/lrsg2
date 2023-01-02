const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {
  
if(message.author.id == "520213732752621568")
{
  if(args[0] == "aç" || args[0] == "Aç" || args[0] == "AÇ")
  {
    if(meh.get(`Test_${message.author.id}`) == "açık")
    {
      message.channel.send("efendim test zaten açık");
    } 
    else
    {
      meh.set(`Para2_${message.author.id}`, meh.get(`Para_${message.author.id}`));
    meh.set(`Test_${message.author.id}`, "açık");
      message.channel.send("testi açtım efendim");
    } 
  } 
  if(args[0] == "kapat" || args[0] == "Kapat" || args[0] == "KAPAT")
  {
    if(meh.get(`Test_${message.author.id}`) == "kapalı")
    {
      message.channel.send("efendim test zaten kapalı");
    } 
    else
    {
      meh.set(`Test_${message.author.id}`, "kapalı");
      meh.set(`Para_${message.author.id}`, meh.get(`Para2_${message.author.id}`));
      message.channel.send("testi kapattım efendim");
    } 
  } 
}
  else
  {
    message.channel.send("bu komut gizlidir bunu sadece sahibim kullanabilir.");
  } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["test"],
  permLevel: 0,
};

exports.help = {
  name: "test",
  description: "",
  usage: "",
};