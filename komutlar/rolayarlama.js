const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Komutkanal_${message.guild.id}`))
  {
  
  if(message.guild.owner.id == message.author.id)
  {
  let muterol = message.guild.roles.cache.find(role => role.name == "mute|susturulmuş");
  if (!muterol) {
    try {
      muterol = await message.guild.roles.create({
        data: {
                name: "mute|susturulmuş",
                color: "#c11a09",
                permissions: [],
        },
        reason: 'mute için!'
              });
      message.guilds.channels.cache.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
    meh.set(`Muterol_${message.guild.id}`, muterol.id);
  }
  let kickrol = message.guild.roles.cache.find(role => role.name == "kick yetkisi");
  if (!kickrol) {
    try {
      kickrol = await message.guild.roles.create({
        data: {
                name: "kick yetkisi",
                color: "GRAY",
                permissions: [],
        },
        reason: 'kick için!'
              });
      message.guilds.channels.cache.forEach(async (channel, id) => {
        await channel.overwritePermissions(kickrol, {
          SEND_MESSAGES: true,
          ADD_REACTIONS: true
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
    meh.set(`Kickrol_${message.guild.id}`, kickrol.id);
  }
  let uyarrol = message.guild.roles.cache.find(role => role.name == "uyar yetkisi");
  if (!uyarrol) {
    try {
      uyarrol = await message.guild.roles.create({
        data: {
                name: "uyar yetkisi",
                color: "GRAY",
                permissions: [],
        },
        reason: 'uyar için!'
              });
      message.guilds.channels.cache.forEach(async (channel, id) => {
        await channel.overwritePermissions(uyarrol, {
          SEND_MESSAGES: true,
          ADD_REACTIONS: true
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
    meh.set(`Uyarrol_${message.guild.id}`, uyarrol.id);
  }
  let banrol = message.guild.roles.cache.find(role => role.name == "ban yetkisi");
  if (!banrol) {
    try {
      banrol = await message.guild.roles.create({
        data: {
                name: "ban yetkisi",
                color: "GRAY",
                permissions: [],
        },
        reason: 'ban için!'
              });
      message.guilds.channels.cache.forEach(async (channel, id) => {
        await channel.overwritePermissions(banrol, {
          SEND_MESSAGES: true,
          ADD_REACTIONS: true
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
    meh.set(`Banrol_${message.guild.id}`, banrol.id);
  }
  let jailrol = message.guild.roles.cache.find(role => role.name == "jail yetkisi");
  if (!jailrol) {
    try {
      jailrol = await message.guild.roles.create({
        data: {
                name: "jail yetkisi",
                color: "GRAY",
                permissions: [],
        },
        reason: 'jail için!'
              });
      message.guilds.channels.cache.forEach(async (channel, id) => {
        await channel.overwritePermissions(jailrol, {
          SEND_MESSAGES: true,
          ADD_REACTIONS: true
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
    meh.set(`Jailrol_${message.guild.id}`, jailrol.id);
  }
  let hapisrol = message.guild.roles.cache.find(role => role.name == "hapisli⛔");
  if (!hapisrol) {
    try {
      hapisrol = await message.guild.roles.create({
        data: {
                name: "hapisli⛔",
                color: "#c11a09",
                permissions: [],
        },
        reason: 'hapisli⛔ için!'
              });
      message.guilds.channels.cache.forEach(async (channel, id) => {
        await channel.overwritePermissions(hapisrol, {
          SEND_MESSAGES: false,
          SHOW_CHANNELS: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
    meh.set(`Hapislirol_${message.guild.id}`, hapisrol.id);
  }
  message.channel.send(`> ROLLER AYARLANDI`);
  }
  else
  {
    message.channel.send(`> MALESEF SEN SUNUCU SAHİBİ DEĞİLSİN`);
  } 
  } 
else
{
message.channel.send(`> BU KOMUTLAR SADECE BOTUN KOMUT KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolayarla"],
  permLevel: 0,
};

exports.help = {
  name: "rolayarla",
  description: "",
  usage: "",
};