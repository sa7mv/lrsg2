const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const LORİSClient = new Discord.Client();
exports.run = (client, message) => {
  const LORİSEmbed = new Discord.MessageEmbed();
  LORİSEmbed.setColor("RANDOM")
  LORİSEmbed.setDescription(`BENİ SUNUCUNA EKLEMEK İÇİN [BURAYA TIKLA](https://discord.com/api/oauth2/authorize?client_id=732701873018241104&permissions=8&scope=bot)`)
  message.channel.send(LORİSEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botlink"],
  permLevel: 0,
};

exports.help = {
  name: "bot",
  description: "",
  usage: "",
};