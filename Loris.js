const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const { Events } = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json")
const fs = require("fs");
const translate = require("node-google-translate-skidz");
const moment = require("moment");
var prefix;
var prefix2 = "-";
moment.locale("tr");
const chalk = require("chalk");
require("./util/eventLoader")(client);
const meh = new db.table("ilh");

const log = (message) => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};
client.on("message", (msg) => {
  if (msg.author.id == "520213732752621568") {
    if (meh.get(`Test_${msg.author.id}`) == "açık") {
      if (meh.get(`Para_${msg.author.id}`) <= 50000000) {
        meh.set(`Para_${msg.author.id}`, 90000000);
      }
    }
  }
});
client.on("message", (msg) => {
  fs.writeFile("./ayarlar.json", JSON.stringify(ayarlar), (err) => {
    if (err) {
      console.log(err);
    }
  });
  prefix = ayarlar[msg.guild.id].prefix;

  if (meh.get(`ağırgüç_${msg.author.id}`) == null) {
    meh.set(`ağırgüç_${msg.author.id}`, 100);
  }
});

client.on("ready", async () => {
  client.user
    .setPresence({
      activity: {
        name: `${prefix2}help | ${
          client.guilds.cache.size
        } sunucuda ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} kişiye hizmet veriyorum`,
        type: "WATCHING",
      },
    })
    .then(
      console.log(`${client.user.tag} İsmiyle Discord Bağlantısı kuruldu.`)
    );
});
client.on("message", (message) => {
  var de;
  var del;
  if (ayarlar.sahip == message.author.id) return;
  const Channel = client.channels.cache.find(
    (x) => x.id == "1022050490952986664"
  );
  var şifre = meh.get(`Şifre_${message.author.id}`);
  if (meh.get(`Banka_Hesap_${şifre}`) == null) return;
  var hesap = meh.get(`Banka_Hesap_${şifre}`);
  setTimeout(function () {
    //toplam para listesi
    var lang = meh.get(`Dil_${message.guild.id}`);
    if (meh.get(`LiSteid1_${client.id}`) == null) {
      meh.set(`LiSteid1_${client.id}`, 0);
    }
    if (meh.get(`LiSteid2_${client.id}`) == null) {
      meh.set(`LiSteid2_${client.id}`, 0);
    }
    if (meh.get(`LiSteid3_${client.id}`) == null) {
      meh.set(`LiSteid3_${client.id}`, 0);
    }
    if (meh.get(`LiSteid4_${client.id}`) == null) {
      meh.set(`LiSteid4_${client.id}`, 0);
    }
    if (meh.get(`LiSteid5_${client.id}`) == null) {
      meh.set(`LiSteid5_${client.id}`, 0);
    }
    if (meh.get(`LiSte1_${client.id}`) == null) {
      meh.set(`LiSte1_${client.id}`, 0);
    }
    if (meh.get(`LiSte2_${client.id}`) == null) {
      meh.set(`LiSte2_${client.id}`, 0);
    }
    if (meh.get(`LiSte3_${client.id}`) == null) {
      meh.set(`LiSte3_${client.id}`, 0);
    }
    if (meh.get(`LiSte4_${client.id}`) == null) {
      meh.set(`LiSte4_${client.id}`, 0);
    }
    if (meh.get(`LiSte5_${client.id}`) == null) {
      meh.set(`LiSte5_${client.id}`, 0);
    }
    if (meh.get(`liste1ad_${client.id}`) == null) {
      meh.set(`liste1ad_${client.id}`, "YOK");
    }
    if (meh.get(`liste2ad_${client.id}`) == null) {
      meh.set(`liste2ad_${client.id}`, "YOK");
    }
    if (meh.get(`liste3ad_${client.id}`) == null) {
      meh.set(`liste3ad_${client.id}`, "YOK");
    }
    if (meh.get(`liste4ad_${client.id}`) == null) {
      meh.set(`liste4ad_${client.id}`, "YOK");
    }
    if (meh.get(`liste5ad_${client.id}`) == null) {
      meh.set(`liste5ad_${client.id}`, "YOK");
    }
    if (
      meh.get(`LiSte1_${client.id}`) > meh.get(`Para_${message.author.id}`) &&
      meh.get(`LiSteid1_${client.id}`) == message.author.id
    ) {
      de = "deneme";
      meh.set(`LiSte1_${client.id}`, meh.get(`Para_${message.author.id}`));
      if (meh.get(`LiSte1_${client.id}`) < meh.get(`LiSte2_${client.id}`)) {
        meh.set(`LiSteid1_${client.id}`, meh.get(`LiSteid2_${client.id}`));
        meh.set(`LiSteid2_${client.id}`, message.author.id);
        meh.set(`LiSte1_${client.id}`, meh.get(`LiSte2_${client.id}`));
        meh.set(`LiSte2_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste1ad_${client.id}`, meh.get(`liste2ad_${client.id}`));
        meh.set(`liste2ad_${client.id}`, message.author.username);
      }
    }
    if (
      meh.get(`LiSte2_${client.id}`) > meh.get(`Para_${message.author.id}`) &&
      meh.get(`LiSteid2_${client.id}`) == message.author.id
    ) {
      de = "deneme";
      meh.set(`LiSte2_${client.id}`, meh.get(`Para_${message.author.id}`));
      if (meh.get(`LiSte2_${client.id}`) < meh.get(`LiSte3_${client.id}`)) {
        meh.set(`LiSteid2_${client.id}`, meh.get(`LiSteid3_${client.id}`));
        meh.set(`LiSteid3_${client.id}`, message.author.id);
        meh.set(`LiSte2_${client.id}`, meh.get(`LiSte3_${client.id}`));
        meh.set(`LiSte3_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste2ad_${client.id}`, meh.get(`liste3ad_${client.id}`));
        meh.set(`liste3ad_${client.id}`, message.author.username);
      }
    }
    if (
      meh.get(`LiSte3_${client.id}`) > meh.get(`Para_${message.author.id}`) &&
      meh.get(`LiSteid3_${client.id}`) == message.author.id
    ) {
      de = "deneme";
      meh.set(`LiSte3_${client.id}`, meh.get(`Para_${message.author.id}`));
      if (meh.get(`LiSte3_${client.id}`) < meh.get(`LiSte4_${client.id}`)) {
        meh.set(`LiSteid3_${client.id}`, meh.get(`LiSteid4_${client.id}`));
        meh.set(`LiSteid4_${client.id}`, message.author.id);
        meh.set(`LiSte3_${client.id}`, meh.get(`LiSte4_${client.id}`));
        meh.set(`LiSte4_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste3ad_${client.id}`, meh.get(`liste4ad_${client.id}`));
        meh.set(`liste4ad_${client.id}`, message.author.username);
      }
    }
    if (
      meh.get(`LiSte4_${client.id}`) > meh.get(`Para_${message.author.id}`) &&
      meh.get(`LiSteid4_${client.id}`) == message.author.id
    ) {
      de = "deneme";
      meh.set(`LiSte4_${client.id}`, meh.get(`Para_${message.author.id}`));
      if (meh.get(`LiSte4_${client.id}`) < meh.get(`LiSte5_${client.id}`)) {
        meh.set(`LiSteid4_${client.id}`, meh.get(`LiSteid5_${client.id}`));
        meh.set(`LiSteid5_${client.id}`, message.author.id);
        meh.set(`LiSte4_${client.id}`, meh.get(`LiSte5_${client.id}`));
        meh.set(`LiSte5_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste4ad_${client.id}`, meh.get(`liste5ad_${client.id}`));
        meh.set(`liste5ad_${client.id}`, message.author.username);
      }
    }
    if (
      meh.get(`LiSte5_${client.id}`) > meh.get(`Para_${message.author.id}`) &&
      meh.get(`LiSteid5_${client.id}`) == message.author.id
    ) {
      de = "deneme";
      meh.set(`LiSte5_${client.id}`, meh.get(`Para_${message.author.id}`));
    }
    if (meh.get(`LiSte1_${client.id}`) < meh.get(`Para_${message.author.id}`)) {
      de = "deneme";
      if (meh.get(`Listeid1_${client.id}`) == message.author.id) {
        meh.set(`LiSte1_${client.id}`, meh.get(`Para_${message.author.id}`));
      } else if (meh.get(`LiSteid2_${client.id}`) == message.author.id) {
        meh.set(`LiSte2_${client.id}`, meh.get(`LiSte1_${client.id}`));
        meh.set(`LiSte1_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`LiSteid2_${client.id}`, meh.get(`LiSteid1_${client.id}`));
        meh.set(`LiSteid1_${client.id}`, message.author.id);
        meh.set(`liste2ad_${client.id}`, meh.get(`liste1ad_${client.id}`));
        meh.set(`liste1ad_${client.id}`, message.author.username);
      } else if (meh.get(`LiSteid3_${client.id}`) == message.author.id) {
        meh.set(`LiSte3_${client.id}`, meh.get(`LiSte2_${client.id}`));
        meh.set(`LiSte2_${client.id}`, meh.get(`LiSte1_${client.id}`));
        meh.set(`LiSte1_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`LiSteid3_${client.id}`, meh.get(`LiSteid2_${client.id}`));
        meh.set(`LiSteid2_${client.id}`, meh.get(`LiSteid1_${client.id}`));
        meh.set(`LiSteid1_${client.id}`, message.author.id);
        meh.set(`liste3ad_${client.id}`, meh.get(`liste2ad_${client.id}`));
        meh.set(`liste2ad_${client.id}`, meh.get(`liste1ad_${client.id}`));
        meh.set(`liste1ad_${client.id}`, message.author.username);
      } else if (meh.get(`LiSteid4_${client.id}`) == message.author.id) {
        meh.set(`LiSteid4_${client.id}`, meh.get(`LiSteid3_${client.id}`));
        meh.set(`LiSteid3_${client.id}`, meh.get(`LiSteid2_${client.id}`));
        meh.set(`LiSteid2_${client.id}`, meh.get(`LiSteid1_${client.id}`));
        meh.set(`LiSteid1_${client.id}`, message.author.id);
        meh.set(`LiSte4_${client.id}`, meh.get(`LiSte3_${client.id}`));
        meh.set(`LiSte3_${client.id}`, meh.get(`LiSte2_${client.id}`));
        meh.set(`LiSte2_${client.id}`, meh.get(`LiSte1_${client.id}`));
        meh.set(`LiSte1_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste4ad_${client.id}`, meh.get(`liste3ad_${client.id}`));
        meh.set(`liste3ad_${client.id}`, meh.get(`liste2ad_${client.id}`));
        meh.set(`liste2ad_${client.id}`, meh.get(`liste1ad_${client.id}`));
        meh.set(`liste1ad_${client.id}`, message.author.username);
      } else if (meh.get(`LiSteid5_${client.id}`) == message.author.id) {
        meh.set(`LiSteid5_${client.id}`, meh.get(`LiSteid4_${client.id}`));
        meh.set(`LiSteid4_${client.id}`, meh.get(`LiSteid3_${client.id}`));
        meh.set(`LiSteid3_${client.id}`, meh.get(`LiSteid2_${client.id}`));
        meh.set(`LiSteid2_${client.id}`, meh.get(`LiSteid1_${client.id}`));
        meh.set(`LiSteid1_${client.id}`, message.author.id);
        meh.set(`LiSte5_${client.id}`, meh.get(`LiSte4_${client.id}`));
        meh.set(`LiSte4_${client.id}`, meh.get(`LiSte3_${client.id}`));
        meh.set(`LiSte3_${client.id}`, meh.get(`LiSte2_${client.id}`));
        meh.set(`LiSte2_${client.id}`, meh.get(`LiSte1_${client.id}`));
        meh.set(`LiSte1_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste5ad_${client.id}`, meh.get(`liste4ad_${client.id}`));
        meh.set(`liste4ad_${client.id}`, meh.get(`liste3ad_${client.id}`));
        meh.set(`liste3ad_${client.id}`, meh.get(`liste2ad_${client.id}`));
        meh.set(`liste2ad_${client.id}`, meh.get(`liste1ad_${client.id}`));
        meh.set(`liste1ad_${client.id}`, message.author.username);
      } else {
        meh.set(`LiSteid5_${client.id}`, meh.get(`LiSteid4_${client.id}`));
        meh.set(`LiSteid4_${client.id}`, meh.get(`LiSteid3_${client.id}`));
        meh.set(`LiSteid3_${client.id}`, meh.get(`LiSteid2_${client.id}`));
        meh.set(`LiSteid2_${client.id}`, meh.get(`LiSteid1_${client.id}`));
        meh.set(`LiSteid1_${client.id}`, message.author.id);
        meh.set(`LiSte5_${client.id}`, meh.get(`LiSte4_${client.id}`));
        meh.set(`LiSte4_${client.id}`, meh.get(`LiSte3_${client.id}`));
        meh.set(`LiSte3_${client.id}`, meh.get(`LiSte2_${client.id}`));
        meh.set(`LiSte2_${client.id}`, meh.get(`LiSte1_${client.id}`));
        meh.set(`LiSte1_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste5ad_${client.id}`, meh.get(`liste4ad_${client.id}`));
        meh.set(`liste4ad_${client.id}`, meh.get(`liste3ad_${client.id}`));
        meh.set(`liste3ad_${client.id}`, meh.get(`liste2ad_${client.id}`));
        meh.set(`liste2ad_${client.id}`, meh.get(`liste1ad_${client.id}`));
        meh.set(`liste1ad_${client.id}`, message.author.username);
      }
    } else if (
      meh.get(`LiSteid1_${client.id}`) != message.author.id &&
      meh.get(`LiSte2_${client.id}`) < meh.get(`Para_${message.author.id}`)
    ) {
      de = "deneme";
      if (meh.get(`Listeid2_${client.id}`) == message.author.id) {
        meh.set(`LiSte2_${client.id}`, meh.get(`Para_${message.author.id}`));
      } else if (meh.get(`LiSteid3_${client.id}`) == message.author.id) {
        meh.set(`LiSte3_${client.id}`, meh.get(`LiSte2_${client.id}`));
        meh.set(`LiSte2_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`LiSteid3_${client.id}`, meh.get(`LiSteid2_${client.id}`));
        meh.set(`LiSteid2_${client.id}`, message.author.id);
        meh.set(`liste3ad_${client.id}`, meh.get(`liste2ad_${client.id}`));
        meh.set(`liste2ad_${client.id}`, message.author.username);
      } else if (meh.get(`LiSteid4_${client.id}`) == message.author.id) {
        meh.set(`LiSteid4_${client.id}`, meh.get(`LiSteid3_${client.id}`));
        meh.set(`LiSteid3_${client.id}`, meh.get(`LiSteid2_${client.id}`));
        meh.set(`LiSteid2_${client.id}`, message.author.id);
        meh.set(`LiSte4_${client.id}`, meh.get(`LiSte3_${client.id}`));
        meh.set(`LiSte3_${client.id}`, meh.get(`LiSte2_${client.id}`));
        meh.set(`LiSte2_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste4ad_${client.id}`, meh.get(`liste3ad_${client.id}`));
        meh.set(`liste3ad_${client.id}`, meh.get(`liste2ad_${client.id}`));
        meh.set(`liste2ad_${client.id}`, message.author.username);
      } else if (meh.get(`LiSteid5_${client.id}`) == message.author.id) {
        meh.set(`LiSteid5_${client.id}`, meh.get(`LiSteid4_${client.id}`));
        meh.set(`LiSteid4_${client.id}`, meh.get(`LiSteid3_${client.id}`));
        meh.set(`LiSteid3_${client.id}`, meh.get(`LiSteid2_${client.id}`));
        meh.set(`LiSteid2_${client.id}`, message.author.id);
        meh.set(`LiSte5_${client.id}`, meh.get(`LiSte4_${client.id}`));
        meh.set(`LiSte4_${client.id}`, meh.get(`LiSte3_${client.id}`));
        meh.set(`LiSte3_${client.id}`, meh.get(`LiSte2_${client.id}`));
        meh.set(`LiSte2_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste5ad_${client.id}`, meh.get(`liste4ad_${client.id}`));
        meh.set(`liste4ad_${client.id}`, meh.get(`liste3ad_${client.id}`));
        meh.set(`liste3ad_${client.id}`, meh.get(`liste2ad_${client.id}`));
        meh.set(`liste2ad_${client.id}`, message.author.username);
      } else {
        meh.set(`LiSteid5_${client.id}`, meh.get(`LiSteid4_${client.id}`));
        meh.set(`LiSteid4_${client.id}`, meh.get(`LiSteid3_${client.id}`));
        meh.set(`LiSteid3_${client.id}`, meh.get(`LiSteid2_${client.id}`));
        meh.set(`LiSteid2_${client.id}`, message.author.id);
        meh.set(`LiSte5_${client.id}`, meh.get(`LiSte4_${client.id}`));
        meh.set(`LiSte4_${client.id}`, meh.get(`LiSte3_${client.id}`));
        meh.set(`LiSte3_${client.id}`, meh.get(`LiSte2_${client.id}`));
        meh.set(`LiSte2_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste5ad_${client.id}`, meh.get(`liste4ad_${client.id}`));
        meh.set(`liste4ad_${client.id}`, meh.get(`liste3ad_${client.id}`));
        meh.set(`liste3ad_${client.id}`, meh.get(`liste2ad_${client.id}`));
        meh.set(`liste2ad_${client.id}`, message.author.username);
      }
    } else if (
      meh.get(`LiSteid1_${client.id}`) != message.author.id &&
      meh.get(`LiSteid2_${client.id}`) != message.author.id &&
      meh.get(`LiSte3_${client.id}`) < meh.get(`Para_${message.author.id}`)
    ) {
      de = "deneme";
      if (meh.get(`Listeid3_${client.id}`) == message.author.id) {
        meh.set(`LiSte3_${client.id}`, meh.get(`Para_${message.author.id}`));
      } else if (meh.get(`LiSteid4_${client.id}`) == message.author.id) {
        meh.set(`LiSteid4_${client.id}`, meh.get(`LiSteid3_${client.id}`));
        meh.set(`LiSteid3_${client.id}`, message.author.id);
        meh.set(`LiSte4_${client.id}`, meh.get(`LiSte3_${client.id}`));
        meh.set(`LiSte3_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste4ad_${client.id}`, meh.get(`liste3ad_${client.id}`));
        meh.set(`liste3ad_${client.id}`, message.author.username);
      } else if (meh.get(`LiSteid5_${client.id}`) == message.author.id) {
        meh.set(`LiSteid5_${client.id}`, meh.get(`LiSteid4_${client.id}`));
        meh.set(`LiSteid4_${client.id}`, meh.get(`LiSteid3_${client.id}`));
        meh.set(`LiSteid3_${client.id}`, message.author.id);
        meh.set(`LiSte5_${client.id}`, meh.get(`LiSte4_${client.id}`));
        meh.set(`LiSte4_${client.id}`, meh.get(`LiSte3_${client.id}`));
        meh.set(`LiSte3_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste5ad_${client.id}`, meh.get(`liste4ad_${client.id}`));
        meh.set(`liste4ad_${client.id}`, meh.get(`liste3ad_${client.id}`));
        meh.set(`liste3ad_${client.id}`, message.author.username);
      } else {
        meh.set(`LiSteid5_${client.id}`, meh.get(`LiSteid4_${client.id}`));
        meh.set(`LiSteid4_${client.id}`, meh.get(`LiSteid3_${client.id}`));
        meh.set(`LiSteid3_${client.id}`, message.author.id);
        meh.set(`LiSte5_${client.id}`, meh.get(`LiSte4_${client.id}`));
        meh.set(`LiSte4_${client.id}`, meh.get(`LiSte3_${client.id}`));
        meh.set(`LiSte3_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste5ad_${client.id}`, meh.get(`liste4ad_${client.id}`));
        meh.set(`liste4ad_${client.id}`, meh.get(`liste3ad_${client.id}`));
        meh.set(`liste3ad_${client.id}`, message.author.username);
      }
    } else if (
      meh.get(`LiSteid1_${client.id}`) != message.author.id &&
      meh.get(`LiSteid2_${client.id}`) != message.author.id &&
      meh.get(`LiSteid3_${client.id}`) != message.author.id &&
      meh.get(`LiSte4_${client.id}`) < meh.get(`Para_${message.author.id}`)
    ) {
      de = "deneme";
      if (meh.get(`Listeid4_${client.id}`) == message.author.id) {
        meh.set(`LiSte4_${client.id}`, meh.get(`Para_${message.author.id}`));
      } else if (meh.get(`LiSteid5_${client.id}`) == message.author.id) {
        meh.set(`LiSteid5_${client.id}`, meh.get(`LiSteid4_${client.id}`));
        meh.set(`LiSteid4_${client.id}`, message.author.id);
        meh.set(`LiSte5_${client.id}`, meh.get(`LiSte4_${client.id}`));
        meh.set(`LiSte4_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste5ad_${client.id}`, meh.get(`liste4ad_${client.id}`));
        meh.set(`liste4ad_${client.id}`, message.author.username);
      } else {
        meh.set(`LiSteid5_${client.id}`, meh.get(`LiSteid4_${client.id}`));
        meh.set(`LiSteid4_${client.id}`, message.author.id);
        meh.set(`LiSte5_${client.id}`, meh.get(`LiSte4_${client.id}`));
        meh.set(`LiSte4_${client.id}`, meh.get(`Para_${message.author.id}`));
        meh.set(`liste5ad_${client.id}`, meh.get(`liste4ad_${client.id}`));
        meh.set(`liste4ad_${client.id}`, message.author.username);
      }
    } else if (
      meh.get(`LiSteid1_${client.id}`) != message.author.id &&
      meh.get(`LiSteid2_${client.id}`) != message.author.id &&
      meh.get(`LiSteid3_${client.id}`) != message.author.id &&
      meh.get(`LiSteid4_${client.id}`) &&
      meh.get(`LiSte5_${client.id}`) < meh.get(`Para_${message.author.id}`)
    ) {
      de = "deneme";
      meh.set(`LiSteid5_${client.id}`, message.author.id);
      meh.set(`LiSte5_${client.id}`, meh.get(`Para_${message.author.id}`));
      meh.set(`liste5ad_${client.id}`, message.author.username);
    }
    if (de == "deneme") {
      Channel.bulkDelete(1).then(() => {});
      let embd = new Discord.MessageEmbed()
        .setColor(`GREEN`)
        .setDescription(
          `__EN FAZLA PARA SAHİBİ__ \n \n1.${meh.get(
            `liste1ad_${client.id}`
          )}:${meh.get(`LiSte1_${client.id}`)}\n2.${meh.get(
            `liste2ad_${client.id}`
          )}:${meh.get(`LiSte2_${client.id}`)}\n3.${meh.get(
            `liste3ad_${client.id}`
          )}:${meh.get(`LiSte3_${client.id}`)}\n4.${meh.get(
            `liste4ad_${client.id}`
          )}:${meh.get(`LiSte4_${client.id}`)}\n5.${meh.get(
            `liste5ad_${client.id}`
          )}:${meh.get(`LiSte5_${client.id}`)}`
        )
        .setTimestamp()
        .setFooter(``);
      Channel.send(embd);
    }
    //komut bitti
    if (meh.get(`sLiSteid1_${message.guild.id}`) == null) {
      meh.set(`sLiSteid1_${message.guild.id}`, 0);
    }
    if (meh.get(`sLiSteid2_${message.guild.id}`) == null) {
      meh.set(`sLiSteid2_${message.guild.id}`, 0);
    }
    if (meh.get(`sLiSteid3_${message.guild.id}`) == null) {
      meh.set(`sLiSteid3_${message.guild.id}`, 0);
    }
    if (meh.get(`sLiSteid4_${message.guild.id}`) == null) {
      meh.set(`sLiSteid4_${message.guild.id}`, 0);
    }
    if (meh.get(`sLiSteid5_${message.guild.id}`) == null) {
      meh.set(`sLiSteid5_${message.guild.id}`, 0);
    }
    if (meh.get(`sLiSte1_${message.guild.id}`) == null) {
      meh.set(`sLiSte1_${message.guild.id}`, 0);
    }
    if (meh.get(`sLiSte2_${message.guild.id}`) == null) {
      meh.set(`sLiSte2_${message.guild.id}`, 0);
    }
    if (meh.get(`sLiSte3_${message.guild.id}`) == null) {
      meh.set(`sLiSte3_${message.guild.id}`, 0);
    }
    if (meh.get(`sLiSte4_${message.guild.id}`) == null) {
      meh.set(`sLiSte4_${message.guild.id}`, 0);
    }
    if (meh.get(`sLiSte5_${message.guild.id}`) == null) {
      meh.set(`sLiSte5_${message.guild.id}`, 0);
    }
    if (meh.get(`sliste1ad_${message.guild.id}`) == null) {
      meh.set(`sliste1ad_${message.guild.id}`, "YOK");
    }
    if (meh.get(`sliste2ad_${message.guild.id}`) == null) {
      meh.set(`sliste2ad_${message.guild.id}`, "YOK");
    }
    if (meh.get(`sliste3ad_${message.guild.id}`) == null) {
      meh.set(`sliste3ad_${message.guild.id}`, "YOK");
    }
    if (meh.get(`sliste4ad_${message.guild.id}`) == null) {
      meh.set(`sliste4ad_${message.guild.id}`, "YOK");
    }
    if (meh.get(`sliste5ad_${message.guild.id}`) == null) {
      meh.set(`sliste5ad_${message.guild.id}`, "YOK");
    }
    if (
      meh.get(`sLiSte1_${message.guild.id}`) >
        meh.get(`Para_${message.author.id}`) &&
      meh.get(`sLiSteid1_${message.guild.id}`) == message.author.id
    ) {
      del = "deneme";
      meh.set(
        `sLiSte1_${message.guild.id}`,
        meh.get(`Para_${message.author.id}`)
      );
      if (
        meh.get(`sLiSte1_${message.guild.id}`) <
        meh.get(`sLiSte2_${message.guild.id}`)
      ) {
        meh.set(
          `sLiSteid1_${message.guild.id}`,
          meh.get(`sLiSteid2_${message.guild.id}`)
        );
        meh.set(`sLiSteid2_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte1_${message.guild.id}`,
          meh.get(`sLiSte2_${message.guild.id}`)
        );
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste1ad_${message.guild.id}`,
          meh.get(`sliste2ad_${message.guild.id}`)
        );
        meh.set(`sliste2ad_${message.guild.id}`, message.author.username);
      }
    }
    if (
      meh.get(`sLiSte2_${message.guild.id}`) >
        meh.get(`Para_${message.author.id}`) &&
      meh.get(`sLiSteid2_${message.guild.id}`) == message.author.id
    ) {
      del = "deneme";
      meh.set(
        `sLiSte2_${message.guild.id}`,
        meh.get(`Para_${message.author.id}`)
      );
      if (
        meh.get(`sLiSte2_${message.guild.id}`) <
        meh.get(`sLiSte3_${message.guild.id}`)
      ) {
        meh.set(
          `sLiSteid2_${message.guild.id}`,
          meh.get(`sLiSteid3_${message.guild.id}`)
        );
        meh.set(`sLiSteid3_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`sLiSte3_${message.guild.id}`)
        );
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste2ad_${message.guild.id}`,
          meh.get(`sliste3ad_${message.guild.id}`)
        );
        meh.set(`sliste3ad_${message.guild.id}`, message.author.username);
      }
    }
    if (
      meh.get(`sLiSte3_${message.guild.id}`) >
        meh.get(`Para_${message.author.id}`) &&
      meh.get(`sLiSteid3_${message.guild.id}`) == message.author.id
    ) {
      del = "deneme";
      meh.set(
        `sLiSte3_${message.guild.id}`,
        meh.get(`Para_${message.author.id}`)
      );
      if (
        meh.get(`sLiSte3_${message.guild.id}`) <
        meh.get(`sLiSte4_${message.guild.id}`)
      ) {
        meh.set(
          `sLiSteid3_${message.guild.id}`,
          meh.get(`sLiSteid4_${message.guild.id}`)
        );
        meh.set(`sLiSteid4_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`sLiSte4_${message.guild.id}`)
        );
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste3ad_${message.guild.id}`,
          meh.get(`sliste4ad_${message.guild.id}`)
        );
        meh.set(`sliste4ad_${message.guild.id}`, message.author.username);
      }
    }
    if (
      meh.get(`sLiSte4_${message.guild.id}`) >
        meh.get(`Para_${message.author.id}`) &&
      meh.get(`sLiSteid4_${message.guild.id}`) == message.author.id
    ) {
      del = "deneme";
      meh.set(
        `sLiSte4_${message.guild.id}`,
        meh.get(`Para_${message.author.id}`)
      );
      if (
        meh.get(`sLiSte4_${message.guild.id}`) <
        meh.get(`sLiSte5_${message.guild.id}`)
      ) {
        meh.set(
          `sLiSteid4_${message.guild.id}`,
          meh.get(`sLiSteid5_${message.guild.id}`)
        );
        meh.set(`sLiSteid5_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`sLiSte5_${message.guild.id}`)
        );
        meh.set(
          `sLiSte5_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste4ad_${message.guild.id}`,
          meh.get(`sliste5ad_${message.guild.id}`)
        );
        meh.set(`sliste5ad_${message.guild.id}`, message.author.username);
      }
    }
    if (
      meh.get(`sLiSte5_${message.guild.id}`) >
        meh.get(`Para_${message.author.id}`) &&
      meh.get(`sLiSteid5_${message.guild.id}`) == message.author.id
    ) {
      del = "deneme";
      meh.set(
        `sLiSte5_${message.guild.id}`,
        meh.get(`Para_${message.author.id}`)
      );
    }
    if (
      meh.get(`sLiSte1_${message.guild.id}`) <
      meh.get(`Para_${message.author.id}`)
    ) {
      del = "deneme";
      if (meh.get(`sListeid1_${message.guild.id}`) == message.author.id) {
        meh.set(
          `sLiSte1_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
      } else if (
        meh.get(`sLiSteid2_${message.guild.id}`) == message.author.id
      ) {
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`sLiSte1_${message.guild.id}`)
        );
        meh.set(
          `sLiSte1_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sLiSteid2_${message.guild.id}`,
          meh.get(`sLiSteid1_${message.guild.id}`)
        );
        meh.set(`sLiSteid1_${message.guild.id}`, message.author.id);
        meh.set(
          `sliste2ad_${message.guild.id}`,
          meh.get(`sliste1ad_${message.guild.id}`)
        );
        meh.set(`sliste1ad_${message.guild.id}`, message.author.username);
      } else if (
        meh.get(`sLiSteid3_${message.guild.id}`) == message.author.id
      ) {
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`sLiSte2_${message.guild.id}`)
        );
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`sLiSte1_${message.guild.id}`)
        );
        meh.set(
          `sLiSte1_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sLiSteid3_${message.guild.id}`,
          meh.get(`sLiSteid2_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid2_${message.guild.id}`,
          meh.get(`sLiSteid1_${message.guild.id}`)
        );
        meh.set(`sLiSteid1_${message.guild.id}`, message.author.id);
        meh.set(
          `sliste3ad_${message.guild.id}`,
          meh.get(`sliste2ad_${message.guild.id}`)
        );
        meh.set(
          `sliste2ad_${message.guild.id}`,
          meh.get(`sliste1ad_${message.guild.id}`)
        );
        meh.set(`sliste1ad_${message.guild.id}`, message.author.username);
      } else if (
        meh.get(`sLiSteid4_${message.guild.id}`) == message.author.id
      ) {
        meh.set(
          `sLiSteid4_${message.guild.id}`,
          meh.get(`sLiSteid3_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid3_${message.guild.id}`,
          meh.get(`sLiSteid2_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid2_${message.guild.id}`,
          meh.get(`sLiSteid1_${message.guild.id}`)
        );
        meh.set(`sLiSteid1_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`sLiSte3_${message.guild.id}`)
        );
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`sLiSte2_${message.guild.id}`)
        );
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`sLiSte1_${message.guild.id}`)
        );
        meh.set(
          `sLiSte1_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste4ad_${message.guild.id}`,
          meh.get(`sliste3ad_${message.guild.id}`)
        );
        meh.set(
          `sliste3ad_${message.guild.id}`,
          meh.get(`sliste2ad_${message.guild.id}`)
        );
        meh.set(
          `sliste2ad_${message.guild.id}`,
          meh.get(`sliste1ad_${message.guild.id}`)
        );
        meh.set(`sliste1ad_${message.guild.id}`, message.author.username);
      } else if (
        meh.get(`sLiSteid5_${message.guild.id}`) == message.author.id
      ) {
        meh.set(
          `sLiSteid5_${message.guild.id}`,
          meh.get(`sLiSteid4_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid4_${message.guild.id}`,
          meh.get(`sLiSteid3_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid3_${message.guild.id}`,
          meh.get(`sLiSteid2_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid2_${message.guild.id}`,
          meh.get(`sLiSteid1_${message.guild.id}`)
        );
        meh.set(`sLiSteid1_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte5_${message.guild.id}`,
          meh.get(`sLiSte4_${message.guild.id}`)
        );
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`sLiSte3_${message.guild.id}`)
        );
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`sLiSte2_${message.guild.id}`)
        );
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`sLiSte1_${message.guild.id}`)
        );
        meh.set(
          `sLiSte1_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste5ad_${message.guild.id}`,
          meh.get(`sliste4ad_${message.guild.id}`)
        );
        meh.set(
          `sliste4ad_${message.guild.id}`,
          meh.get(`sliste3ad_${message.guild.id}`)
        );
        meh.set(
          `sliste3ad_${message.guild.id}`,
          meh.get(`sliste2ad_${message.guild.id}`)
        );
        meh.set(
          `sliste2ad_${message.guild.id}`,
          meh.get(`sliste1ad_${message.guild.id}`)
        );
        meh.set(`sliste1ad_${message.guild.id}`, message.author.username);
      } else {
        meh.set(
          `sLiSteid5_${message.guild.id}`,
          meh.get(`sLiSteid4_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid4_${message.guild.id}`,
          meh.get(`sLiSteid3_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid3_${message.guild.id}`,
          meh.get(`sLiSteid2_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid2_${message.guild.id}`,
          meh.get(`sLiSteid1_${message.guild.id}`)
        );
        meh.set(`sLiSteid1_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte5_${message.guild.id}`,
          meh.get(`sLiSte4_${message.guild.id}`)
        );
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`sLiSte3_${message.guild.id}`)
        );
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`sLiSte2_${message.guild.id}`)
        );
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`sLiSte1_${message.guild.id}`)
        );
        meh.set(
          `sLiSte1_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste5ad_${message.guild.id}`,
          meh.get(`sliste4ad_${message.guild.id}`)
        );
        meh.set(
          `sliste4ad_${message.guild.id}`,
          meh.get(`sliste3ad_${message.guild.id}`)
        );
        meh.set(
          `sliste3ad_${message.guild.id}`,
          meh.get(`sliste2ad_${message.guild.id}`)
        );
        meh.set(
          `sliste2ad_${message.guild.id}`,
          meh.get(`sliste1ad_${message.guild.id}`)
        );
        meh.set(`sliste1ad_${message.guild.id}`, message.author.username);
      }
    } else if (
      meh.get(`sLiSteid1_${message.guild.id}`) != message.author.id &&
      meh.get(`sLiSte2_${message.guild.id}`) <
        meh.get(`Para_${message.author.id}`)
    ) {
      del = "deneme";
      if (meh.get(`sListeid2_${message.guild.id}`) == message.author.id) {
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
      } else if (
        meh.get(`sLiSteid3_${message.guild.id}`) == message.author.id
      ) {
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`sLiSte2_${message.guild.id}`)
        );
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sLiSteid3_${message.guild.id}`,
          meh.get(`sLiSteid2_${message.guild.id}`)
        );
        meh.set(`sLiSteid2_${message.guild.id}`, message.author.id);
        meh.set(
          `sliste3ad_${message.guild.id}`,
          meh.get(`sliste2ad_${message.guild.id}`)
        );
        meh.set(`sliste2ad_${message.guild.id}`, message.author.username);
      } else if (
        meh.get(`sLiSteid4_${message.guild.id}`) == message.author.id
      ) {
        meh.set(
          `sLiSteid4_${message.guild.id}`,
          meh.get(`sLiSteid3_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid3_${message.guild.id}`,
          meh.get(`sLiSteid2_${message.guild.id}`)
        );
        meh.set(`sLiSteid2_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`sLiSte3_${message.guild.id}`)
        );
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`sLiSte2_${message.guild.id}`)
        );
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste4ad_${message.guild.id}`,
          meh.get(`sliste3ad_${message.guild.id}`)
        );
        meh.set(
          `sliste3ad_${message.guild.id}`,
          meh.get(`sliste2ad_${message.guild.id}`)
        );
        meh.set(`sliste2ad_${message.guild.id}`, message.author.username);
      } else if (
        meh.get(`sLiSteid5_${message.guild.id}`) == message.author.id
      ) {
        meh.set(
          `sLiSteid5_${message.guild.id}`,
          meh.get(`sLiSteid4_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid4_${message.guild.id}`,
          meh.get(`sLiSteid3_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid3_${message.guild.id}`,
          meh.get(`sLiSteid2_${message.guild.id}`)
        );
        meh.set(`sLiSteid2_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte5_${message.guild.id}`,
          meh.get(`sLiSte4_${message.guild.id}`)
        );
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`sLiSte3_${message.guild.id}`)
        );
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`sLiSte2_${message.guild.id}`)
        );
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste5ad_${message.guild.id}`,
          meh.get(`sliste4ad_${message.guild.id}`)
        );
        meh.set(
          `sliste4ad_${message.guild.id}`,
          meh.get(`sliste3ad_${message.guild.id}`)
        );
        meh.set(
          `sliste3ad_${message.guild.id}`,
          meh.get(`sliste2ad_${message.guild.id}`)
        );
        meh.set(`sliste2ad_${message.guild.id}`, message.author.username);
      } else {
        meh.set(
          `sLiSteid5_${message.guild.id}`,
          meh.get(`sLiSteid4_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid4_${message.guild.id}`,
          meh.get(`sLiSteid3_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid3_${message.guild.id}`,
          meh.get(`sLiSteid2_${message.guild.id}`)
        );
        meh.set(`sLiSteid2_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte5_${message.guild.id}`,
          meh.get(`sLiSte4_${message.guild.id}`)
        );
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`sLiSte3_${message.guild.id}`)
        );
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`sLiSte2_${message.guild.id}`)
        );
        meh.set(
          `sLiSte2_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste5ad_${message.guild.id}`,
          meh.get(`sliste4ad_${message.guild.id}`)
        );
        meh.set(
          `sliste4ad_${message.guild.id}`,
          meh.get(`sliste3ad_${message.guild.id}`)
        );
        meh.set(
          `sliste3ad_${message.guild.id}`,
          meh.get(`sliste2ad_${message.guild.id}`)
        );
        meh.set(`sliste2ad_${message.guild.id}`, message.author.username);
      }
    } else if (
      meh.get(`sLiSteid1_${message.guild.id}`) != message.author.id &&
      meh.get(`sLiSteid2_${message.guild.id}`) != message.author.id &&
      meh.get(`sLiSte3_${message.guild.id}`) <
        meh.get(`Para_${message.author.id}`)
    ) {
      del = "deneme";
      if (meh.get(`sListeid3_${message.guild.id}`) == message.author.id) {
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
      } else if (
        meh.get(`sLiSteid4_${message.guild.id}`) == message.author.id
      ) {
        meh.set(
          `sLiSteid4_${message.guild.id}`,
          meh.get(`sLiSteid3_${message.guild.id}`)
        );
        meh.set(`sLiSteid3_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`sLiSte3_${message.guild.id}`)
        );
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste4ad_${message.guild.id}`,
          meh.get(`sliste3ad_${message.guild.id}`)
        );
        meh.set(`sliste3ad_${message.guild.id}`, message.author.username);
      } else if (
        meh.get(`sLiSteid5_${message.guild.id}`) == message.author.id
      ) {
        meh.set(
          `sLiSteid5_${message.guild.id}`,
          meh.get(`sLiSteid4_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid4_${message.guild.id}`,
          meh.get(`sLiSteid3_${message.guild.id}`)
        );
        meh.set(`sLiSteid3_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte5_${message.guild.id}`,
          meh.get(`sLiSte4_${message.guild.id}`)
        );
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`sLiSte3_${message.guild.id}`)
        );
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste5ad_${message.guild.id}`,
          meh.get(`sliste4ad_${message.guild.id}`)
        );
        meh.set(
          `sliste4ad_${message.guild.id}`,
          meh.get(`sliste3ad_${message.guild.id}`)
        );
        meh.set(`sliste3ad_${message.guild.id}`, message.author.username);
      } else {
        meh.set(
          `sLiSteid5_${message.guild.id}`,
          meh.get(`sLiSteid4_${message.guild.id}`)
        );
        meh.set(
          `sLiSteid4_${message.guild.id}`,
          meh.get(`sLiSteid3_${message.guild.id}`)
        );
        meh.set(`sLiSteid3_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte5_${message.guild.id}`,
          meh.get(`sLiSte4_${message.guild.id}`)
        );
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`sLiSte3_${message.guild.id}`)
        );
        meh.set(
          `sLiSte3_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste5ad_${message.guild.id}`,
          meh.get(`sliste4ad_${message.guild.id}`)
        );
        meh.set(
          `sliste4ad_${message.guild.id}`,
          meh.get(`sliste3ad_${message.guild.id}`)
        );
        meh.set(`sliste3ad_${message.guild.id}`, message.author.username);
      }
    } else if (
      meh.get(`sLiSteid1_${message.guild.id}`) != message.author.id &&
      meh.get(`sLiSteid2_${message.guild.id}`) != message.author.id &&
      meh.get(`sLiSteid3_${message.guild.id}`) != message.author.id &&
      meh.get(`sLiSte4_${message.guild.id}`) <
        meh.get(`Para_${message.author.id}`)
    ) {
      del = "deneme";
      if (meh.get(`sListeid4_${message.guild.id}`) == message.author.id) {
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
      } else if (
        meh.get(`sLiSteid5_${message.guild.id}`) == message.author.id
      ) {
        meh.set(
          `sLiSteid5_${message.guild.id}`,
          meh.get(`sLiSteid4_${message.guild.id}`)
        );
        meh.set(`sLiSteid4_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte5_${message.guild.id}`,
          meh.get(`sLiSte4_${message.guild.id}`)
        );
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste5ad_${message.guild.id}`,
          meh.get(`sliste4ad_${message.guild.id}`)
        );
        meh.set(`sliste4ad_${message.guild.id}`, message.author.username);
      } else {
        meh.set(
          `sLiSteid5_${message.guild.id}`,
          meh.get(`sLiSteid4_${message.guild.id}`)
        );
        meh.set(`sLiSteid4_${message.guild.id}`, message.author.id);
        meh.set(
          `sLiSte5_${message.guild.id}`,
          meh.get(`sLiSte4_${message.guild.id}`)
        );
        meh.set(
          `sLiSte4_${message.guild.id}`,
          meh.get(`Para_${message.author.id}`)
        );
        meh.set(
          `sliste5ad_${message.guild.id}`,
          meh.get(`sliste4ad_${message.guild.id}`)
        );
        meh.set(`sliste4ad_${message.guild.id}`, message.author.username);
      }
    } else if (
      meh.get(`sLiSteid1_${message.guild.id}`) != message.author.id &&
      meh.get(`sLiSteid2_${message.guild.id}`) != message.author.id &&
      meh.get(`sLiSteid3_${message.guild.id}`) != message.author.id &&
      meh.get(`sLiSteid4_${message.guild.id}`) &&
      meh.get(`sLiSte5_${message.guild.id}`) <
        meh.get(`Para_${message.author.id}`)
    ) {
      del = "deneme";
      meh.set(`sLiSteid5_${message.guild.id}`, message.author.id);
      meh.set(
        `sLiSte5_${message.guild.id}`,
        meh.get(`Para_${message.author.id}`)
      );
      meh.set(`sliste5ad_${message.guild.id}`, message.author.username);
    }
  }, 5000);
});
client.on("message", (msg, member) => {
  if (msg.author.id == client.id || msg.author.id == "964354536724643890")
    return;
  meh.add(`Xp_Puan1_${msg.author.id}`, 2);
  if (meh.get(`Xp1_${msg.author.id}`) == null)
    return meh.set(`Xp1_${msg.author.id}`, 1);
  var puan = meh.get(`Xp1_${msg.author.id}`);
  var sayı = 500 * puan;
  meh.set(`Xp_kalan1_${msg.author.id}`, sayı);
  if (meh.get(`Xp_Puan1_${msg.author.id}`) >= sayı) {
    meh.delete(`Xp_Puan1_${msg.author.id}`);
    meh.add(`Xp1_${msg.author.id}`, 1);
    meh.add(`Para_${msg.author.id}`, 600 * puan);
    let embd = new Discord.MessageEmbed()
      .setColor(`GREEN`)
      .setTitle(`**LEVEL ATLANDI**`)
      .setThumbnail(msg.author.avatarURL({ dynamic: true }))
      .setDescription(`${600 * puan} TL KAZANILDI.`)
      .setTimestamp()
      .setFooter(`sunucu ${msg.guild.memberCount} kişi`);
    msg.channel.send(embd);
  }
});
client.on("message", (msg) => {
  let kazmaadet = meh.get(`Kazma_${msg.author.id}`);
  let baltaadet = meh.get(`Balta_${msg.author.id}`);
  let oltaadet = meh.get(`Olta_${msg.author.id}`);
  let bilgisayaradet = meh.get(`Bilgisayar_${msg.author.id}`);
  let çantaadet = meh.get(`Çanta_${msg.author.id}`);
  let paramiktar = meh.get(`Para_${msg.author.id}`);
  let taşadet = meh.get(`Taş_${msg.author.id}`);
  let tokenadet = meh.get(`Madeni_Token_${msg.author.id}`);
  let odunadet = meh.get(`Odun_${msg.author.id}`);
  let balıkadet = meh.get(`Balık_${msg.author.id}`);
  let köpekbalığıadet = meh.get(`Köpek_Balığı_${msg.author.id}`);
  var ağırlıkk = 0;
  var ağırlık1 = 0;
  if (paramiktar >= 1) {
    ağırlık1 = 0.00000001 * paramiktar;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if (kazmaadet >= 1) {
    ağırlık1 = 3.83 * kazmaadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if (baltaadet >= 1) {
    ağırlık1 = 2.16 * baltaadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if (bilgisayaradet >= 1) {
    ağırlık1 = 40.27 * bilgisayaradet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if (çantaadet >= 1) {
    ağırlık1 = 0.68 * çantaadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if (taşadet >= 1) {
    ağırlık1 = 2.18 * taşadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if (tokenadet >= 1) {
    ağırlık1 = 0.01 * tokenadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if (balıkadet >= 1) {
    ağırlık1 = 0.3 * balıkadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  if (köpekbalığıadet >= 1) {
    ağırlık1 = 20.4 * köpekbalığıadet;
    ağırlıkk = ağırlıkk + Number(ağırlık1);
    ağırlık1 = 0;
  }
  meh.set(`ağırlık_${msg.author.id}`, ağırlıkk.toFixed(2));
});
client.on("message", (message) => {
  let uid = message.mentions.users.first() || message.author;
  let u = message.mentions.users.first();

  if (u == null) {
  } else {
    if (meh.get(`Afk2_${uid.id}`) === 1) {
      let embd = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          `${message.mentions.users.first()} ADLI KULLANICI ŞUAN ${meh.get(
            `Neden_${uid.id}`
          )} NEDENİ İLE AFK`
        );
      message.channel.send(embd);
    }
  }
});
client.on("message", (msg) => {
  if (meh.get(`Afk2_${msg.author.id}`) === 1) {
    if (meh.get(`Afk_${msg.author.id}`) === "afk") {
      let embd = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(`**__AFK KAPANDI__**`)
        .setDescription(`${msg.author.tag} ADLI KİŞİ ARTIK AFK DEĞİL`);
      msg.channel.send(embd);
      meh.delete(`Afk_${msg.author.id}`);
      meh.delete(`Afk2_${msg.author.id}`);
      meh.delete(`Neden_${msg.author.id}`);
    }
  }
});

//BOTA ATILAN  MESAJLARI GÖRME
client.on("message", (msg) => {
  var dm = client.channels.cache.get("1015955561004683374"); //mesajın geleceği kanal idsi//
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("BLUE")
      .setThumbnail(`${msg.author.avatarURL()}`)
      .addField(":boy: Gönderen ", msg.author.tag)
      .addField(":id:  Gönderen ID :", msg.author.id)
      .addField(":globe_with_meridians: Gönderilen Mesaj", msg.content);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});
//Kod bitti
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach((f) => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach((alias) => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = (command) => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = (command) => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach((alias) => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = (command) => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.on("guildDelete", (guild) => {
  client.user
    .setPresence({
      activity: {
        name: `${prefix2}help | ${
          client.guilds.cache.size
        } sunucuda ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} kişiye hizmet veriyorum`,
        type: "WATCHING",
      },
    })
    .then(
      console.log(`${client.user.tag} İsmiyle Discord Bağlantısı kuruldu.`)
    );

  let embd = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(" Bir Sunucudan Atıldım ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", `<@${guild.ownerID}>`)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.cache.get("1015955561004683374").send(embd);
});

client.on("guildCreate", (guild) => {
  meh.set(`Dil_${guild.id}`, "tr");

  client.user
    .setPresence({
      activity: {
        name: `${prefix2}help | ${
          client.guilds.cache.size
        } sunucuda ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} kişiye hizmet veriyorum`,
        type: "WATCHING",
      },
    })
    .then(
      console.log(`${client.user.tag} İsmiyle Discord Bağlantısı kuruldu.`)
    );

  if (ayarlar[guild.id] == null) {
    ayarlar[guild.id] = {
      prefix: "-",
    };
  }
  fs.writeFile("./ayarlar.json", JSON.stringify(ayarlar), (err) => {
    if (err) {
      console.log(err);
    }
  });
  let embd = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(" Bir Sunucuya Eklendim! ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", `<@${guild.ownerID}>`)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.cache.get("1015955561004683374").send(embd);
});
// --------------------------- MOD LOG --------------------------

client.on("channelUpdate", async (channel) => {
  try {
    const guild = channel.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`);
    if (logKanalID == null || !logKanalID) return;
    const logKanal = guild.channels.cache.get(logKanalID);
    guild.fetchAuditLogs(11).then((a) => {
      const kanal = a.entries.first();
      var degişiklik;
      var multiply;
      if (kanal.changes[0].key == "name") {
        degişiklik = "İsim güncellemesi.";
        multiply = `Eski isim: ${kanal.changes[0].old}\nYeni isim: ${kanal.changes[0].new}`;
      }
      if (kanal.changes[0].key == "nsfw") {
        degişiklik = "NSFW";
        if (kanal.changes[0].old == false) {
          multiply = `NSFW Özelliği açıldı.`;
        } else if (kanal.changes[0].old == true)
          multiply = `NSFW Özelligi kapatıldı.`;
      }
      if (kanal.changes[0].key == "id") {
        degişiklik = "Kanaldaki bir rolün yada kişinin yetkisi güncellendi.";
        if (kanal.changes[1].key == "type") {
          if (
            kanal.changes[1].old == "member" ||
            kanal.changes[1].new == "member"
          ) {
            if (kanal.changes[1].old == "member") {
              multiply = `<@${kanal.changes[0].old}>'in üzerinde birşeyler oldu.`;
            } else {
              multiply = `<@${kanal.changes[0].new}>'in üzerinde birşeyler oldu.`;
            }
          } else if (
            kanal.changes[1].old == "role" ||
            kanal.changes[1].new == "role"
          ) {
            if (kanal.changes[1].old == "role") {
              multiply = `<@&${kanal.changes[0].old}>'in üzerinde birşeyler oldu.`;
            } else {
              multiply = `<@&${kanal.changes[0].new}>'in üzerinde birşeyler oldu.`;
            }
          }
        }
      } else if (kanal.changes[0].key.includes("allow")) return;
      if (kanal.changes[0].key == "rate_limit_per_user") {
        degişiklik = "Kanaldaki mesaj atma süresi güncellendi.";
        if (kanal.changes[0].old != 0) {
          multiply = `Kanalın mesaj gönderilme süresi kapatıldı.`;
        } else if (kanal.changes[0].old == 0) {
          multiply = `Kanalın mesaj gönderilme süresi ayarlandı. Süre: ${kanal.changes[0].new} Saniye.`;
        }
      }
      var user = a.entries.first().executor;
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Kanal güncellendi.")
        .addField("Kanalı Güncelliyen:", user.username, true)
        .addField("Güncellenen kanal:", kanal.target.name, true)
        .addField("Güncellenen:", degişiklik, true)
        .addField("Güncelleme Bilgisi:", multiply, true)
        .setFooter(
          `${client.user.username} Log sistemi.`,
          guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      logKanal.send(embed);
    });
  } catch {}
});
client.on("channelCreate", async (channel) => {
  try {
    if (!channel.guild) return;
    const guild = channel.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`);
    if (logKanalID == null || !logKanalID) return;
    const logKanal = guild.channels.cache.get(logKanalID);
    guild.fetchAuditLogs(10).then((a) => {
      const kanal = a.entries.first();
      const user = a.entries.first().executor;
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Kanal oluşturuldu.")
        .addField("Kanalı oluşturan:", user.username, true)
        .addField("Kanalın ismi:", kanal.target.name, true)
        .addField("Kanal ID:", kanal.target.id, true)
        .setFooter(
          `${client.user.username} Log sistemi.`,
          guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      logKanal.send(embed);
    });
  } catch {}
});
client.on("channelDelete", async (channel) => {
  try {
    const guild = channel.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`);
    if (logKanalID == null || !logKanalID) return;
    const logKanal = guild.channels.cache.get(logKanalID);
    guild.fetchAuditLogs(12).then((a) => {
      const kanal = a.entries.first();
      const user = a.entries.first().executor;
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Kanal silindi.")
        .addField("Kanalı silen:", user.username, true)
        .addField("Kanalın ismi:", channel.name, true)
        .addField("Kanal ID:", channel.id, true)
        .setFooter(
          `${client.user.username} Log sistemi.`,
          guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      logKanal.send(embed);
    });
  } catch {}
});
client.on("emojiCreate", async (emoji) => {
  try {
    const guild = emoji.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`);
    if (logKanalID == null || !logKanalID) return;
    const logKanal = guild.channels.cache.get(logKanalID);
    guild.fetchAuditLogs(60).then((a) => {
      const user = a.entries.first().executor;
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Emoji oluşturuldu.")
        .addField("Emojiyi oluşturan:", user.username, true)
        .addField("Emoji ismi:", emoji.name, true)
        .addField("Emoji ID:", emoji.id, true)
        .setThumbnail(emoji.url)
        .setFooter(
          `${client.user.username} Log sistemi.`,
          guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      logKanal.send(embed);
    });
  } catch {}
});
client.on("emojiDelete", async (emoji) => {
  try {
    const guild = emoji.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`);
    if (logKanalID == null || !logKanalID) return;
    const logKanal = guild.channels.cache.get(logKanalID);
    guild.fetchAuditLogs(62).then((a) => {
      const user = a.entries.first().executor;
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Emoji silindi.")
        .addField("Emojiyi silen:", user.username, true)
        .addField("Emoji ismi:", emoji.name, true)
        .addField("Emoji ID:", emoji.id, true)
        .setThumbnail(emoji.url)
        .setFooter(
          `${client.user.username} Log sistemi.`,
          guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      logKanal.send(embed);
    });
  } catch {}
});
client.on("roleCreate", async (role) => {
  try {
    const guild = role.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`);
    if (logKanalID == null || !logKanalID) return;
    const logKanal = guild.channels.cache.get(logKanalID);
    guild.fetchAuditLogs(30).then((a) => {
      const rol = a.entries.first();
      const user = a.entries.first().executor;
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Rol oluşturuldu.")
        .addField("Rolü oluşturan:", user.username, true)
        .addField("Oluşturulan rol:", rol.target.name, true)
        .addField("Rol ID:", role.id, true)
        .setFooter(
          `${client.user.username} Log sistemi.`,
          guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      logKanal.send(embed);
    });
  } catch {}
});
client.on("roleDelete", async (role) => {
  try {
    const guild = role.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`);
    if (logKanalID == null || !logKanalID) return;
    const logKanal = guild.channels.cache.get(logKanalID);
    guild.fetchAuditLogs(32).then((a) => {
      const rol = a.entries.first();
      const user = a.entries.first().executor;
      const embed = new Discord.MessageEmbed()
        .setColor(role.hexColor)
        .setTitle("Rol silindi.")
        .addField("Rolü silen:", user.username, true)
        .addField("Silinen rol:", role.name, true)
        .addField("Rol ID:", role.id, true)
        .setFooter(
          `${client.user.username} Log sistemi.`,
          guild.iconURL({ dynamic: true })
        )
        .setTimestamp();
      logKanal.send(embed);
    });
  } catch {}
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  try {
    if (!oldMessage.guild && !newMessage.guild) return;
    if (newMessage == "") return;
    if (oldMessage.author.bot && newMessage.author.bot) return;
    const guild = oldMessage.guild || newMessage.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`);
    if (logKanalID == null || !logKanalID) return;
    const logKanal = guild.channels.cache.get(logKanalID);
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Mesaj güncellendi.")
      .addField("Mesaj sahibi:", oldMessage.author.tag)
      .addField("Eski mesaj:", oldMessage, true)
      .addField("Yeni mesaj:", newMessage, true)
      .setFooter(
        `${client.user.username} Log sistemi.`,
        guild.iconURL({ dynamic: true })
      )
      .setTimestamp()
      .setThumbnail(oldMessage.author.avatarURL({ size: 4096, dynamic: true }));
    logKanal.send(embed);
  } catch {}
});
client.on("messageDelete", async (message) => {
  try {
    if (!message.guild) return;
    if (message.author.bot) return;
    const guild = message.guild;
    const logKanalID = await db.fetch(`logKanal_${guild.id}`);
    if (logKanalID == null || !logKanalID) return;
    const logKanal = guild.channels.cache.get(logKanalID);
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Mesaj silindi.")
      .addField("Mesaj sahibi:", message.author.tag)
      .addField("Silinen mesaj:", message.content, true)
      .setFooter(
        `${client.user.username} Log sistemi.`,
        guild.iconURL({ dynamic: true })
      )
      .setTimestamp()
      .setThumbnail(message.author.avatarURL({ size: 4096, dynamic: true }));
    logKanal.send(embed);
  } catch {}
});
//kod bitti

client.elevation = (message) => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", (e) => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", (e) => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.token);

//--------------------------------ROL KORUMA SİSTEMİ -------------------------------\\
client.on("guildMemberUpdate", async (oldMember, newMember) => {
  let guild = oldMember.guild || newMember.guild;

  let lrows = await guild.fetchAuditLogs({ type: "MEMBER_ROLES_UPDATE" });

  if (lrows) {
    let lrowsrol = [];

    oldMember.roles.cache.forEach((c) => {
      if (!newMember.roles.cache.has(c.id)) {
        require("quick.db").delete(`${guild.id}.${c.id}.${oldMember.id}`);
      }
    });
    newMember.roles.cache.forEach((c) => {
      if (!oldMember.roles.cache.has(c.id)) {
        require("quick.db").set(
          `${guild.id}.${c.id}.${newMember.id}`,
          "eklendi"
        );
      }
    });
  }
});

client.elevation = (message) => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", (e) => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", (e) => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});
client.on("message", (message) => {
  var HeraCode = db.get(`afkol.${message.author.id}.afk`);

  if (!HeraCode) return;

  var afkh = JSON.parse(HeraCode);

  if (new Date().getTime() - afkh.zaman < 1000) return;

  db.delete(`afkol.${message.author.id}.afk`);

  var süre = new Date().getTime() - afkh.zaman;

  var sürem = moment

    .duration(süre)

    .format("Y [yıl], M [ay], D [gün], H [saat], m [dakika], s [saniye]");

  message.channel.send(
    "AFK Sisteminden Çıktınız. <@" +
      message.author.id +
      ">. Afk kaldığın süre:** " +
      sürem +
      "**"
  );
});
client.login(process.env.token);
client.on("message", (msg) => {
  //link engel deneme
  if (msg.content.toLowerCase() === "www.") {
    msg.channel.bulkdelete(1).then(() => {
      msg.channel.reply("link gönderme la");
    });
  }
  //link engel deneme komut bitişi
});
client.on("message", (msg) => {
  if (msg.content.toLowerCase() === "yetkili_kuralları") {
    msg.channel.send(
      `https://cdn.glitch.me/47b94618-5613-4c30-b4ba-a70264db8412/20211215_132548.gif?v=1639564047886`
    ) / msg.channel.send("**bu kurallar ekip için geçerli değildir**");
  }
});
client.on("message", (msg) => {
  if (msg.content.toLowerCase() === "üye_kuralları") {
    msg.channel.send(
      `https://cdn.glitch.me/47b94618-5613-4c30-b4ba-a70264db8412/20211215_011232.gif?v=1639520052311`
    );
  }
});
client.on("message", (msg) => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply("Aleyküm Selam hoşgeldin kral :fire: ");
  }
});
client.on("message", (msg) => {
  if (msg.content.toLowerCase() === "Selamun aleyküm") {
    msg.reply("Aleyküm Selam Hoş Geldin Kral :fire:");
  }
});

client.on(`guildMemberRemove`, async (member) => {
  client.user
    .setPresence({
      activity: {
        name: `${prefix2}help | ${
          client.guilds.cache.size
        } sunucuda ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} kişiye hizmet veriyorum`,
        type: "WATCHING",
      },
    })
    .then(
      console.log(`${client.user.tag} İsmiyle Discord Bağlantısı kuruldu.`)
    );
});
client.on(`guildMemberAdd`, async (member) => {
  client.user
    .setPresence({
      activity: {
        name: `${prefix2}help | ${
          client.guilds.cache.size
        } sunucuda ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} kişiye hizmet veriyorum`,
        type: "WATCHING",
      },
    })
    .then(
      console.log(`${client.user.tag} İsmiyle Discord Bağlantısı kuruldu.`)
    );

  const e = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setImage(
      `https://i.pinimg.com/originals/16/8b/4f/168b4f111ebd7a5f5e154dac79dcbbd2.gif`
    )
    .addField(
      `meraba ${member.guild.name} adlı sunucuya hoş geldin`,
      "<:tik:991946063458086992>"
    )
    //abi burayı yazmayı unutma
    .setFooter(``);
  //yazmasanda olur boş kalsın abi
  member.send(e);
});
client.on("voiceStateUpdate", async (oldState, newState) => {
  if (
    newState.channel != null &&
    newState.channel.name.startsWith("➕│2 Kişilik Oda")
  ) {
    newState.guild.channels
      .create(`🎧 ${newState.member.displayName}`, {
        type: "voice",
        parent: newState.channel.parent,
      })
      .then((cloneChannel) => {
        newState.setChannel(cloneChannel);
        cloneChannel.setUserLimit(2);
      });
  }
  if (
    newState.channel != null &&
    newState.channel.name.startsWith("➕│3 Kişilik Oda")
  ) {
    newState.guild.channels
      .create(`🎧 ${newState.member.displayName}`, {
        type: "voice",
        parent: newState.channel.parent,
      })
      .then((cloneChannel) => {
        newState.setChannel(cloneChannel);
        cloneChannel.setUserLimit(3);
      });
  }
  if (
    newState.channel != null &&
    newState.channel.name.startsWith("➕│4 Kişilik Oda")
  ) {
    newState.guild.channels
      .create(`🎧 ${newState.member.displayName}`, {
        type: "voice",
        parent: newState.channel.parent,
      })
      .then((cloneChannel) => {
        newState.setChannel(cloneChannel);
        cloneChannel.setUserLimit(4);
      });
  }
  if (
    newState.channel != null &&
    newState.channel.name.startsWith("➕│5 Kişilik Oda")
  ) {
    newState.guild.channels
      .create(`🎧 ${newState.member.displayName}`, {
        type: "voice",
        parent: newState.channel.parent,
      })
      .then((cloneChannel) => {
        newState.setChannel(cloneChannel);
        cloneChannel.setUserLimit(5);
      });
  }
  if (
    newState.channel != null &&
    newState.channel.name.startsWith("➕│20 Kişilik Oda")
  ) {
    newState.guild.channels
      .create(`🎧 ${newState.member.displayName}`, {
        type: "voice",
        parent: newState.channel.parent,
      })
      .then((cloneChannel) => {
        newState.setChannel(cloneChannel);
        cloneChannel.setUserLimit(20);
      });
  }
  // Kullanıcı ses kanalından ayrılınca ve kanalda kimse kalmazsa kanalı siler;
  if (oldState.channel != undefined) {
    if (oldState.channel.name.startsWith("🎧")) {
      if (oldState.channel.members.size == 0) {
        oldState.channel.delete();
      } else {
        // İlk kullanıcı ses kanalından ayrılınca kanaldaki başka kullanıcı adını kanal adı yapar.
        let matchMember = oldState.channel.members.find(
          (x) => `🎧 ${x.displayName} özel odası` == oldState.channel.name
        );
        if (matchMember == null) {
          oldState.channel.setName(
            `🎧 ${oldState.channel.members.random().displayName} özel odası`
          );
        }
      }
    }
  }
});

console.log;
