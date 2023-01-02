const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  let user = message.author;
  let kazmaadet = meh.get(`Kazma_${message.author.id}`);
  let baltaadet = meh.get(`Balta_${message.author.id}`);
  let oltaadet = meh.get(`Olta_${message.author.id}`);
  let bilgisayaradet = meh.get(`Bilgisayar_${message.author.id}`);
  let çantaadet = meh.get(`Çanta_${message.author.id}`);
  let paramiktar = meh.get(`Para_${message.author.id}`);
  let balıkadet = meh.get(`Balık_${message.author.id}`);
  let köpekbalığıadet = meh.get(`Köpek_Balığı_${message.author.id}`);
  let taşadet = meh.get(`Taş_${message.author.id}`)
  let tokenadet = meh.get(`Madeni_Token_${message.author.id}`);
  let odunadet = meh.get(`Odun_${message.author.id}`);
  let adminyüzük = meh.get(`Yüzük_${message.author.id}`);
  var ağırlıkk = 0;
  var ağırlık1 = 0;
  meh.delete(`Envanter_${message.author.id}`);
  meh.delete(`Ağırlık_${message.author.id}`);
  if(meh.get(`Para_${message.author.id}`) >= 1){
    meh.push(`Envanter_${message.author.id}`, "💵:" + paramiktar + "\n");
    ağırlık1 = 0.00000001 * paramiktar;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  } 
  if(meh.get(`Yüzük_${message.author.id}`) >= 1){
    meh.push(`Envanter_${message.author.id}`, "<:admin_rings:1032903185788059698>" + adminyüzük + "\n");
  }
    if(meh.get(`Kazma_${message.author.id}`) >= 1){
    meh.push(`Envanter_${message.author.id}`, "⛏️:" + kazmaadet + "\n"); 
    ağırlık1 = 3.83 * kazmaadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if(meh.get(`Balta_${message.author.id}`) >= 1){
    meh.push(`Envanter_${message.author.id}`, "🪓:" + baltaadet + "\n");
    ağırlık1 = 2.16 * baltaadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  } 
  if(meh.get(`Olta_${message.author.id}`) >= 1){
    meh.push(`Envanter_${message.author.id}`, "🎣:" + oltaadet + "\n");
    ağırlık1 = 1.21 * oltaadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  } 
  if(meh.get(`Bilgisayar_${message.author.id}`) >= 1){
    meh.push(`Envanter_${message.author.id}`, "🖥️:" + bilgisayaradet + "\n");
    ağırlık1 = 40.27 * bilgisayaradet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if(meh.get(`Çanta_${message.author.id}`) >= 1){
    meh.push(`Envanter_${message.author.id}`, "🎒:" + çantaadet + "\n");
    ağırlık1 = 0.68 * çantaadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if(meh.get(`Taş_${message.author.id}`) >= 1){
    meh.push(`Envanter_${message.author.id}`, "🪨:" + taşadet + "\n");
    ağırlık1 = 2.18 * taşadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  } 
  if(meh.get(`Madeni_Token_${message.author.id}`) >= 1){
    meh.push(`Envanter_${message.author.id}`, "🪙:" + tokenadet + "\n");
    ağırlık1 = 0.01 * tokenadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  } 
  if(meh.get(`Odun_${message.author.id}`) >= 1){
   meh.push(`Envanter_${message.author.id}`, "🪵:" + odunadet + "\n");
    ağırlık1 = 2.06 * odunadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if(meh.get(`Balık_${message.author.id}`) >= 1){
    meh.push(`Envanter_${message.author.id}`, "🐟:" + balıkadet + "\n");
    ağırlık1 = 0.30 * balıkadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  } 
  if(meh.get(`Köpek_Balığı_${message.author.id}`) >= 1){
    meh.push(`Envanter_${message.author.id}`, "🦈:" + köpekbalığıadet + "\n");
    ağırlık1 = 20.40 * köpekbalığıadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  } 
  let embd = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setTitle(`**__${user.username} ADLI KİŞİNİN ENVANTERİ \n ENVANTER AĞIRLIĞI:${ağırlıkk.toFixed(2)}__**`)
  .setDescription(meh.get(`Envanter_${message.author.id}`))
  message.channel.send(embd);
    } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["env"],
  permLevel: 0,
};

exports.help = {
  name: "envanter",
  description: "",
  usage: "",
};