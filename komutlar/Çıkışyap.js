const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  var şifre2 = meh.get(`Şifre_${message.author.id}`);
  var hesap2 = meh.get(`Banka_Hesap_${şifre2}`);
  if(hesap2 == null)return (message.channel.send(`> **ÇIKIŞ YAPICAK BİR HESAP YOK**`))
      
let arr = [];
let emojiarr = message.guild.emojis.cache.array();
  
let embd = new Discord.MessageEmbed();
  message.channel.bulkDelete(1).then(() => {
    
  });
  
message.channel.send(embd.setDescription(`**HESAP ÇIKIŞI İÇİN ONAY GEREKLİ ONAY İÇİN ✅ BASIN \n \nİPTAL İÇİN ⛔ BASIN**`).setFooter(`sunucu ${message.guild.memberCount} kişi`)).then(async msg => {
      await msg.react("✅")
      await msg.react("⛔")
  
      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

      var collector = msg.createReactionCollector(filter, {
        time: 120000
      });
  setTimeout(function() {
    msg.delete();
  }, 125000);

      collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "✅":
            reaction.users.remove(user).catch(console.error);
            
            msg.delete();
            message.channel.send("çıkış yapma işlemi başlatıldı...").then(m => m.delete({timeout:2000}));
  var şifre = meh.get(`Şifre_${message.author.id}`);
  meh.delete(`Şifre_${message.author.id}`);
  let embd = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setDescription(`ÇIKIŞ YAPILDI☑️`)
  .setTimestamp()
  .setFooter(`sunucu ${message.guild.memberCount} kişi`)
  message.channel.send(embd).then(m => m.delete({timeout:2000}));
            
            break;
            case "⛔":
            reaction.users.remove(user).catch(console.error);
            
            msg.delete();
            
            break;
        }
      })
  
})
    } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çıkışyap"],
  permLevel: 0,
};

exports.help = {
  name: "çıkışyap",
  description: "",
  usage: "",
};