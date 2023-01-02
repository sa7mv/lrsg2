const translate = require('node-google-translate-skidz');
const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
module.exports.run = async (Client, message, args) => {
  let emb = new Discord.MessageEmbed();
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";
  let kickrol = meh.get(`Kickrol_${message.guild.id}`);
  let bütünizin = meh.get(`Bütünrol_${message.guild.id}`);
  if (meh.get(`Kickrol_${message.guild.id}`) == null)
    return message.channel.send(`> **GEREKLİ ROLLER AYARLANMAMIŞ**`);
  if (!message.member.roles.cache.has(kickrol))
    return message.channel.send(`> **BU KOMUDU KULLANMAK İÇİN YETKİN YOK**`);
  const Channel = Client.channels.cache.find(
    (x) => x.id == meh.get(`Log_${message.guild.id}`)
  );

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen atılacak kişiyi etiketleyiniz!")
        .setColor("RED")
        .setFooter(Client.user.username, Client.user.avatarURL)
    );
  }

  const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(
      ` ${u} ** Adlı şahsın sunucudan atılmasını onaylıyor musunuz?**`
    )
    .setFooter(Client.user.username, Client.user.avatarURL);
  message.channel.send(embed).then(async function (sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function () {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000,
    });
    reactions.on("end", () => sentEmbed.edit(` **İşlem iptal oldu!**`));
    reactions.on("collect", async function (reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `**İşlem onaylandı!** ${u} **adlı kişi sunucudan atıldı!**`
        );
        if (meh.get(`Log_${message.guild.id}`) == null) {
        } else {
          let embd = new Discord.MessageEmbed()
            .setColor(`GREEN`)
            .setTitle(`**__KİŞİ ATILDI__**`)
            .setDescription(
              `**${u} adlı kişiyi ${args
                .slice(1)
                .join(" ")} nedeni ile sunucudan attı. \n \n ATAN KİŞİ:${
                message.author.username
              }**`
            );
          Channel.send(embd);
        }

        message.guild.member(u).kick();
      }
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kick"],
  permLevel: 0,
};

exports.help = {
  name: "kick",
  description: "",
  usage: "",
};
