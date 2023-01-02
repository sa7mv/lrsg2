const translate = require('node-google-translate-skidz');
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {

var prefix = ayarlar[message.guild.id].prefix;
var page = 0;
  
let arr = [];
let emojiarr = message.guild.emojis.cache.array();
  
let embd = new Discord.MessageEmbed();
  message.channel.bulkDelete(1).then(() => {
    
  });
  
message.channel.send(embd.setDescription(`**üye Komutları İçin:👤** \n**Yetkili Komtları İçin:🛡️** \n**Yardım Mesajını Silmek İçin:🗑️**`).setFooter(`sunucu ${message.guild.memberCount} kişi`)).then(async msg => {
      await msg.react("👤")
      await msg.react("🛡️")
      await msg.react("🗑️")
  
      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

      var collector = msg.createReactionCollector(filter, {
        time: 120000
      });
  setTimeout(function() {
    msg.delete();
  }, 125000);

      collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🛡️":
            reaction.users.remove(user).catch(console.error);

              embd.setColor("RANDOM");
              embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
              embd.setDescription(`**${prefix}prefix** <yaz bişey>**\n${prefix}ban** <@kişi> <neden> **\n${prefix}unbun** <kişi id> **\n${prefix}kick** <@kişi> **\n${prefix}uyar** <@kişi> <neden> **\n${prefix}sicil** <@kişi> **\n${prefix}siciltemizle** <@kişi> <neden> **\n${prefix}yavaşmod** <süre> **\n${prefix}sürelirol** <@kişi> <süre> **\n${prefix}kanalayarla** **\n${prefix}rolayarla** __UYARI__: ROLAYARLA KOMUTU SONRASI MUTED VE HAPİSLİ ROL LERİN İZİNLERİNİ AYARLAYIN MUTED YAZMA KAPATILACAK HAPİSLİ KANALI GÖRME KAPATILACAK ÖNEMLİ!!!! **\n${prefix}logkanal-ayarla** <#kanal> **\n${prefix}duyuru_kanal_ayarla** <#kanal> **\n${prefix}duyuru** <yazı> **\n${prefix}özelodakur** **\n${prefix}özelodasil** **\n${prefix}sil** <adet>`);
            msg.edit(embd);
           break;
          case "👤":
            reaction.users.remove(user).catch(console.error);
              embd.setColor("RANDOM");
              embd.setFooter(`sunucu ${message.guild.memberCount} kişi`);
              embd.setDescription(`**${prefix}raporet** <yazı> **\n${prefix}slot** <miktar> **\n${prefix}market** **\n${prefix}buy** <eşya ismi> <adet> **\n${prefix}daily** **\n${prefix}give** <@kişi> <para miktarı|eşya> \` aşya atıcak isen adet girmelisin <adet> \` **\n${prefix}sat** <eşya> <adet> **\n${prefix}envanter** **\n${prefix}notal** <yazı> **\n${prefix}notsil** <not id> **\n${prefix}notlarım** **\n${prefix}yazıtura** <tura|yazı> <miktar> **\n${prefix}çantakullan** **\n${prefix}çantaçıkar** **\n${prefix}raporet** <rapor> **\n${prefix}zarat** <zar sayısı> **\n${prefix}çifttek** <rakam> **\n${prefix}afk** <neden> **\n${prefix}balıktut** **\n${prefix}odunkır** **\n${prefix}videoçek** **\n${prefix}emojiler** **\n${prefix}wasted** **\n${prefix}avatar** **\n${prefix}botlink** **\n${prefix}xp** **\n${prefix}kaz** **\n${prefix}taşişle** **\n${prefix}banka** **\n${prefix}hesapaç** <ad> <soyad> <şifre> **\n${prefix}para-yatır** <miktar> **\n${prefix}para-çek** <miktar> **\n${prefix}çıkışyap** **\n${prefix}girişyap** <ad> <soyad> <şifre> **\n${prefix}para-aktar** <@kişi> <miktar> **\n${prefix}go \`<maden|orman|iskele|ev>\`**`);
            msg.edit(embd);
          break;
          case "🗑️":
          msg.delete();
          break;
        }
      });

})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0,
};

exports.help = {
  name: "help",
  description: "",
  usage: "",
};