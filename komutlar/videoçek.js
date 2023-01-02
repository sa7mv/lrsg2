const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const moment = require("moment");
require("moment-duration-format");
const ms = require("parse-ms");
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  var takılıçanta = meh.get(`ağırgüç_${message.author.id}`);
  var şifre = meh.get(`Şifre_${message.author.id}`);
  if(meh.get(`Banka_Hesap_${message.author.id}`) == null)return (message.channel.send(`> **ÖNCE HESAP AÇIN ${ayarlar[message.guild.id].prefix}hesapaç <ad> <soyad> <şifre> | -girişyap <ad> <soyad> <şifre>**`))
  var hesap = meh.get(`Banka_Hesap_${şifre}`);
 if(meh.get(`Bilgisayar_${message.author.id}`) >= 1){
  if(meh.get(`go_${message.author.id}`) == `ev`){
     let user = message.author;
 
    
    
  let timeout = 7200000;

   let daily = await meh.fetch(`Daily_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    message.channel.send(`> uyarı ⚠️ 2 saat bitmedi`);
  } else {
  var RANDOM = Math.floor(Math.random() * 350000) + 150000;
  let embd = new Discord.MessageEmbed();
  embd.setColor(`GRAY`)
  embd.setDescription(`VİDEO ÇEKİP RENDER(İŞLEME) YAPILINCA 2 SAAT SONRA PARANIZI HESABINIZA AKTARILICAK`)
  embd.setTimestamp()
  embd.setFooter(`sunucu ${message.guild.memberCount} kişi`)
  message.channel.send(embd).then(msg => {
    setTimeout(function() {
      
    let date = new Date();
    
      const silmefiltresi = meh.get(`Kart_Harcama_${hesap}_${şifre}`).filter(x => x !== "boş");
      var saat = date.getHours() + 3;
      var gün = date.getDate();
      if(date.getHours() == 21)
  {
    saat = 0;
    gün = date.getDate() + 1;
  }
  if(date.getHours() == 22)
  {
    saat = 1;
    gün = date.getDate() + 1;
  }
  if(date.getHours() == 23)
  {
    saat = 2;
    gün = date.getDate() + 1;
  }
  if(date.getHours() == 24)
  {
    saat = 3;
    gün = date.getDate() + 1;
  }
    var tarih = [moment().format(`${gün}-MM-YYYY|${saat}:mm:ss a`)];
    meh.add(`Bankam_${hesap}_${şifre}`, RANDOM);
    meh.set(`Kart_toplam_harcama_${hesap}_${şifre}`, "+" + RANDOM);
    meh.set(`Kart_Harcama_${hesap}_${şifre}`, silmefiltresi);
    meh.push(`Kart_Harcama_${hesap}_${şifre}`, "YouTube:" + "+" + RANDOM + "| \n" + "__TARİH:" + tarih + "__\n \n")
    meh.add(`Para_${message.author.id}`, RANDOM);
    embd.setDescription(`VİDEO BAŞARI İLE ATILDI HESABINIZA İZLENME PARASI ${RANDOM}TL BANKA HESABINIZA ATILDI`);
    embd.setTimestamp();
    msg.edit(embd);
    }, 7200000);
  });
    meh.set(`Daily_${user.id}`, Date.now())
  }
   }
   else{
     message.channel.send(`> VİDEO ÇEKMEK İÇİN EVDE OLMAN LAZIM SEN VLOG KANALI DEĞİLSİN KENDİNE GEL -go <ev>`).then(msg => msg.delete({timeout:10000}));
   } 
  }
  else{
   message.channel.send(`> EVDE BİLGİSAYARIN YOK NEYLE ÇEKECEN VİDEO DÜŞÜN BAKİM ${ayarlar[message.guild.id].prefix}market`); 
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
  aliases: ["videoçek"],
  permLevel: 0,
};

exports.help = {
  name: "video-çek",
  description: "",
  usage: "",
};