const ayarlar = require('../ayarlar.json');
const fs = require(`fs`);
const Discord = require(`discord.js`);
let talkedRecently = new Set();
module.exports = message => {
  fs.writeFile("./ayarlar.json", JSON.stringify(ayarlar), err => {
    if(err){
    console.log(err);
    } 
  });
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar[message.guild.id].prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar[message.guild.id].prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command))
  {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (!cmd){
    let embd = new Discord.MessageEmbed()
    .setColor(`BLACK`)
    .setDescription(`çok aradım fakat __${message.content.split(' ')[0].slice(ayarlar[message.guild.id].prefix.length)}__ adlı komut bulamadım`)
    .setTimestamp()
    .setFooter(``);
    message.reply(embd);
  }
  else
  {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};
