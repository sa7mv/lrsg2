const translate = require('node-google-translate-skidz');
const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
  message.channel.bulkDelete(1).then(() => {
    
  });
  let msgg = await message.channel.send(`${args[0]} adet mesajı silmek İstiyor musun? (Evet/Hayır)`).then(msg => msg.delete({timeout:2000}));
    let messages = await msgg.channel.awaitMessages((m) => m.author.id == message.author.id && ["evet", "Evet", "EVET", "hayır", "hayir","Hayır","HAYIR"].some(cevap => m.content.toLowerCase().includes(cevap)), {
        max: 1,
        time: 15000
    });

    if (messages.size <= 0) {
        return message.reply("Cevap vermediğin için iptal ettim");
    }

 let reply = messages.first();
    if (reply.content.toLocaleLowerCase().includes("evet")) {
      message.channel.bulkDelete(1).then(() => {
      });
  let msgggg = await message.channel.send("silme İşlemi Başlatılıyor...").then(m => m.delete({timeout:2000}))
  msgggg.delete({timeout:200});
      
  let bs = args.slice(0).join("+");

  let id = Number(args[0]);

  if (isNaN(id))
    return message.channel
      .send("Lütfen Sayı Giriniz, Örnek: +temizle 10")
      .then(msg => msg.delete({timeout:2000}));
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
  if (!args[0])
    return message.channel
      .send("Hey, Lütfen Temizlenecek Mikatarı Belirtiniz!")
      .then(msg => msg.delete({timeout:2000}));
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(` ${args[0]} Adet Mesaj Silindi `)
      .then(msg => msg.delete({timeout:2000}));
  });
};
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["temizle"],
  permLevel: 0,
};

exports.help = {
  name: "sil",
  description: "",
  usage: "",
};