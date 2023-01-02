const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table("ilh");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
 
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["deneme"],
  permLevel: 0,
};

exports.help = {
  name: "deneme",
  description: "",
  usage: "",
};