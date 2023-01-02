const translate = require('node-google-translate-skidz');
const Discord = require('discord.js');
const db = require("quick.db");
const meh = new db.table('ilh');
const ms = require("parse-ms");

exports.run = async(client, message, args) => {

  if(message.channel.id == meh.get(`Oyunkanal_${message.guild.id}`) || message.channel.id == meh.get(`Oyunkanal2_${message.guild.id}`))
  {
  var kişi = message.author.id;
  var kişi2 = message.author;
  if(!isNaN(args[0]))return (message.channel.send(`> **ÖĞE ADINI YAZIN**`))
  {
  if(args[0] == null)return (message.channel.send(`> **ÖĞE ADINI YAZIN**`))
  {
  if(args[0] == "kazma"|| args[0] == "Kazma" || args[0] == "KAZMA")
  {
    if(args[1] == "all")
    {
        var satiş = meh.get(`Kazma_${message.author.id}`) * 2000;
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${meh.get(`Kazma_${message.author.id}`)}ADET KAZMA YARI FİYATINA SATILDI__.`)
        .setFooter(`FİYAT:${satiş}L CASH`)
        message.channel.send(embd);
      meh.set(`Kazma_${kişi}`, 0);
      meh.add(`Para_${kişi}`, satiş);
    }
    else
    {
      if(isNaN(args[1]))return(message.channel.send(`> **ADET BELİRTMEDİN**`))
      {
      if(meh.get(`Kazma_${message.author.id}`) >= args[1])
      {
        var satiş = args[1] * 1000;
        meh.add(`Kazma_${kişi}`, -args[1]);
        meh.add(`Para_${kişi}`, satiş);
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${args[1]}ADET KAZMA YARI FİYATINA SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
    }
    else
    {
      let embd = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("envanter deki kazma sayısından fazla kazma satmaya çalıştınız");
      message.channel.send(embd);
    } 
      }
    }
  }
  else if(args[0] == "balta" || args[0] == "Balta" || args[0] == "BALTA")
  {
    if(args[1] == "all")
    {
      var satiş = meh.get(`Balta_${kişi}`) * 5000;
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${meh.get(`Balta_${kişi}`)}ADET BALTA YARI FİYATINA SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
      meh.set(`Balta_${kişi}`, 0);
      meh.add(`Para_${kişi}`, satiş);
    } 
    else
    {
    if(isNaN(args[1]))return(message.channel.send(`> **ADET BELİRTMEDİN**`))
    {  
      if(meh.get(`Balta_${message.author.id}`) >= args[1])
      {
        var satiş = args[1] * 5000;
        meh.add(`Balta_${kişi}`, -args[1]);
        meh.add(`Para_${kişi}`, satiş);
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${args[1]}ADET BALTA YARI FİYATINA SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
    }
    else
    {
      let embd = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("envanter deki balta sayısından fazla balta satmaya çalıştınız");
      message.channel.send(embd);
    } 
    }
    } 
  }
  else if(args[0] == "olta"|| args[0] == "Olta" || args[0] == "OLTA")
  {
    if(args[1] == "all")
    {
      var satiş = meh.get(`Olta_${kişi}`) * 50000;
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${meh.get(`Olta_${kişi}`)}ADET OLTA YARI FİYATINA SATILDI__.`)
        .setFooter(`FİYAT:${satiş}L CASH`)
        message.channel.send(embd);
      meh.set(`Olta_${kişi}`, 0);
      meh.add(`Para_${kişi}`, satiş);
    }
    else
    {
      if(isNaN(args[1]))return(message.channel.send(`> **ADET BELİRTMEDİN**`))
      {
      if(meh.get(`Olta_${message.author.id}`) >= args[1])
      {
        var satiş = args[1] * 50000;
        meh.add(`Olta_${kişi}`, -args[1]);
        meh.add(`Para_${kişi}`, satiş);
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${args[1]}ADET OLTA YARI FİYATINA SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
    }
    else
    {
      let embd = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("envanter deki olta sayısından fazla olta satmaya çalıştınız");
      message.channel.send(embd);
    } 
      } 
    } 
  }
  else if(args[0] == "bilgisayar"|| args[0] == "Bilgisayar" || args[0] == "BİLGİSAYAR")
  {
    if(args[1] == "all")
    {
      var satiş = meh.get(`Bilgisayar_${kişi}`) * 125000;
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${meh.get(`Bilgisayar_${kişi}`)}ADET BİLGİSAYAR YARI FİYATINA SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
      meh.set(`Bilgisayar_${kişi}`, 0);
      meh.add(`Para_${kişi}`, satiş);
    }
    else
    {
      if(isNaN(args[1]))return(message.channel.send(`> **ADET BELİRTMEDİN**`))
      {
      if(meh.get(`Bilgisayar_${message.author.id}`) >= args[1])
      {
        var satiş = args[1] * 125000;
        meh.add(`Bilgisayar_${kişi}`, -args[1]);
        meh.add(`Para_${kişi}`, satiş);
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${args[1]}ADET BİLGİSAYAR YARI FİYATINA SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
    }
    else
    {
      let embd = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("envanter deki bilgisayar sayısından fazla bilgisayar satmaya çalıştınız");
      message.channel.send(embd);
    } 
      } 
    }
  }
    else if(args[0] == "çanta" || args[0] == "Çanta" || args[0] == "ÇANTA")
  {
    if(args[1] == "all")
    {
      var satiş = meh.get(`Çanta_${kişi}`) * 10500;
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${meh.get(`Çanta_${kişi}`)}ADET ÇANTA YARI FİYATINA SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
      meh.set(`Çanta_${kişi}`, 0);
      meh.add(`Para_${kişi}`, satiş);
    } 
    else
    {
    if(isNaN(args[1]))return(message.channel.send(`> **ADET BELİRTMEDİN**`))
    {  
      if(meh.get(`Çanta_${message.author.id}`) >= args[1])
      {
        var satiş = args[1] * 10500;
        meh.add(`Çanta_${kişi}`, -args[1]);
        meh.add(`Para_${kişi}`, satiş);
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${args[1]}ADET ÇANTA YARI FİYATINA SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
    }
    else
    {
      let embd = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("envanter deki çanta sayısından fazla çanta satmaya çalıştınız");
      message.channel.send(embd);
    } 
    }
    } 
  }
  else if(args[0] == "balık"|| args[0] == "Balık" || args[0] == "BALIK")
  {
    if(args[1] == "all")
    {
        var satiş = meh.get(`Balık_${message.author.id}`) * 9000;
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${meh.get(`Balık_${message.author.id}`)}ADET BALIK SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
      meh.set(`Balık_${kişi}`, 0);
      meh.add(`Para_${kişi}`, satiş);
    }
    else
    {
      if(isNaN(args[1]))return(message.channel.send(`> **ADET BELİRTMEDİN**`))
      {
      if(meh.get(`Balık_${message.author.id}`) >= args[1])
      {
        var satiş = args[1] * 9000;
        meh.add(`Balık_${kişi}`, -args[1]);
        meh.add(`Para_${kişi}`, satiş);
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${args[1]}ADET BALIK SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
    }
    else
    {
      let embd = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("envanter deki balık sayısından fazla balık satmaya çalıştınız");
      message.channel.send(embd);
    } 
      }
    }
  }
  else if(args[0] == "köpek_balığı"|| args[0] == "Köpek_Balığı" || args[0] == "KÖPEK_BALIĞI")
  {
    if(args[1] == "all")
    {
        var satiş = meh.get(`Köpek_Balığı_${message.author.id}`) * 50000;
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${meh.get(`Köpek_Balığı_${message.author.id}`)}ADET KÖPEK BALIĞI SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
      meh.set(`Köpek_Balığı_${kişi}`, 0);
      meh.add(`Para_${kişi}`, satiş);
    }
    else
    {
      if(isNaN(args[1]))return(message.channel.send(`> **ADET BELİRTMEDİN**`))
      {
      if(meh.get(`Köpek_Balığı_${message.author.id}`) >= args[1])
      {
        var satiş = args[1] * 50000;
        meh.add(`Köpek_Balığı_${kişi}`, -args[1]);
        meh.add(`Para_${kişi}`, satiş);
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${args[1]}ADET KÖPEK BALIĞI SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
    }
    else
    {
      let embd = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("envanter deki köpek balığı sayısından fazla köpek balığı satmaya çalıştınız");
      message.channel.send(embd);
    } 
      }
    }
  }
    else if(args[0] == "odun" || args[0] == "Odun" || args[0] == "ODUN")
  {
    if(args[1] == "all")
    {
      var satiş = meh.get(`Odun_${kişi}`) * 2000;
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${meh.get(`Odun_${kişi}`)}ADET Odun SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
      meh.set(`Odun_${kişi}`, 0);
      meh.add(`Para_${kişi}`, satiş);
    } 
    else
    {
    if(isNaN(args[1]))return(message.channel.send(`> **ADET BELİRTMEDİN**`))
    {  
      if(meh.get(`Odun_${message.author.id}`) >= args[1])
      {
        var satiş = args[1] * 2000;
        meh.add(`Odun_${kişi}`, -args[1]);
        meh.add(`Para_${kişi}`, satiş);
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${args[1]}ADET ODUN SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
    }
    else
    {
      let embd = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("envanter deki odun sayısından fazla odun satmaya çalıştınız");
      message.channel.send(embd);
    } 
    }
    } 
  }
  else if(args[0] == "token" || args[0] == "Token" || args[0] == "TOKEN")
  {
    if(args[1] == "all")
    {
      var satiş = meh.get(`Madeni_Token_${kişi}`) * 20;
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${meh.get(`Madeni_Token_${kişi}`)}ADET TOKEN SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
      meh.set(`Madeni_Token_${kişi}`, 0);
      meh.add(`Para_${kişi}`, satiş);
    }
    else
    {
    if(isNaN(args[1]))return(message.channel.send(`> **ADET BELİRTMEDİN**`))
    {  
      if(meh.get(`Madeni_Token_${message.author.id}`) >= args[1])
      {
        var satiş = args[1] * 20;
        meh.add(`Madeni_Token_${kişi}`, -args[1]);
        meh.add(`Para_${kişi}`, satiş);
        let embd = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`**     BİLDİRİ**`)
        .setDescription(`__${args[1]}ADET TOKEN SATILDI__.`)
        .setFooter(`FİYAT:${satiş}TL`)
        message.channel.send(embd);
    }
    else
    {
      let embd = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("envanter deki token sayısından fazla token satmaya çalıştınız");
      message.channel.send(embd);
    } 
    }
    }
    }
  else
  {
    message.channel.send(`> **BÖYLE BİR ÖĞE YOK**`);
  } 
  } 
  }
    } 
else
{
message.channel.send(`> BU OYUNLAR SADECE BOTUN OYUN KANALINDA KULLANMAK İÇİN AYARLANDI`);
} 
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sat"],
  permLevel: 0,
};

exports.help = {
  name: "sold",
  description: "",
  usage: "",
};