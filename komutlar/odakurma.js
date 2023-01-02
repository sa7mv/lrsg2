const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {
  
  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  
  if (message.guild.channels.cache.find(channel => channel.name === "➕│2 Kişilik Oda")) return message.channel.send(" Zaten kurulu.")
  
    let msgg = await message.reply(`Geçici Oda Sistemini Kurmak İstiyor musun? (Evet/Hayır)`);

    let messages = await msgg.channel.awaitMessages((m) => m.author.id == message.author.id && ["evet", "hayır", "hayir","Hayır","HAYIR"].some(cevap => m.content.toLowerCase().includes(cevap)), {
        max: 1,
        time: 15000
    });

    if (messages.size <= 0) {
        return message.reply("Cevap vermediğin için iptal ettim");
    }

 let reply = messages.first();
    if (reply.content.toLocaleLowerCase().includes("evet")) {
      
      message.channel.send("Kurulum İşlemi Başlatılıyor...").then(m => m.delete({timeout:2000}))

      await message.guild.channels.create('🔒 2 Kişilik Odalar', { type: "category" })

await message.guild.channels.create("➕│2 Kişilik Oda", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === '🔒 2 Kişilik Odalar').id,})
      
      await message.guild.channels.create('🔒 3 Kişilik Odalar', { type: "category" })

await message.guild.channels.create("➕│3 Kişilik Oda", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === '🔒 3 Kişilik Odalar').id,})
      
      await message.guild.channels.create('🔒 4 Kişilik Odalar', { type: "category" })

await message.guild.channels.create("➕│4 Kişilik Oda", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === '🔒 4 Kişilik Odalar').id,})
      
      await message.guild.channels.create('🔒 5 Kişilik Odalar', { type: "category" })

await message.guild.channels.create("➕│5 Kişilik Oda", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === '🔒 5 Kişilik Odalar').id,})
      
      await message.guild.channels.create('🔒 20 Kişilik Odalar', { type: "category" })

await message.guild.channels.create("➕│20 Kişilik Oda", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === '🔒 20 Kişilik Odalar').id,})

        message.reply(`Kurulum İşlemi Tamamlandı!`);
    }
  else message.reply("İşlem İptal Edildi");

} 
else
{
message.channel.send(`> BU KOMUTLAR SADECE BOTUN KOMUT KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["odakur"],
  permLevel: 0,
};

exports.help = {
  name: "odakur",
  description: "",
  usage: "",
};