const translate = require('node-google-translate-skidz');
const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = (client, message, args) => {
 
  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  if(meh.get(`go_${message.author.id}`) == "iskele")
  {
  if(meh.get(`Olta_${message.author.id}`) >= 1)
  {
    if(meh.get(`ağırlık_${message.author.id}`) >= 100)return (message.channel.send(`> **FAZLA AĞIRLIK TAŞIYAMAZSIN**`))
    {
    let embd = new Discord.MessageEmbed();
    var ağırlık1 = 0;
    var ağırlıkk = 0;
    let balıkadet = meh.get(`Balık_${message.author.id}`);
    let köpekbalığıadet = meh.get(`Köpek_Balığı_${message.author.id}`);
    var espriler = [
        "KEFAL", 
        "LÜFER", 
        "HAMSİ", 
        "ÇIPURA", 
        "İSTAVRİT", 
        "PALAMUT", 
        "SARDALYA", 
        "USKUMRU", 
        "BARBUNYA",
        "LEVREK",
        "KÖPEK BALIĞI"
        ];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    var Random = Math.floor(Math.random() * 4) + 1;
    var Random2 = Math.floor(Math.random() * 10) + 1;
    embd.setColor(`RANDOM`);
    if(Random == 3)
    {
    if(espri == "KÖPEK BALIĞI")
    {
      if(Random2 == 7)
      {
      meh.add(`Köpek_Balığı_${message.author.id}`, 1);
      embd.setDescription(`KÖPEK BALIĞI ÇIKTI ŞANSA BAK`);
      } 
      else
      {
      embd.setDescription(`OLTAYI BOŞ ÇEKTİN`);
      }
    }
    else
    {
      meh.add(`Balık_${message.author.id}`, 1);
      embd.setDescription(`${espri} TUTTUN`);
    } 
    }
    else
    {
      embd.setDescription(`OLTAYI BOŞ ÇEKTİN`);
    }
    embd.setTimestamp();
    embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
    message.channel.send(embd);
  }
  }
  else
  {
   message.channel.send(`> **ENVANTERDE OLTA BULUNMAMAKTA**`); 
  }
  }
  else
  {
    message.channel.send(`> **ÖNCE İSKELEYE GİTMEN LAZIM**`);
  } 
    } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["balıktut"],
  permLevel: 0,
};

exports.help = {
  name: "balıktut",
  description: "",
  usage: "",
};