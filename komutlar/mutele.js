const translate = require('node-google-translate-skidz');
const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table('ilh');
const ms = require("ms");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

  var embed = new Discord.MessageEmbed();
  let muterol = message.guild.roles.cache.find(role => role.name == "kick yetkisi");
  let susturulmuş = message.guild.roles.cache.find(r => r.name == "mute|susturulmuş");
  if(!muterol)return (message.channel.send(`> ROLLER AYARLANMAMIŞ <${ayarlar[message.guild.id].prefix}rolayarla>`)) 
  let user = message.mentions.users.first();
  let memberTarget = message.guild.members.cache.get(user.id);
  if(!message.member.roles.cache.has(muterol.id)) return (message.channel.send("ROLÜNÜZ YETERSİZ"))
  meh.add(`mutee_${message.guild.id}_${user.id}`, 1);
  var mute = meh.get(`mutee_${message.guild.id}_${user.id}`);
  var neden = args.slice(2).join(' ');
  const Channel = client.channels.cache.find((x) => x.id == meh.get(`Log_${message.guild.id}`));
  var süre = args[1];
  meh.push(
        `Sicil_${message.guild.id}_${user.id}`,
        "\n MUTE =>" + mute + ":" + neden
      );
      if (meh.get(`Log_${message.guild.id}`) == null) {
      } else {
        let embd = new Discord.MessageEmbed()
          .setColor(`GREEN`)
          .setTitle(`**__KİŞİYE MUTE ATILDI__**`)
          .setDescription(
            `**${user} adlı kişiye ${args.slice(2).join(" ")} nedeni ile mute atıldı. \n \n ATAN KİŞİ:${message.author.username}**`
          );
        Channel.send(embd);
      }
  message.channel
        .send(
          embed.setDescription(
            `${user} isimli kişiye ${message.author.username} tarafından ${süre
              .replace(/d/, " gün")
              .replace(/s/, " saniye")
              .replace(/m/, " dakika")
              .replace(/h/, " saat")} boyunca mute rolü verildi.`
          )
        )
  
  memberTarget.roles.add(susturulmuş.id);
  
  message.channel.bulkDelete(1).then(() => {
    
    });
  setTimeout(async () =>{  
    memberTarget.roles.remove(susturulmuş.id);
  }, ms(args[1]));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mutele", "sustur"],
  permLevel: 0,
};

exports.help = {
  name: "mute",
  description: "",
  usage: "",
};