const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.author.id == 520213732752621568)
  {
    let u = message.mentions.users.first();
    
     meh.delete(`Para_${message.guild.member(u).id}`);
    meh.set(`Para_${message.guild.member(u).id}`,0);
    message.channel.send(`${u} kişisinin parasını sildik`);
  }
  else
  {
    message.channel.send("bu komudu sadece sahibim kullanabilir");
  } 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["parasil"],
  permLevel: 0,
};

exports.help = {
  name: "parasil",
  description: "",
  usage: "",
};