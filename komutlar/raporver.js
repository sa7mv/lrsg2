const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(Client, message, args) => {

  let embd = new Discord.MessageEmbed();
  const Channel = Client.channels.cache.find(x => x.id == "1018520317745971272");

     if(args[0] == null)
    {
      message.channel.bulkDelete(1).then(() => {
      message.channel.send("lütfen raporu yazın").then( msg => msg.delete({timeout:3000}));
      });
    }
    else
    {
    let mesaj =  args.slice(0).join(' ');
    embd.setColor("RANDOM");
    embd.setTitle(`__RAPOR EDİLDİ__ ${message.author.username}`);
    embd.setDescription(`__RAPOR:__${mesaj}`);
    embd.setTimestamp();
    Channel.send(embd);
    message.channel.bulkDelete(1).then(() => {
    
    });
    message.channel.send("raporunuz atıldı").then( msg => msg.delete({timeout:3000}));
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["raporet","report"],
  permLevel: 0,
};

exports.help = {
  name: "raporver",
  description: "",
  usage: "",
};