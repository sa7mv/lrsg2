const translate = require('node-google-translate-skidz');
const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const meh = new db.table("ilh");

exports.run = (client, message, args) => {
  let ban = meh.get(`Banrol_${message.guild.id}`);
  let bütün = meh.get(`Bütünrol_${message.guild.id}`);

  if (meh.get(`Banrol_${message.guild.id}`) == null)
    return message.channel.send(`> **GEREKLİ ROLLER AYARLANMAMIŞ.**`);
  if (!message.member.roles.cache.has(ban))
    return message.channel.send(`> **BU KOMUDU KULLANMAK İÇİN YETKİN YOK**`);
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Uyarı", "`ban` adlı komutu özel mesajlarda kullanamazsın.");
    return message.author.send(ozelmesajuyari);
  }
  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1)
    return message.channel
      .send(`Lütfen sunucudan yasaklayacağınız kişiyi etiketleyin.`)
      .catch(console.error);

  if (!message.guild.member(user).bannable)
    return message.channel.send(
      `❌ Belirttiğiniz kişinin Yetkisi Benden Daha Üstün!`
    );
  message.guild.member(user).ban();

  message.channel.send(
    " Başarılı, " +
      user +
      " İSİMLİ KULLANICI **" +
      reason +
      "** sebebiyle sunucudan yasaklandı."
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban"],
  permLevel: 0,
};

exports.help = {
  name: "ban",
  description: "",
  usage: "",
};
