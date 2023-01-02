const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const ayarlar = require("../ayarlar.json");
const fs = require(`fs`);
exports.run = async(client, message, args) => {

  let user = message.mentions.users.first();
  if(!message.author.id == "520213732752621568")return
  if(!user)return (message.channel.send("> LÜTFEN KİŞİYİ ETİKETLEYİN EFENDİM"))
  if(!message.guild.id == "1015913412305354823")return
  var sayı = meh.get(`testersayi_${message.author.id}`);
  var a;
  if(!sayı){ sayı = 0 }
  if(!sayı == 0)
  {
  for(var m = 0;m < sayı;m++)
  {
    if(meh.get(`tester_${message.author.id}_${sayı}`) == user.id)
    {
      a = "dolu";
    }
  } 
  } 
  if(a)return(message.channel.send(`efendim lütfen aynı kişiyi tekrar tester yapmaya çalışma`))
  sayı++;
  meh.set(`testersayi_${message.author.id}`, sayı);
  meh.set(`tester_${message.author.id}_${sayı}`, user.id);
  message.guild.members.cache.get(user.id).roles.add("1018519453769682966")
  let embd = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`${user} adlı kişi tester oldu`)
  .setTimestap()
  .setFooter(`sunucu ${message.guild.memberCount()} kişi`)
  message.channel.send(embd);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tester"],
  permLevel: 0,
};

exports.help = {
  name: "tester",
  description: "",
  usage: "",
};