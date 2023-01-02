const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const meh = new db.table("ilh");
const translate = require("node-google-translate-skidz");
const dil = {
  ab: "Abhazca",
  aa: "Afar Dili",
  af: "Afrika Dili",
  de: "Almanca",
  am: "Amhara Dili",
  ar: "Arapça",
  an: "Aragonca",
  sq: "Arnavutça",
  as: "Assam Dili",
  ay: "Aymara Dili",
  az: "Azerice",
  eu: "Baskça",
  ba: "Başkurtça",
  bn: "Bengal Dili",
  be: "Beyaz Rusça",
  bh: "Biharice",
  my: "Birmanca",
  br: "Bretonca",
  bg: "Bulgarca",
  dz: "Butanca",
  jv: "Cava Dili (Javacıları görelim)",
  cs: "Çekçe",
  zh: "Çince",
  da: "Danimarkaca",
  id: "Endonezya Dili",
  in: "Endonezya Dili",
  hy: "Ermenice",
  eo: "Esperanto Dili",
  et: "Estonca",
  fo: "Faroece",
  fa: "Farsça",
  fj: "Fijice",
  fi: "Fince",
  nl: "Flemenkçe",
  fr: "Fransızca",
  fy: "Frizye Dili",
  gl: "Galiçya Dili",
  cy: "Galce",
  gd: "Galce (İskoç)",
  gv: "Galce (Manx)",
  kl: "Grönlandca",
  gn: "Guarani Dili",
  gu: "Gucerat Dili",
  ka: "Gürcüce",
  ht: "Haiti Dili",
  ha: "Hausa Dili",
  hr: "Hırvatça",
  hi: "Hintçe",
  iu: "Inuktitut Dili",
  he: "İbranice",
  iw: "İbranice",
  io: "İdo Dili",
  en: "İngilizce",
  ik: "İnupiakça",
  ga: "İrlanda Dili",
  es: "İspanyolca",
  sv: "İsveçce",
  it: "İtalyanca",
  is: "İzlandaca",
  ja: "Japonca",
  km: "Kamboçya Dili",
  kn: "Kannada Dili",
  ca: "Katalanca",
  kk: "Kazakça",
  qu: "Keçuva Dili",
  ks: "Keşmirce",
  ky: "Kırgızca",
  rw: "Kinyarvanda Dili",
  rn: "Kirundi Dili",
  ko: "Korece",
  co: "Korsika Dili",
  ku: "Kürtçe",
  la: "Latince",
  lv: "Letonca",
  li: "Limburgca",
  ln: "Lingala Dili",
  lt: "Litvanca",
  lo: "Litvan Dili",
  hu: "Macarca",
  mg: "Madagaskar Dili",
  mk: "Makedonca",
  ms: "Malay Dili",
  ml: "Malayalam Dili",
  mt: "Malta Dili",
  mi: "Maori Dili",
  mr: "Marathi Dili",
  mo: "Moldovca",
  mn: "Moğolca",
  na: "Nauru Dili",
  ne: "Nepal Dili",
  no: "Norveçce",
  oc: "Oksitan Dili",
  or: "Oriya Dili",
  om: "Oromo Dili",
  uz: "Özbekçe",
  bi: "Papua Yeni Ginece",
  pa: "Pencap Dili",
  ps: "Peştuca",
  pl: "Polonyaca",
  pt: "Portekizce",
  rm: "Romansça",
  ro: "Romence",
  ru: "Rusça",
  sm: "Samoa Dili",
  sg: "Sangro",
  sa: "Sanskritçe",
  tn: "Setsvana Dili",
  si: "Seylanca",
  sn: "Shona Dili",
  sr: "Sırpça",
  sh: "Sırp Hırvatçası",
  sd: "Sindçe",
  ss: "Siswati Dili",
  ii: "Sişuan Yi",
  st: "Soto Dili",
  sk: "Slovakça",
  sl: "Slovence",
  so: "Somali Dili",
  su: "Sundanca",
  sw: "Svahili Dili",
  tg: "Tacikçe",
  tl: "Tagalog Dili",
  ta: "Tamilce",
  tt: "Tatarca",
  th: "Tayca",
  te: "Telugu Dili",
  bo: "Tibetçe",
  ti: "Tigrinya Dili",
  ts: "Tsonga Dili",
  tr: "Türkçe",
  tk: "Türkmence",
  tw: "Tvi Dili",
  uk: "Ukraynaca",
  ur: "Urdu Dili",
  ug: "Uygurca",
  vi: "Vietnamca",
  vo: "Volapük Dili",
  wo: "Volof Dili",
  wa: "Wallon Dili",
  yi: "Yidce",
  ji: "Yidce",
  yo: "Yoruba Dili",
  xh: "Zosa Dili",
};
exports.run = async (client, message, args) => {
  var lan = meh.get(`Dil_${message.guild.id}`);

  translate({
    text: "bu komutlar sadece botun komut kanalında kullanılır",
    source: "tr",
    target: lan,
  }).then((result7) => {
    if (
      message.channel.id == meh.get(`Komutkanal_${message.guild.id}`) ||
      message.channel.id == "1015955561004683374"
    ) {
      translate({
        text: "BU KOMUTU SADECE SUNUCU SAHİBİ KOLLANABİLİR",
        source: "tr",
        target: lan,
      }).then((result2) => {
        if (message.author.id != message.guild.owner.id)
          return message.channel.send(`> ${result2.translation}`);
        translate({
          text: "BU DİL HİZMET DIŞI",
          source: "tr",
          target: lan,
        }).then((result3) => {
          translate({
            text: "lütfen geçerli bir dil yazın! Dillere",
            source: "tr",
            target: lan,
          }).then((result4) => {
            translate({
              text: "buradan",
              source: "tr",
              target: lan,
            }).then((result5) => {
              translate({
                text: "bakabilirsin",
                source: "tr",
                target: lan,
              }).then((result6) => {
                var lang = args[0];
                if (!lang) {
                  const embed = new Discord.MessageEmbed()
                    .setDescription(
                      `${result4.translation} [${result5.translation}](https://www.deepbilgi.com/tum-ulkelerin-iso-dil-kodlari.html) ${result6.translation}.`
                    )
                    .setColor("RED")
                    .setTimestamp();
                  message.channel.send({ embed });
                  return;
                }
                translate({
                  text: "dil çevirildi <:tik:991946063458086992>",
                  source: "tr",
                  target: lang,
                })
                  .then((result) => {
                    if (dil[args[0]] === undefined) {
                      const embed = new Discord.MessageEmbed()
                        .setDescription(`${result3.translation}`)
                        .setColor("RED")
                        .setTimestamp();
                      message.channel.send({ embed });
                      return;
                    }
                    let embed = new Discord.MessageEmbed()
                      .setDescription(`${result.translation}`)
                      .setColor("GREEN")
                      .setTimestamp();
                    message.channel.send({ embed });
                    meh.set(`Dil_${message.guild.id}`, args[0]);
                  })
                  .catch((err) => {
                    const embed = new Discord.MessageEmbed()
                      .setDescription(`${result3.translation}`)
                      .setColor("RED")
                      .setTimestamp();
                    message.channel.send({ embed });
                    return;
                  });
              });
            });
          });
        });
      });
    } else {
      message.channel.send(
        `> ${result7.translation} <#${meh.get(
          `Komutkanal_${message.guild.id}`
        )}>`
      );
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["set_language"],
  permLevel: 0,
};

exports.help = {
  name: "dil_ayarla",
  description: "dil",
  usage: "dil",
};
