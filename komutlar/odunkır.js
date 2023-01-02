const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const ms = require("parse-ms");
const ayarlar = require("../ayarlar.json");


exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  var takılıçanta = meh.get(`ağırgüç_${message.author.id}`);
  
 if(meh.get(`Balta_${message.author.id}`) >= 1){
  if(meh.get(`go_${message.author.id}`) == `orman`){
   if(meh.get(`ağırlık_${message.author.id}`) < takılıçanta){
     let user = message.author;

  let timeout = 10000;

   let daily = await meh.fetch(`Daily_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    message.channel.send(`> uyarı ⚠️ 10 saniye bitmedi`);
  } else {
     let msgg = await message.channel.send(`odun kırılıyor 10 saniye bekle`).then(msg => {
     setTimeout(function() {
     meh.add(`Odun_${message.author.id}`, 1);
     msg.delete();
     message.channel.send(`ODUNKIRMA BAŞARILI +1 ODUN`).then(msggg => {
     msggg.edit(`ODUNKIRMA BAŞARILI +1 ODUN`);
     
     });
     }, 10000);
     });
  meh.set(`Daily_${user.id}`, Date.now())
  }
   }
    else
    {
      message.channel.send(`> FAZLA AĞIRLIK TAŞIYAMAZSIN`);
    } 
  }
  else{
    message.channel.send(`> önce ormana gitmen lazım ${ayarlar[message.guild.id].prefix}go <orman>`);
  } 
 }
else
{
  message.channel.send(`> ENVANTERİNDE BALTA YOK`);
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
  aliases: ["odunkır"],
  permLevel: 0,
};

exports.help = {
  name: "odunkes",
  description: "",
  usage: "",
};