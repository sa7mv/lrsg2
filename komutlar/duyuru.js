const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const ayarlar = require("../ayarlar.json");

exports.run = async(Client, message, args) => {
  
  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  if(message.author.id == message.guild.owner.id)
  {
  let u = message.mentions.users.first();
  
  const Channel = Client.channels.cache.find(x => x.id == meh.get(`Duyuru_kanal_${message.guild.id}`));

  if(meh.get(`Duyuru_kanal_${message.guild.id}`) == null)
  {
    message.channel.bulkDelete(1).then(() =>{
    message.reply(`duyuru kanalını ayarlamadınız ${ayarlar[message.guild.id].prefix}duyuru_kanal_ayarla <KANAL ETİKET>`).then( msg => msg.delete({timeout:3000}));
    });
  }
  else
  {
    if(args[0] == null)
    {
      message.channel.bulkDelete(1).then(() => {
      message.channel.send("lütfen duyurunuzu yazın").then( msg => msg.delete({timeout:3000}));
      });
    }
    else
    {
    let mesaj =  args.slice(0).join(' ');
    Channel.send(mesaj);
    message.channel.bulkDelete(1).then(() => {
      
    message.channel.send("duyuru kanalına mesajınız atıldı").then( msg => msg.delete({timeout:3000}));
    });
    }
  } 
    }
  else
  {
    message.channel.send(`> SADECE SUNUCU SAHİBİ BU KOMUTU KULLANABİLİR`);
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
  aliases: ["duyuru"],
  permLevel: 0,
};

exports.help = {
  name: "duyuru",
  description: "",
  usage: "",
};