const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
    let embd = new Discord.MessageEmbed();
    var para = args[0];
    let slot1 = ["<:X10:993629062654341190>","<:X2:993629030454669503>","<:X4:993629047370285066>"];
    let slot2 = ["<:X10:993629062654341190>","<:X2:993629030454669503>","<:X4:993629047370285066>"];
    let slot3 = ["<:X10:993629062654341190>","<:X2:993629030454669503>","<:X4:993629047370285066>"];
    var espri1 = slot1[Math.floor(Math.random() * slot1.length)];
    var espri2 = slot2[Math.floor(Math.random() * slot2.length)];
    var espri3 = slot3[Math.floor(Math.random() * slot3.length)];
    var limit = 200000;
    message.channel.send(embd.setColor(`GRAY`).setTitle(`__SLOT__`).setDescription(`<a:slot:993629001690132520><a:slot:993629001690132520><a:slot:993629001690132520>`).setTimestamp()).then(async msg => {
    setTimeout(function() {
    embd.setDescription(`${espri1}<a:slot:993629001690132520><a:slot:993629001690132520>`);
    msg.edit(embd);
    setTimeout(function() {
    embd.setDescription(`${espri1}${espri2}<a:slot:993629001690132520>`);
    msg.edit(embd);
    setTimeout(function() {
    embd.setDescription(`${espri1}${espri2}${espri3}`);
    msg.edit(embd);
    if(args[0] == "all" && meh.get(`Para_${message.author.id}`) <= limit){ para = meh.get(`Para_${message.author.id}`); }
    if(args[0] == "all" && meh.get(`Para_${message.author.id}`) >= limit){ para = 200000; }
    if(args[0] >= limit){ para = 200000; } 
    if(args[0] == null || ""){ para = 1;} 
    if(espri1 == "<:X10:993629062654341190>" && espri1 == espri2 && espri2 == espri3)
    {
    meh.add(`Para_${message.author.id}`, para * 10);
    embd.setColor("GREEN");
    embd.setDescription(`<:X10:993629062654341190><:X10:993629062654341190><:X10:993629062654341190>`);
    embd.setFooter(`+${para * 10}`);
    msg.edit(embd);
    } 
    else if(espri1 == "<:X2:993629030454669503>" && espri1 == espri2 && espri2 == espri3){
    meh.add(`Para_${message.author.id}`, para * 2);
    embd.setColor(`GREEN`);
    embd.setDescription(`<:X2:993629030454669503><:X2:993629030454669503><:X2:993629030454669503>`);
    embd.setFooter(`+${para * 2}`);
    msg.edit(embd);
    } 
    else if(espri1 == "<:X4:993629047370285066>" && espri1 == espri2 && espri2 == espri3){
    meh.add(`Para_${message.author.id}`, para * 4);
    embd.setColor(`GREEN`);
    embd.setDescription(`<:X4:993629047370285066><:X4:993629047370285066><:X4:993629047370285066>`);
    embd.setFooter(`+${para * 4}`);
    msg.edit(embd);
    }
    else
    {
      meh.add(`Para_${message.author.id}`, - para);
      embd.setColor(`RED`);
      embd.setDescription(`${espri1}${espri2}${espri3}`);
      embd.setFooter(`-${para}`);
      msg.edit(embd);
    } 
    }, 1000);
    }, 1000);
    }, 1000);
  }) 
  } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slot","S","Slot","SLOT"],
  permLevel: 0,
};

exports.help = {
  name: "s",
  description: "",
  usage: "",
};