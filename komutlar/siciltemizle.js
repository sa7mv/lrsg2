const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(Client, message, args) => {

  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  
  let ban = meh.get(`Banrol_${message.guild.id}`);
  if(message.guild.owner.id == message.author.id)
  {
    
  }
  else if(!message.member.roles.cache.has(ban))return (message.channel.send(`> **BU KOMUDU KULLANMAK İÇİN YETKİNİZ YOK**`))
  let user = message.mentions.users.first();
  const Channel = Client.channels.cache.find(x => x.id == meh.get(`Log_${message.guild.id}`));

  if(user == null)return (message.channel.send(`> **LÜTFEN KİŞİYİ ETİKETLEYİNİZ**`))
  
  if(args[1] == null)return (message.channel.send(`> **LÜTFEN NEDENİ YAZIN**`))
  
  meh.delete(`Sicil_${message.guild.id}_${user.id}`);
  meh.delete(`Uyarı_${message.guild.id}_${user.id}`);
  meh.delete(`Uyarısayı_${message.guild.id}_${user.id}`);
  meh.delete(`Uyarıneden_${message.guild.id}_${user.id}`);
  meh.delete(`Jail_${message.guild.id}_${user.id}`);
  message.channel.send(`> **${user} ADLI KİŞİNİN SİCİLİ SİLİNDİ**`);
  Channel.send(`> **${user} ADLI KİŞİNİN SİCİLİ SİLİNDİ SİLME NEDENİ:${args.slice(1).join(' ')}** \n \n**SİLEN KİŞİ:${message.author.username}**`);
  } 
else
{
message.channel.send(`> BU KOMUTLAR SADECE BOTUN KOMUT KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["siciltemizle"],
  permLevel: 0,
};

exports.help = {
  name: "sicil-temizle",
  description: "",
  usage: "",
};