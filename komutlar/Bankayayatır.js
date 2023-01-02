const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`) || message.channel.id == "1015955561004683374")
  {
  var şifre = meh.get(`Şifre_${message.author.id}`);
  if(meh.get(`Banka_Hesap_${şifre}`) == null)return (message.channel.send(`> **ÖNCE HESAP AÇIN ${ayarlar[message.guild.id].prefix}hesapaç <ad> <soyad> <şifre> | ${ayarlar[message.guild.id].prefix}girişyap <ad> <soyad> <şifre>**`))
  var hesap = meh.get(`Banka_Hesap_${şifre}`);
  let date = new Date();
  const silmefiltresi = meh.get(`Kart_Harcama_${hesap}_${şifre}`).filter(x => x !== "boş");
  if(isNaN(args[0]))return (message.channel.send(`> **MİKTAR BELİRTİN**`))
  {
    if(!meh.get(`Para_${message.author.id}`) >= args[0])return (message.channel.send(`> **__CEBİNDEKİ PARADAN FAZLASINI YATIRAMAZSIN__**`))
    {
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
    meh.add(`Para_${message.author.id}`, -args[0]);
    meh.add(`Bankam_${hesap}_${şifre}`, args[0]);
    meh.set(`Kart_toplam_harcama_${hesap}_${şifre}`, "+" + args[0]);
    meh.set(`Kart_Harcama_${hesap}_${şifre}`, silmefiltresi);
    meh.push(`Kart_Harcama_${hesap}_${şifre}`, "PARA YATIRMA:" + "+" + args[0] + "| \n" + "__TARİH:" + tarih + "__\n \n");
    let embd = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setTitle(`**__PARA YATIRILDI__**`)
    .setDescription(`+${args[0]}`)
    .setTimestamp()
    .setFooter(`sunucu ${message.guild.memberCount} kişi`)
    message.channel.send(embd);
    } 
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
  aliases: ["para-yatır"],
  permLevel: 0,
};

exports.help = {
  name: "parayatır",
  description: "",
  usage: "",
};