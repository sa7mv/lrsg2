const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const translate = require("node-google-translate-skidz");

exports.run = async (client, message, args) => {
  var lang = meh.get(`Dil_${message.guild.id}`);
  translate({
    text: "en zengin kişiler",
    source: "tr",
    target: lang,
  }).then((result) => {
    translate({
      text: "sunucudaki en zengin kişiler",
      source: "tr",
      target: lang,
    }).then((result2) => {
      let embd = new Discord.MessageEmbed()
        .setColor(`GREEN`)
        .setDescription(
          `__${result.translation}__ \n \n1.${meh.get(
            `liste1ad_${client.id}`
          )}:${meh.get(`LiSte1_${client.id}`)}\n2.${meh.get(
            `liste2ad_${client.id}`
          )}:${meh.get(`LiSte2_${client.id}`)}\n3.${meh.get(
            `liste3ad_${client.id}`
          )}:${meh.get(`LiSte3_${client.id}`)}\n4.${meh.get(
            `liste4ad_${client.id}`
          )}:${meh.get(`LiSte4_${client.id}`)}\n5.${meh.get(
            `liste5ad_${client.id}`
          )}:${meh.get(`LiSte5_${client.id}`)} \n \n__${
            result2.translation
          }__ \n \n1.${meh.get(`sliste1ad_${message.guild.id}`)}:${meh.get(
            `sLiSte1_${message.guild.id}`
          )}\n2.${meh.get(`sliste2ad_${message.guild.id}`)}:${meh.get(
            `sLiSte2_${message.guild.id}`
          )}\n3.${meh.get(`sliste3ad_${message.guild.id}`)}:${meh.get(
            `sLiSte3_${message.guild.id}`
          )}\n4.${meh.get(`sliste4ad_${message.guild.id}`)}:${meh.get(
            `sLiSte4_${message.guild.id}`
          )}\n5.${meh.get(`sliste5ad_${message.guild.id}`)}:${meh.get(
            `sLiSte5_${message.guild.id}`
          )}`
        )
        .setTimestamp()
        .setFooter(``);
      message.channel.send(embd);
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["list"],
  permLevel: 0,
};

exports.help = {
  name: "liste",
  description: "liste",
  usage: "liste",
};
