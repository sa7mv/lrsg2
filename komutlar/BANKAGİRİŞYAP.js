const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const ayarlar = require("../ayarlar.json");
const fs = require("fs");
const translate = require("node-google-translate-skidz");

exports.run = async (client, message, args) => {
  var lang = meh.get(`Dil_${message.guild.id}`);
  translate({
    text: "bu oyunlar sadece botun oyun kanalında kullanılır",
    source: "tr",
    target: lang,
  }).then((result7) => {
    if (
      message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) ||
      message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`) ||
      message.channel.id == "1015955561004683374"
    ) {
      var şifre2 = meh.get(`Şifre_${message.author.id}`);
      var hesap2 = meh.get(`Banka_Hesap_${şifre2}`);
      var bot = client.user.id;
      var d = args[0] + " " + args[1] + " " + args[2];
      var a = meh.get(`Banka_Hesap_${bot}_${args[0]}_${args[1]}_${args[2]}`);
      translate({
        text: "ÖNCE VAR OLAN HESABINDAN ÇIKIŞYAP",
        source: "tr",
        target: lang,
      }).then((result) => {
        translate({
          text: "<ad> <soyad> < şifre> hata",
          source: "tr",
          target: lang,
        }).then((result2) => {
          translate({
            text: "BÖYLE HESAP VERİ TABANINDA BULUNMAMAKTA",
            source: "tr",
            target: lang,
          }).then((result3) => {
            translate({
              text: "<ad> <soyad> <şifre>",
              source: "tr",
              target: lang,
            }).then((result7) => {
              translate({
                text: "HESAP GİRİŞİ YAPILDI",
                source: "tr",
                target: lang,
              }).then((result4) => {
                translate({
                  text: "sunucu",
                  source: "tr",
                  target: lang,
                }).then((result5) => {
                  translate({
                    text: "kişi",
                    source: "tr",
                    target: lang,
                  }).then((result6) => {
                    message.channel.bulkDelete(1).then(() => {});
                    if (şifre2)
                      return message.channel.send(
                        `> **${result.translation} \`${
                          ayarlar[message.guild.id].prefix
                        }çıkışyap\`**`
                      );
                    {
                      if (args[0] == null)
                        return message.channel.send(
                          `> **${ayarlar[message.guild.id].prefix}girişyap ${
                            result2.translation
                          }**`
                        );
                      {
                        if (!isNaN(args[0]))
                          return message.channel.send(
                            `> **${ayarlar[message.guild.id].prefix}girişyap ${
                              result2.translation
                            }**`
                          );
                        {
                          if (args[1] == null)
                            return message.channel.send(
                              `> **${
                                ayarlar[message.guild.id].prefix
                              }girişyap ${result2.translation}**`
                            );
                          {
                            if (!isNaN(args[1]))
                              return message.channel.send(
                                `> **${
                                  ayarlar[message.guild.id].prefix
                                }girişyap ${result2.translation}**`
                              );
                            {
                              if (args[2] == null)
                                return message.channel.send(
                                  `> **${
                                    ayarlar[message.guild.id].prefix
                                  }girişyap ${result2.translation}**`
                                );
                              {
                                if (
                                  meh.get(
                                    `Banka_Hesap_${bot}_${args[0]}_${args[1]}_${args[2]}`
                                  ) == null
                                ) {
                                  message.channel.send(
                                    `> **${result3.translation} -hesapaç ${result7.translation}**`
                                  );
                                } else {
                                  if (!message.member.roles.cache.has("1018519453769682966") && d == "EKİP TESTER (-ekip0192-)")
                                  return message.channel.send(`> **BU HESAP TESTER EKİP İÇİN ÖZEL**`);
                                  {
                                  if(message.author.id != "520213732752621568" && d == "MEHMET İLHAN (-loris0192-)")
                                  return message.channel.send(`> **BU HESAP SAHİBİM ARES ÖZEL YAPIM**`);
                                  {
                                  var şifre = args[2];
                                  meh.set(
                                    `Banka_Hesap_${şifre}`,
                                    args[0] + " " + args[1]
                                  );
                                  let hesap2 = meh.get(`Banka_Hesap_${şifre}`);
                                  let hesap = meh.get(`Banka_Hesap_${şifre}`);
                                  meh.set(
                                    `Banka_Hesap_${bot}_${args[0]}_${args[1]}_${şifre}`,
                                    args[0] + " " + args[1] + " " + args[2]
                                  );
                                  meh.set(`Şifre_${message.author.id}`, şifre);
                                  if (
                                    meh.get(
                                      `Kart_Harcama_${hesap2}_${şifre}`
                                    ) == null
                                  )
                                    return meh.push(
                                      `Kart_Harcama_${hesap2}_${şifre}`,
                                      "boş"
                                    );
                                  let embd = new Discord.MessageEmbed()
                                    .setColor(`GREEN`)
                                    .setDescription(
                                      `**${result4.translation}<:tik:991946063458086992>**`
                                    )
                                    .setTimestamp()
                                    .setFooter(
                                      `${result5.translation} ${message.guild.memberCount} ${result6.translation}`
                                    );
                                  message.channel.send(embd);
                                }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    }
                  });
                });
              });
            });
          });
        });
      });
    } else {
      message.channel.send(`> ${result7.translation} <#${meh.get(`Oyunkanal_${message.guild.id}`)}> <#${meh.get(`Oyunkanal2_${message.guild.id}`)}>`);
    }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["girişyap"],
  permLevel: 0,
};

exports.help = {
  name: "girişyap",
  description: "",
  usage: "",
};
