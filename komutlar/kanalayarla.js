const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(Client, message, args) => {

  if(!message.guild.owner.id == message.author.id)return(message.channel.send(`> SEN SUNUCU SAHİBİ DEĞİLSİN!`))
  {
  const Channel = message.guild.channels.cache.find(x => x.name == "->|LORİS BOT ODALARI|<-");
  if(!Channel)
  {
  await message.guild.channels.create('->|LORİS BOT ODALARI|<-', { type: "category" });
  }
  const Channel2 = message.guild.channels.cache.find(x => x.name == "🔰┃loris_komut_odası");
  if(!Channel2)
  {
  let komut = await message.guild.channels.create("🔰┃loris_komut_odası", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '->|LORİS BOT ODALARI|<-').id,});
  let kanal = message.guild.channels.cache.find(a => a.name === '🔰┃loris_komut_odası').id;
  meh.delete(`Komutkanal_${message.guild.id}`);
  meh.set(`Komutkanal_${message.guild.id}`, kanal);
  }
  const Channel3 = message.guild.channels.cache.find(x => x.name == "🎮┃oyun_odası_1");
  if(!Channel3)
  {
  let komut2 = await message.guild.channels.create("🎮┃oyun_odası_1", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '->|LORİS BOT ODALARI|<-').id,});
  let kanal2 = message.guild.channels.cache.find(a => a.name === '🎮┃oyun_odası_1').id;
  meh.delete(`Oyunkanal_${message.guild.id}`);
  meh.set(`Oyunkanal_${message.guild.id}`, kanal2)
  }
  const Channel4 = message.guild.channels.cache.find(x => x.name == "🎮┃oyun_odası_2");
  if(!Channel4)
  {
  let komut3 = await message.guild.channels.create("🎮┃oyun_odası_2", {type: "text", parent: message.guild.channels.cache.find(a => a.name === '->|LORİS BOT ODALARI|<-').id,});
  let kanal3 = message.guild.channels.cache.find(a => a.name === '🎮┃oyun_odası_2').id;
  meh.delete(`Oyunkanal2_${message.guild.id}`);
  meh.set(`Oyunkanal2_${message.guild.id}`, kanal3);
  } 
  message.channel.send(`> GEREKLİ ODALAR KURULDU`);
  } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kanalayarla"],
  permLevel: 0,
};

exports.help = {
  name: "odaayarla",
  description: "",
  usage: "",
};