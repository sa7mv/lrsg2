const Discord = require("discord.js");
const db = require("quick.db");
const meh = new db.table('ilh');
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
 
  let u = message.mentions.users.first();
  if(!u)return (message.channel.send(`önce kişiyi etiketle`))
  {
    var şifre = meh.get(`Şifre_${message.author.id}`);
                        if (meh.get(`Banka_Hesap_${şifre}`) == null)
                          return message.channel.send(
                            `> ** ${
                              ayarlar[message.guild.id].prefix
                            }hesapaç <ad> <soyad> <şifre> | ${
                              ayarlar[message.guild.id].prefix
                            }girişyap <ad> <soyad> <şifre>**`
                          );
                        {
                          let hesap = meh.get(`Banka_Hesap_${şifre}`);
    if(meh.get(`SAHİBİ_${hesap}_${şifre}`) == message.author.id){
    if(meh.get(`SAHİBİ_${hesap}_${şifre}`) == u.id) return (message.channel.send(`BU HESAP ZATEN SİZİN`).then(m => m.delete({timeout:2000})))
      {
    meh.set(`SAHİBİ_${hesap}_${şifre}`, u.id);
    message.channel.send(`sahip ${u} olarak değiştirildi`);
    let embd = new Discord.MessageEmbed()
    .setColor(`BLACK`)
    .setDescription(`${hesap} ADLI HESAP ARTIK SİZİN`)
    u.send(embd);
      }
    }
    else{
      message.channel.send(`HESAP SAHİBİ SİZ DEĞİLSİNİZ`);
    }
    
                        }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sahip_değiş"],
  permLevel: 0,
};

exports.help = {
  name: "sahipdeğiş",
  description: "",
  usage: "",
};