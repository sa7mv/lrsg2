const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {
  
  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  let embd = new Discord.MessageEmbed();
  let u = message.mentions.users.first();
  message.channel.startTyping();
  
  setTimeout(function() {
             
if(!u)
{
  embd.setColor("RED");
  embd.setDescription(`kişiyi etiketleyin örn ${ayarlar[message.guild.id].prefix}give @kişi eşya adet veya ${ayarlar[message.guild.id].prefix}give @kişi para miktarı.`);
  embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
  message.channel.send(embd);
} 
else
{
  if(args[1] == "kazma" || args[1] == "Kazma" || args[1] == "KAZMA")
  {
   if(args[2] <= meh.get(`Kazma_${message.author.id}`))
   {
     meh.add(`Kazma_${message.guild.member(u).id}`, args[2]);
     embd.setColor("RANDOM");
     embd.setDescription(`${u} kişisine ${args[2]} adet kazmar verildi`);
     embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
     message.channel.send(embd);
   } 
    else
    {
      message.channel.send(`kazma yetersiz`);
    } 
  }
  else if(args[1] == "balta" || args[1] == "Balta" || args[1] == "BALTA")
  {
   if(args[2] <= meh.get(`Balta_${message.author.id}`))
   {
     meh.add(`Balta_${message.guild.member(u).id}`, args[2]);
     embd.setColor("RANDOM");
     embd.setDescription(`${u} kişisine ${args[2]} adet balta verildi`);
     embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
     message.channel.send(embd);
   }
    else
    {
      message.channel.send("balta yetersiz");
    } 
  }
  else if(args[1] == "olta" || args[1] == "Olta" || args[1] == "OLTA")
  {
   if(args[2] <= meh.get(`Olta_${message.author.id}`))
   {
     meh.add(`Olta_${message.guild.member(u).id}`, args[2]);
     embd.setColor("RANDOM");
     embd.setDescription(`${u} kişisine ${args[2]} adet olta verildi`);
     embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
     message.channel.send(embd);
   }
    else
    {
      message.channel.send(`olta yetersiz`);
    } 
  }
  else if(args[1] == "bilgisayar" || args[1] == "Bilgisayar" || args[1] == "BİLGİSAYAR")
  {
   if(args[2] <= meh.get(`Bilgisayar_${message.author.id}`))
   {
     meh.add(`Bilgisayar_${message.guild.member(u).id}`, args[2]);
     embd.setColor("RANDOM");
     embd.setDescription(`${u} kişisine ${args[2]} adet bilgisayar verildi`);
     embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
     message.channel.send(embd);
   } 
    else
    {
      message.channel.send(`> envanterde bilgisayar yetersiz`);
    }
  }
  else if (!isNaN(args[1]))
  {
    meh.add(`Para_${message.guild.member(u).id}`,args[1]);
    meh.add(`Para_${message.author.id}`,-args[1]);
    embd.setColor("RANDOM");
    embd.setDescription(`${u} kişisine ${args[1]} miktar para gönderildi`);
    embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
    message.channel.send(embd);
  }
  else{
    message.channel.send(`> ne göndericeğini düzgün belirt`);
  } 
}
  }, 1000);
  message.channel.stopTyping();
    } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ver"],
  permLevel: 0,
};

exports.help = {
  name: "give",
  description: "",
  usage: "",
};