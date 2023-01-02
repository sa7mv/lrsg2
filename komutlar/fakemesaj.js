const translate = require('node-google-translate-skidz');
const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
var sahip = ayarlar.sahip;


exports.run = async (client, message, args) => {
  
  var prefix = ayarlar[message.guild.id].prefix;
  let u = message.mentions.users.first();
  
  var kişi = message.author.id;
  var sunucuadmin = message.guild.id;
  sunucuadmin = message.member.hasPermission("BAN_MEMBERS");
  if (kişi == sunucuadmin || kişi == sahip) {
    if (message.guild.member(u).id == sahip) {
      message.channel.send("sahibimin taklidini yapmam yasak");
    } else {
      if (message.deletable) await message.delete();
      if (!message.guild.me.permissions.has("MANAGA_MESSAGES"))
        return message.channel
          .send(`${message.author} \`Webhookları Yönet\` iznim bulunmuyor!`)
          .then((a) => a.delete({ timeout: 4500 }));

      let ÇekilecekKullanıcı = message.guild.member(u).id;
      if (!ÇekilecekKullanıcı)
        return message.channel
          .send(`${message.author} Bir kullanıcıyı etiketlemen gerekiyor.`)
          .then((a) => a.delete({ timeout: 4500 }));
      let YazılacakMesaj = args.slice(1).join(" ");
      if (!YazılacakMesaj)
        return message.channel
          .send(
            `${message.author} etiketlediğin kullanıcının hiç buraya yazdığından emin misin,${prefix}fakemesaj KULLANICI ETİKET mesaj şeklinde komutu düzgün kullan.`
          )
          .then((a) => a.delete({ timeout: 4500 }));

      if (YazılacakMesaj.includes("@everyone"))
        return message.channel
          .send(
            `${message.author} Everyone atamazsın!,bir daha yapmamanı öneriyorum ban yiyebilirsin!`
          )
          .then((a) => a.delete({ timeout: 4500 }));
      if (YazılacakMesaj.includes("@here"))
        return message.channel
          .send(
            `${message.author} Here atamazsın!,bir daha yapmamanı öneririm ban yiyebilirsin!`
          )
          .then((a) => a.delete({ timeout: 4500 }));

      let Kullanıcı = await client.users.fetch(ÇekilecekKullanıcı);
      try {
        message.channel
          .createWebhook(Kullanıcı.username, {
            avatar: Kullanıcı.avatarURL(),
          })
          .then(async (wb) => {
            const Webhook = new Discord.WebhookClient(wb.id, wb.token);
            await Webhook.send(YazılacakMesaj);
            setTimeout(() => {
              Webhook.delete();
            }, 2000);
          });
      } catch (err) {
        message.channel.send(err);
      }
    }
  } else {
    message.channel.send("rolünüz yetersiz");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fakemesaj"],
  permLevel: 0,
};

exports.help = {
  name: "fakemesaj",
  description: "",
  usage: "",
};