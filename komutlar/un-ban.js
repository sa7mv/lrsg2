const translate = require('node-google-translate-skidz');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new MessageEmbed().setDescription(`:x: Yetkin yeterli değil!`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setDescription(`:x: Kullanıcı id hatalı veya kullanıcı yasaklı değil!`))
    }
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setDescription(`:white_check_mark:** Başarılı bir şekilde  Ban Kaldırıldı**`))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unban"],
  permLevel: 0,
};

exports.help = {
  name: "un-ban",
  description: "",
  usage: "",
};