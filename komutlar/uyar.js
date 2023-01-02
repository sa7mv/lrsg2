const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const ms = new require('ms');

exports.run = async(Client, message, args) => {

  var süre = "15m";
  if(meh.get(`Uyarrol_${message.guild.id}`) == null)return (message.channel.send(`> **GEREKLİ ROLLER AYARLANMAMIŞ**`))
  let uyarı = meh.get(`Uyarrol_${message.guild.id}`);
  if(!message.member.roles.cache.has(uyarı))return (message.channel.send(`> **BU KOMUDU KULLANMAK İÇİN YETKİN YOK**`))
  const Channel = Client.channels.cache.find(x => x.id == meh.get(`Log_${message.guild.id}`));
  
  let user = message.mentions.users.first();
  
  
  let memberTarget = message.guild.members.cache.get(user.id);
  
  if(user == null)
  {
    message.channel.send(`> **KİŞİYİ ETİKETLEYİN LÜTFEN.**`);
  } 
  else
  {
    if(args[1] == null)
    {
      message.channel.send(`> **NEDEN BELİRTMEK ZORUNDASIN.**`);
    }
    else
    {
      meh.add(`Uyarı_${message.guild.id}_${user.id}`, 1);
      meh.add(`Uyarısayı_${message.guild.id}_${user.id}`, 1);
      var uyari = meh.get(`Uyarı_${message.guild.id}_${user.id}`);
      meh.push(`Sicil_${message.guild.id}_${user.id}`, "\n UYARI =>" + uyari + ":" + args.slice(1).join(' '));
      meh.push(`Uyarıneden_${message.guild.id}_${user.id}`,args.slice(1).join(' '));
      let embd = new Discord.MessageEmbed()
      .setColor(`GREEN`)
      .setTitle(`**__KİŞİ UYARILDI__**`)
      .setDescription(`**${user} adlı kişiyi ${args.slice(1).join(' ')} nedeni ile uyardı.**`)
      message.channel.send(embd);
      if(meh.get(`Log_${message.guild.id}`) == null)
      {
        
      }
      else
      {
        let embd = new Discord.MessageEmbed()
      .setColor(`GREEN`)
      .setTitle(`**__KİŞİ UYARILDI__**`)
      .setDescription(`**${user} adlı kişiyi ${args.slice(1).join(' ')} nedeni ile uyardı. \n \n UYARAN KİŞİ:${message.author.username}**`)
      Channel.send(embd);
      } 
      
      if(meh.get(`Uyarısayı_${message.guild.id}_${user.id}`) == 3)
      {
        let hapisli = meh.get(`Hapislirol_${message.guild.id}`);
        let embd = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setTitle(`KİŞİ ÇOK SUÇ İŞLEDİ`)
        .setDescription(`${user} ADLI KİŞİNİN UYARI HAKKI DOLDU \n \n KİŞİ 15DK JAİLE ATILICAK`)
        message.channel.send(embd);
        meh.set(`Uyarısayı_${message.guild.id}_${user.id}`, 0);
        meh.set(`Uyarı2_${message.guild.id}_${user.id}`, 0);
        meh.add(`Jail_${message.guild.id}_${user.id}`, 1);
        let da = meh.get(`Jail_${message.guild.id}_${user.id}`);
        meh.push(`Sicil_${message.guild.id}_${user.id}`, "\n JAİL =>" + da + `:çok uyarı yemekten 15DK jail yedi`).join(` `);
        memberTarget.roles.add(hapisli);
        setTimeout(async () =>{    
      
  memberTarget.roles.remove(hapisli);
  
      }, ms(süre))
      }                   
  if(meh.get(`Log_${message.guild.id}`) == null)
  {
    
  }
      else
        {
          let embd = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setTitle(`KİŞİ ÇOK SUÇ İŞLEDİ`)
        .setDescription(`${user} ADLI KİŞİNİN UYARI HAKKI DOLDU \n \n KİŞİ 15DK JAİLE ATILICAK`)
      Channel.send(embd);
        } 
      }
    } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["uyar"],
  permLevel: 0,
};

exports.help = {
  name: "uyar",
  description: "",
  usage: "",
};