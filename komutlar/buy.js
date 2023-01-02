const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  var güç = meh.get(`ağırgüç_${message.author.id}`);
  if(meh.get(`ağırlık_${message.author.id}`) < güç)
  {
  if(args[0] == "kazma" || args[0] == "Kazma" || args[0] == "KAZMA")
  {
    if(isNaN(args[1]))return (message.channel.send(`> **ADET BELİRTİN**`))
    {
    let sipariş = args[1] * 2000;
      if(sipariş <= meh.get(`Para_${message.author.id}`))
         {
    meh.add(`Kazma_${message.author.id}`, args[1]);
    meh.add(`Para_${message.author.id}`, -sipariş);
    let embd = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle(`**    BİLDİRİ**`)
    .setDescription(`__KAZMA SATIN ALINDI__.`)
    .setFooter(`FİYAT:${sipariş}TL`)
    message.channel.send(embd);
         }
      else
      {
        message.channel.send(`paranız yetersiz`);
      } 
    }
  }
  else if(args[0] == "balta" || args[0] == "Balta" || args[0] == "BALTA")
  {
    if(isNaN(args[1]))return (message.channel.send(`> **ADET BELİRTİN**`))
    {
      let sipariş = args[1] * 10000;
      if(sipariş <= meh.get(`Para_${message.author.id}`))
         {
      meh.add(`Balta_${message.author.id}`, args[1]);
      meh.add(`Para_${message.author.id}`, -sipariş);
      let embd = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`**    BİLDİRİ**`)
      .setDescription(`__BALTA SATIN ALINDI__.`)
      .setFooter(`FİYAT:${sipariş}TL`)
      message.channel.send(embd);
         }
      else
      {
        message.channel.send("paranız yetersiz");
      } 
    } 
  } 
  else if(args[0] == "olta" || args[0] == "Olta" || args[0] == "OLTA")
  {
    if(isNaN(args[1]))return (message.channel.send(`> **ADET BELİRTMEDİN**`))
    {
      let sipariş = args[1] * 100000;
      if(sipariş <= meh.get(`Para_${message.author.id}`))
      {
      meh.add(`Olta_${message.author.id}`, args[1]);
      meh.add(`Para_${message.author.id}`, -sipariş);
      let embd = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`**    BİLDİRİ**`)
      .setDescription(`__OLTA SATIN ALINDI__.`)
      .setFooter(`FİYAT:${sipariş}TL`)
      message.channel.send(embd);
      }
      else
      {
        message.channel.send(`paranız yetersiz`);
      } 
    } 
  }
  else if(args[0] == "bilgisayar" || args[0] == "Bilgisayar" || args[0] == "BİLGİSAYAR")
  {
    if(!isNaN(args[1]))
    {
      let sipariş = args[1] * 250000;
      if(sipariş <= meh.get(`Para_${message.author.id}`))
      {
      meh.add(`Bilgisayar_${message.author.id}`, args[1]);
      meh.add(`Para_${message.author.id}`, -sipariş);
      let embd = new Discord.MessageEmbed()
      .setColor("GREEN")  
      .setTitle(`**    BİLDİRİ**`)
      .setDescription(`__BİLGİSAYAR SATIN ALINDI__.`)
      .setFooter(`FİYAT:${sipariş}TL`)
      message.channel.send(embd);
      }
      else
      {
        message.channel.send(`paranız yetersiz`);
      } 
    }
    else return(message.channel.send(`> **ADET BELİRTMEDİN**`))
  }
  else if(args[0] == "çanta" || args[0] == "Çanta" || args[0] == "ÇANTA")
  {
    if(!isNaN(args[1]))
    {
      let sipariş = args[1] * 21000;
      if(sipariş <= meh.get(`Para_${message.author.id}`))
      {
      meh.add(`Çanta_${message.author.id}`, args[1]);
      meh.add(`Para_${message.author.id}`, -sipariş);
      let embd = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`**    BİLDİRİ**`)
      .setDescription(`__ÇANTA SATIN ALINDI__.`)
      .setFooter(`FİYAT:${sipariş}TL`)
      message.channel.send(embd);
      }
      else
      {
        message.channel.send(`paranız yetersiz`);
      } 
    }
    else return(message.channel.send(`> **ADET BELİRTMEDİN**`))
  }
  else{
    message.channel.send(`> ALICAĞIN ŞEYİ DÜZGÜN YAZ`);
  } 
  }
  else
  {
    message.channel.send(`> **FAZLA AĞIRLIK TAŞIYAMAZSIN**`);
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
  aliases: ["satınal"],
  permLevel: 0,
};

exports.help = {
  name: "buy",
  description: "",
  usage: "",
};