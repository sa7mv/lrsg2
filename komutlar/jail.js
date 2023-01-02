const translate = require('node-google-translate-skidz');
const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const ms = require("ms");

exports.run = async (Client, message, args) => {
  let user = message.mentions.users.first();
  let memberTarget = message.guild.members.cache.get(user.id);
  let embed = new Discord.MessageEmbed();
  embed.setColor(`GREEN`);

  if (meh.get(`Jailrol_${message.guild.id}`) == null)
    return message.channel.send(`> **GEREKLİ ROL AYARLANMAMIŞ**`);
  let jail = meh.get(`Jailrol_${message.guild.id}`);
  if (meh.get(`Hapislirol_${message.guild.id}`) == null)
    return message.channel.send(`> **GEREKLİ ROL AYARLANMAMIŞ**`);
  let hapisli = meh.get(`Hapislirol_${message.guild.id}`);
  if (!message.member.roles.cache.has(jail))
    return message.channel.send(`> **BU KOMUDU KULLANMAK İÇİN YETKİN YOK**`);
  const Channel = Client.channels.cache.find(
    (x) => x.id == meh.get(`Log_${message.guild.id}`)
  );

  if (!user) return message.channel.send(`> LÜTFEN KİŞİYİ ETİKETLE`);
  {
    meh.add(`Jail_${message.guild.id}_${user.id}`, 1);
    var jaill = meh.get(`Jail_${message.guild.id}_${user.id}`);
    var neden = args.slice(2).join(" ");

    if (args[1] == null) return message.channel.send(`> SÜRE BELİRTİLMEDİ`);
    {
      var süre = args[1];
      if (!neden) return (neden = `NEDEN BELİRTİLMEDİ`);
      meh.push(
        `Sicil_${message.guild.id}_${user.id}`,
        "\n JAİL =>" + jaill + ":" + neden
      );
      if (meh.get(`Log_${message.guild.id}`) == null) {
      } else {
        let embd = new Discord.MessageEmbed()
          .setColor(`GREEN`)
          .setTitle(`**__KİŞİ JAİL'E ATILDI__**`)
          .setDescription(
            `**${user} adlı kişiyi ${args.slice(1).join(" ")} nedeni ile ${
              args[1]
            } jail atıldı. \n \n ATAN KİŞİ:${message.author.username}**`
          );
        Channel.send(embd);
      }
      memberTarget.roles.add(hapisli);
      message.channel
        .send(
          embed.setDescription(
            `${user} isimli kişiye ${message.author.username} tarafından ${süre
              .replace(/d/, " gün")
              .replace(/s/, " saniye")
              .replace(/m/, " dakika")
              .replace(/h/, " saat")} boyunca jail rolü verildi.`
          )
        )
        .then((m) => {
          setTimeout(async () => {
            memberTarget.roles.remove(hapisli);
          }, ms(args[1]));
        });
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["jail"],
  permLevel: 0,
};

exports.help = {
  name: "jail",
  description: "",
  usage: "",
};
