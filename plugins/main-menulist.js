let { generateWAMessageFromContent } = (await import("@adiwajshing/baileys"))
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
before: ` `.trimStart(),
header: '⃝▣──「 %category 」───⬣',
  body: `│▢ %cmd %isPremium %islimit`,
  footer: '▣───────────⬣\n',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {

 /**************************** TIME *********************/
 
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
let zyko = `${wibh} : ${wibm} : ${wibs} WIB`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform()
      let vn = './media/yntkts'
//-----------TIME---------
let ucpn = `${ucapan()}`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset0 is0.00
// Offset420 is7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)

//---------------------

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})

let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
let tags
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'anime', 'update', 'maker', 'berita', 'edukasi', 'news', 'random', 'logo', 'menbalas', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'asupan', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote','vidiorandom', 'catatan', 'absen', 'virus', 'nsfw', 'audio', 'jadibot', 'random', 'info', 'audioanime', 'sound2004', 'owner', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main', 
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'random': 'Random',
  'fun': 'Fun',
  'asupan': 'Asupan',
  'vidiorandom': 'VidioRandom',
  'anime': 'Anime', 
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Vote',
  'absen': 'Absen',
  'catatan': 'Catatan',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis',
  'audio': 'Audio',
  'audioanime': 'Audioanime',
  'logo': 'Logo Menu',
  'maker': 'Maker',
  'berita': 'Berita',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'random') tags = {
   'random': 'Random'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'berita') tags = {
    'berita': 'Berita'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
if (teks == 'menbalas') tags = {
    'menbalas': 'Menfess'
  }
if (teks == 'virus') tags = {
    'virus': 'Virus'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'asupan') tags = {
  'asupan': 'Asupan'
 }
 if (teks == 'vidiorandom') tags = {
 'vidiorandom': 'Vidiorandom'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Vote',
  }
  if (teks == 'logo') tags = {
    'logo': 'Logo',
  }
  if (teks == 'catatan') tags = {
  'catatan': 'Catatan',
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
}
  if (teks == 'audioanime') tags = {
    'audioanime': 'Audioanime'
}
  if (teks == 'sound2004') tags = {
    'sound2004': 'Sound2004'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nocategory') tags = {
    'nocategory': 'No Category'
  }
try {
// DEFAULT MENU
let dash = global.dashmenu
let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenuf
let m4 = global.dmenub2

// COMMAND MENU
let cc = global.cmenut
let c1 = global.cmenuh
let c2 = global.cmenub
let c3 = global.cmenuf
let c4 = global.cmenua

// LOGO L P
let lprem = global.lopr
let llim = global.lolm
let tag = `@${m.sender.split('@')[0]}`

let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)
const sections = [
{
 title: `${htki} 𝑆𝑃𝐸𝐸𝐷 𝐵𝑂𝑇 ${htka}`,
    rows: [
        {title: `${emot} 𝑆𝑃𝐸𝐸𝐷 𝐵𝑂𝑇`, rowId: ".speed", description: "𝑀𝐸𝑁𝐴𝑀𝑃𝐼𝐿𝐾𝐴𝑁 𝐾𝐸𝐶𝐸𝑃𝐴𝑇𝐴𝑁 𝑅𝐸𝑆𝑃𝑂𝑁 𝐵𝑂𝑇"},
        ]
      },{
        title: `${htki} 𝑂𝑊𝑁𝐸𝑅 𝐵𝑂𝑇 ${htka}`,
        rows: [
        {title: `${emot} 𝑂𝑊𝑁𝐸𝑅 𝐵𝑂𝑇`, rowId: ".owner", description: "𝑀𝐸𝑁𝐴𝑀𝑃𝐼𝐿𝐾𝐴𝑁 𝐿𝐼𝑆𝑇 𝑂𝑊𝑁𝐸𝑅 𝐵𝑂𝑇"},
        ]
      },{
        title: `${htki} 𝑅𝑈𝑁𝑇𝐼𝑀𝐸 𝐵𝑂𝑇 ${htka}`,
        rows: [
        {title: `${emot} 𝑅𝑈𝑁𝑇𝐼𝑀𝐸 𝐵𝑂𝑇`, rowId: ".runtime", description: "𝑀𝐸𝑁𝐴𝑀𝑃𝐼𝐿𝐾𝐴𝑁 𝑊𝐴𝐾𝑇𝑈 𝐵𝑂𝑇 𝐵𝐸𝑅𝐽𝐴𝐿𝐴𝑁"}, 
        ]
      },{
        title: `${htki} 𝑆𝐶𝑅𝐼𝑃𝑇 𝐵𝑂𝑇 ${htka}`,
        rows: [
        {title: `${emot} 𝑆𝐶𝑅𝐼𝑃𝑇 𝐵𝑂𝑇`, rowId: ".sc", description: `𝑆𝑂𝑈𝑅𝐶𝐸 𝐶𝑂𝐷𝐸 ${namebot}`},
    ]
      },{
        title: `${htki} 𝑆𝑈𝑃𝑃𝑂𝑅𝑇 ${htka}`,
        rows: [
            {title: `${emot} 𝑆𝐸𝑊𝐴`, rowId: ".sewa", description: "𝑀𝐸𝑁𝐴𝑀𝑃𝐼𝐿𝐾𝐴𝑁 𝐿𝐼𝑆𝑇 𝐻𝐴𝑅𝐺𝐴 𝑆𝐸𝑊𝐴 𝐵𝑂𝑇"},
            {title: `${emot} 𝐵𝑈𝑌 𝑃𝑅𝐸𝑀𝐼𝑈𝑀`, rowId: ".premium", description: "𝑀𝐸𝑁𝐴𝑀𝑃𝐼𝐿𝐾𝐴𝑁 𝐿𝐼𝑆𝑇 𝐻𝐴𝑅𝐺𝐴 𝑃𝑅𝐸𝑀𝐼𝑈𝑀"},
            {title: `${emot} 𝐷𝑂𝑁𝐴𝑆𝐼`, rowId: ".donasi", description: '𝑆𝑈𝑃𝑃𝑂𝑅𝑇 𝐵𝑂𝑇 𝐴𝐺𝐴𝑅 𝐿𝐸𝐵𝐼𝐻 𝐹𝐴𝑆𝑇 𝑅𝐸𝑆𝑃𝑂𝑁'},
        ]
        },{
          title: `${htki} 𝑀𝐸𝑁𝐹𝐸𝑆𝑆 𝐵𝐴𝐿𝐴𝑆 ${htka}`,
          rows: [
         {title: `${emot} 𝑀𝐸𝑁𝐹𝐸𝑆𝑆 𝐵𝐴𝐿𝐴𝑆`, rowId: ".? menbalas", description: "𝑀𝐸𝑁𝐴𝑀𝑃𝐼𝐿𝐾𝐴𝑁 𝑆𝐸𝑀𝑈𝐴 𝐶𝑂𝑀𝑀𝐴𝑁𝐷 𝐵𝑂𝑇 "},
          ]},{
        title: `${htki} 𝐴𝐿𝐿 𝐶𝑂𝑀𝑀𝐴𝑁𝐷 𝐵𝑂𝑇 ${htka}`,
        rows: [
        {title: `${emot} 𝐴𝐿𝐿 𝐶𝑂𝑀𝑀𝐴𝑁𝐷 𝐵𝑂𝑇`, rowId: ".? all", description: "𝑀𝐸𝑁𝐴𝑀𝑃𝐼𝐿𝐾𝐴𝑁 𝑆𝐸𝑀𝑈𝐴 𝐶𝑂𝑀𝑀𝐴𝑁𝐷 𝐵𝑂𝑇 "},
                ]
      },{
        title: `${htki} 𝑅𝑃𝐺 ${htka}`,
        rows: [
        {title: `${emot} 𝑅𝑃𝐺`, rowId: ".? rpg", description: "𝐺𝐴𝑀𝐸 𝐸𝑃𝐼𝐶 𝑅𝑃𝐺!"},
                ]
      },{
        title: `${htki} 𝐺𝑅𝑂𝑈𝑃 ${namebot} ${htka}`,
        rows: [
        {title: `${emot} 𝐺𝑅𝑂𝑈𝑃 ${namebot}`, rowId: ".gcbul", description: "𝑀𝐴𝑅𝐼 𝐽𝑂𝐼𝑁 𝐾𝐸 𝐺𝐶 𝑆𝐴𝑌𝐴"},
                ]
      },{
        title: `${htki} 𝐸𝑋𝑃 ${htka}`,
        rows: [
        {title: `${emot} 𝐸𝑋𝑃`, rowId: ".? xp", description: "𝐴𝑌𝑂 𝑇𝐼𝑁𝐺𝐾𝐴𝑇𝐾𝐴𝑁 𝑃𝐴𝑁𝐺𝐾𝐴𝑇 𝑀𝑈!"},
           ]
      },{
        title: `${htki} GAME ${htka}`,
        rows: [
     {title: `${emot} 𝐺𝐴𝑀𝐸`, rowId: ".? game", description: "𝐺𝐴𝑀𝐸𝑁𝑌𝐴 𝑆𝐸𝑅𝑈 𝑆𝐸𝑅𝑈 𝐿𝐻𝑂 >-<"},
         ]
      },{
        title: `${htki} 𝐹𝑈𝑁 ${htka}`,
        rows: [
        {title: `${emot} 𝐹𝑈𝑁`, rowId: ".? fun", description: "𝐹𝐼𝑇𝑈𝑅 𝑌𝐴𝑁𝐺 𝐴𝑀𝐴𝑁 𝑈𝑁𝑇𝑈𝐾 𝐾𝐸𝐿𝑈𝐴𝑅𝐺𝐴"},
              ]
      },{
        title: `${htki} 𝐴𝑆𝑈𝑃𝐴𝑁 ${htka}`,
        rows: [
       {title: `${emot} 𝐴𝑆𝑈𝑃𝐴𝑁`, rowId: ".? asupan", description: "𝐴𝑆𝑈𝑃𝐴𝑁 𝐶𝐸𝑊𝐸𝐾 𝐶𝐴𝑁𝑇𝐼𝐾"},
          ]
      },{
        title: `${htki} 𝑉𝐼𝐷𝐼𝑂 𝑅𝐴𝑁𝐷𝑂𝑀 𝑆𝑇𝐴𝑇𝑈𝑆 ${htka}`,
        rows: [
      {title: `${emot} 𝑉𝐼𝐷𝐼𝑂 𝑅𝐴𝑁𝐷𝑂𝑀 𝑆𝑇𝐴𝑇𝑈𝑆`, rowId: ".? vidiorandom", description: "𝑉𝐼𝐷𝐼𝑂 𝑅𝐴𝑁𝐷𝑂𝑀 𝑆𝑇𝐴𝑇𝑈𝑆 𝐿𝑈𝐴𝑅"},
          ]
      },{
        title: `${htki} 𝐾𝐸𝑅𝐴𝑁𝐺 ${htka}`,
        rows: [
      {title: `${emot} Kerang`, rowId: ".? kerangajaib", description: "𝑇𝐴𝑁𝑌𝐴𝐾𝐴𝑁 𝑃𝐴𝐷𝐴 𝐾𝐸𝑇𝑈𝐴 𝐶𝐿𝑈𝐵"},
          ]
      },{
        title: `${htki} 𝑄𝑈𝑂𝑇𝐸𝑆 ${htka}`,
        rows: [
      {title: `${emot} 𝑄𝑂𝑈𝑇𝐸𝑆`, rowId: ".? quotes", description: "𝑅𝐴𝑁𝐷𝑂𝑀 𝐼𝑁𝑆𝑃𝐼𝑅𝐴𝑆𝐼"},
           ]
      },{
        title: `${htki} 𝐴𝑁𝐼𝑀𝐸 ${htka}`,
        rows: [
     {title: `${emot} 𝐴𝑁𝐼𝑀𝐸`, rowId: ".? anime", description: "𝐾𝐴𝑀𝑈 𝑊𝐼𝐵𝑈 𝑌𝐴 𝐵𝐴𝑁𝐺?"},
          ]
      },{
        title: `${htki} 𝑁𝑆𝐹𝑊 ${htka}`,
        rows: [
      {title: `${emot} 𝑁𝑆𝐹𝑊`, rowId: ".? nsfw", description: "𝑇𝐶𝐻, 𝐷𝐴𝑆𝐴𝑅 𝑆𝐴𝑁𝐺𝐸"},
            ]
      },{
        title: `${htki} 𝑃𝑅𝐸𝑀𝐼𝑈𝑀 ${htka}`,
        rows: [
      {title: `${emot} 𝑃𝑅𝐸𝑀𝐼𝑈𝑀`, rowId: ".? premium", description: "𝑂𝑁𝐿𝑌 𝑃𝑅𝐸𝑀𝐼𝑈𝑀 𝑈𝑆𝐸𝑅𝑆"},
             ]
      },{
        title: `${htki} 𝐴𝑁𝑂𝑁𝑌𝑀𝑂𝑈𝑆 𝐶𝐻𝐴𝑇𝑆 ${htka}`,
        rows: [
       {title: `${emot} 𝐴𝑁𝑂𝑁𝑌𝑀𝑂𝑈𝑆 𝐶𝐻𝐴𝑇𝑆`, rowId: ".? anonymous", description: "𝐵𝐼𝐶𝐴𝑅𝐴 𝐷𝐸𝑁𝐺𝐴𝑁 𝑂𝑅𝐴𝑁𝐺 𝑇𝐼𝐷𝐴𝐾 𝐷𝐼𝐾𝐸𝑁𝐴𝐿"},
           ]
      },{
        title: `${htki} 𝐴𝐿-𝑄𝑈𝑅𝐴𝑁 ${htka}`,
        rows: [
     {title: `${emot} 𝐴𝐿-𝑄𝑈𝑅𝐴𝑁`, rowId: ".? quran", description: "𝑇𝑂𝐵𝐴𝑇 𝑌𝑈 𝐾𝐴𝐾"},
           ]
      },{
        title: `${htki} 𝐼𝑁𝑇𝐸𝑅𝑁𝐸𝑇 ${htka}`,
        rows: [ 
    {title: `${emot} 𝐼𝑁𝑇𝐸𝑅𝑁𝐸𝑇`, rowId: ".? internet", description: "𝐶𝐴𝑅𝐼 𝑆𝐸𝑆𝑈𝐴𝑇𝑈 𝐷𝐼𝐵𝑂𝑇"},
           ]
      },{
        title: `${htki} 𝐵𝐸𝑅𝐼𝑇𝐴 ${htka}`,
        rows: [
     {title: `${emot} 𝐵𝐸𝑅𝐼𝑇𝐴`, rowId: ".? berita", description: "𝐶𝐴𝑅𝐼 𝐵𝐸𝑅𝐼𝑇𝐴 𝑇𝐸𝑅𝑈𝑃𝐷𝐴𝑇𝐸"},
            ]
      },{
        title: `${htki} 𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷𝐸𝑅𝑆 ${htka}`,
        rows: [
    {title: `${emot} 𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷𝐸𝑅𝑆`, rowId: ".? downloader", description: "𝐷𝑂𝑊𝑁𝐿𝑂𝐴𝐷 𝑆𝐸𝑆𝑈𝐴𝑇𝑈 𝐷𝐼𝐵𝑂𝑇"},
           ]
      },{
        title: `${htki} 𝑆𝑇𝐼𝐾𝐸𝑅 ${htka}`,
        rows: [
     {title: `${emot} 𝑆𝑇𝐼𝐾𝐸𝑅`, rowId: ".? stiker", description: "𝐵𝑈𝐴𝑇 𝑆𝑇𝐼𝐶𝐾𝐸𝑅 𝐷𝐼𝐵𝑂𝑇"},
           ]
      },{
        title: `${htki} 𝐿𝑂𝐺𝑂 ${htka}`,
        rows: [
     {title: `${emot} 𝐿𝑂𝐺𝑂`, rowId: ".? logo", description: "𝐵𝑈𝐴𝑇 𝐿𝑂𝐺𝑂 𝐾𝐴𝑀𝑈 𝐷𝐼𝐵𝑂𝑇"},
           ]
      },{
        title: `${htki} 𝑁𝑈𝐿𝐼𝑆 ${htka}`,
        rows: [
     {title: `${emot} 𝑁𝑈𝐿𝐼𝑆`, rowId: ".? nulis", description: "𝑁𝑈𝐿𝐼𝑆 𝐾𝑂𝐾 𝑀𝐴𝐿𝐸𝑆 𝐾𝐴𝐾?"},
          ]
      },{
        title: `${htki} 𝐴𝑈𝐷𝐼𝑂 𝐴𝑁𝐼𝑀𝐸 ${htka}`,
        rows: [
      {title: `${emot} 𝐴𝑈𝐷𝐼𝑂 𝐴𝑁𝐼𝑀𝐸`, rowId: ".? audioanime", description: "𝐾𝐴𝑀𝑈 𝑊𝐼𝐵𝑈 𝑌𝐴 𝐵𝐴𝑁𝐺?"},
             ]
      },{
        title: `${htki} 𝐴𝑈𝐷𝐼𝑂 ${htka}`,
        rows: [
   {title: `${emot} 𝐴𝑈𝐷𝐼𝑂`, rowId: ".? audio", description: "𝑈𝐵𝐴𝐻 𝐴𝑈𝐷𝐼𝑂 𝐷𝐸𝑁𝐺𝐴𝑁 𝐹𝐼𝐿𝑇𝐸𝑅"},
           ]
      },{
        title: `${htki} 𝑆𝑂𝑈𝑁𝐷 𝑀𝐸𝑁𝑈 𝐿𝐼𝑆𝑇 ${htka}`,
        rows: [
     {title: `${emot} 𝑆𝑂𝑈𝑁𝐷 𝑀𝐸𝑁𝑈 𝐿𝐼𝑆𝑇`, rowId: ".soundmenu", description: "𝐾𝑈𝑀𝑃𝑈𝐿𝐴𝑁 120 𝑆𝑂𝑈𝑁𝐷"},
             ]
      },{
        title: `${htki} 𝐴𝐿𝐿 𝑆𝑂𝑈𝑁𝐷 𝐾𝐴𝑁𝐸 𝑀𝐸𝑁𝑈 ${htka}`,
        rows: [
   {title: `${emot} 𝐴𝐿𝐿 𝑆𝑂𝑈𝑁𝐷 𝐾𝐴𝑁𝐸 𝑀𝐸𝑁𝐻`, rowId: ".? sound2004", description: "𝐾𝑈𝑀𝑃𝑈𝐿𝐴𝑁 𝑆𝑂𝑈𝑁𝐷"},
           ]
      },{
        title: `${htki} 𝐵𝑈𝐴𝑇 𝐶𝐴𝑇𝐴𝑇𝐴𝑁 ${htka}`,
        rows: [
     {title: `${emot} 𝐵𝑈𝐴𝑇 𝐶𝐴𝑇𝐴𝑇𝐴𝑁`, rowId: ".? catatan", description: "𝐵𝑈𝐴𝑇 𝐶𝐴𝑇𝐴𝑇𝐴𝑁 𝐾𝐴𝑀𝑈 𝐷𝐼𝐵𝑂𝑇"},
            ]
      },{
        title: `${htki} 𝐺𝑅𝑂𝑈𝑃 ${htka}`,
        rows: [
    {title: `${emot} 𝐺𝑅𝑂𝑈𝑃`, rowId: ".? group", description: "𝑂𝑁𝐿𝑌 𝐺𝑅𝑂𝑈𝑃𝑆"},
             ]
      },{
        title: `${htki} 𝐴𝐷𝑀𝐼𝑁 ${htka}`,
        rows: [
   {title: `${emot} 𝐴𝐷𝑀𝐼𝑁`, rowId: ".? admin", description: "𝑂𝑁𝐿𝑌 𝐴𝐷𝑀𝐼𝑁 𝐺𝑅𝑂𝑈𝑃"},
           ]
      },{
        title: `${htki} 𝐷𝐴𝑇𝐴𝐵𝐴𝑆𝐸 ${htka}`,
        rows: [
     {title: `${emot} 𝐷𝐴𝑇𝐴𝐵𝐴𝑆𝐸`, rowId: ".? database", description: "𝑆𝐼𝑀𝑃𝐴𝑁 𝑆𝐸𝑆𝑈𝐴𝑇𝑈 𝐷𝐼𝐵𝑂𝑇"},
           ]
      },{
        title: `${htki} 𝑇𝑂𝑂𝐿𝑆 ${htka}`,
        rows: [
     {title: `${emot} 𝑇𝑂𝑂𝐿𝑆`, rowId: ".? tools", description: "𝑀𝑈𝑁𝐺𝐾𝐼𝑁 𝑇𝑂𝑂𝐿𝑆 𝐼𝑁𝐼 𝐵𝐼𝑆𝐴 𝑀𝐸𝑀𝐵𝐴𝑁𝑇𝑈?"},
             ]
      },{
        title: `${htki} 𝐼𝑁𝐹𝑂 ${htka}`,
        rows: [
   {title: `${emot} 𝐼𝑁𝐹𝑂`, rowId: ".? info", description: "𝐼𝑁𝐹𝑂 𝐼𝑁𝐹𝑂 𝐵𝑂𝑇"},
            ]
      },{
        title: `${htki} 𝑂𝑊𝑁𝐸𝑅 ${htka}`,
        rows: [
    {title: `${emot} 𝑂𝑊𝑁𝐸𝑅`, rowId: ".? owner", description: "𝑂𝑊𝑁𝐸𝑅 𝑂𝑁𝐿𝑌!"},
             ]
      },{
        title: `${htki} 𝑉𝐼𝑅𝑈𝑆/𝑆𝐸𝑁𝐷𝐵𝑈𝐺 ${htka}`,
        rows: [
   {title: `${emot} 𝑉𝐼𝑅𝑈𝑆/𝑆𝐸𝑁𝐷𝐵𝑈𝐺`, rowId: ".? virus", description: "𝐻𝑈𝑆𝑈𝑆 𝑂𝑊𝑁𝐸𝑅"},
             ]
      },{
        title: `${htki} 𝑁𝑂 𝐶𝐴𝑇𝐸𝐺𝑂𝑅𝑌 ${htka}`,
        rows: [
   {title: `${emot} 𝑁𝑂 𝐶𝐴𝑇𝐸𝐺𝑂𝑅𝑌`, rowId: ".? nocategory", description: "𝐹𝐼𝑇𝑈𝑅 𝑇𝐴𝑁𝑃𝐴 𝐾𝐴𝑇𝐸𝐺𝑂𝑅𝑌!"},
                ]
      },{
        title: `${htki} 𝑆𝑈𝐵𝐶𝑅𝐼𝐵𝐸 𝑌𝑇 𝑍𝑌𝐾𝑂𝐵𝑂𝑇𝑍-𝑀𝐷 ${htka}`,
        rows: [
   {title: `${emot} 𝑆𝑈𝐵𝐶𝑅𝐼𝐵𝐸 𝑌𝑇 𝑍𝑌𝐾𝑂𝐵𝑂𝑇𝑍-𝑀𝐷`, rowId: "kosg", description: "𝑆𝑈𝐵𝐶𝑅𝐼𝐵𝐸 𝐶𝐴𝑁𝑁𝐸𝐿 𝑍𝑌𝐾𝑂𝐵𝑂𝑇𝑍-𝑀𝐷🌝"},
        ]
        },
]
let psan = 'bagaimana kabarmu?'
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let tagnya = `@${m.sender.split`@`[0]}`

/*let tek = `*${ucapan()} @${m.sender.split`@`[0]}*
☰⃟⃟ᭁ═━┈━┈༓
┯┩
┡────────────┈ ⳹
┠━☰⃟⃟ᭁ「 *U s e rI n f o 克* 」
┋↬✗• *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
║↬✗• *ᴛᴀɢs:* @${m.sender.split`@`[0]}
╏↬✗• *sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
╎↬✗• *ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
╅╌┉┈┈╳
╭╼╼╼╼╼╼╼╼╺╴╴╳
┊ 「 *S t a t u sI n f o 比* 」
┊⧠ *ᴜᴘᴛɪᴍᴇ:* ${mpt}
┊⧠ *ᴛɪᴍᴇ:* ${moment.tz('Asia/Jakarta').format('HH')} H${moment.tz('Asia/Jakarta').format('mm')} M${moment.tz('Asia/Jakarta').format('ss')} S
┊⧠ *ᴜsᴇʀs:* ${Object.keys(global.db.data.users).length}
┊⧠ *ʟɪᴍɪᴛ:* ${usrs.limit}
┊⧠ *ʟᴇᴠᴇʟ:* ${usrs.level}
┊⧠ *ʀᴏʟᴇ:* ${usrs.role}${usrs.premiumTime > 1 ? `
┗––––––––––––––––––✥
┊↬✗• *ᴇxᴘɪʀᴇᴅ ᴘʀᴇᴍɪᴜᴍ:*
${clockStringP(usrs.premiumTime - new Date())}` : ''}
`*/
let tek = `✧────···[ Dashboard ]···────✧
*${ucapan()} ${conn.getName(m.sender)}*
╭━━━━━━━━━━━━━━━━┈─✧
┴
┬
│${emot} 「 Hai Kak👋 」
├❖ 「 ${conn.getName(m.sender)} 」
├❖  Bagaimana Harimu? 😄
├❖  Terima Kasih Telah Menggunakan Bot Kami
│
├━━━━━━━━━━━━━━━━┈─⋆
│  「 *U s e r  I n f o 克* 」
│${emot} *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
│${emot} *ᴛᴀɢs:* @${m.sender.split`@`[0]}
│${emot} *sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
│${emot} *ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
│
├━━━━━━━━━━━━━━━━┈─⋆
│  「 *S t a t u s  I n f o 比* 」
│${emot} *ᴛɪᴍᴇ:* ${moment.tz('Asia/Jakarta').format('HH')} H  ${moment.tz('Asia/Jakarta').format('mm')} M  ${moment.tz('Asia/Jakarta').format('ss')} S
│${emot} *ᴜsᴇʀs:* ${Object.keys(global.db.data.users).length}
│${emot} *ʟɪᴍɪᴛ:* ${usrs.limit}
│${emot} *ʟᴇᴠᴇʟ:* ${usrs.level}
│
├━━━━━━━━━━━━━━━━┈─⋆
│  「 *I n f o   B o t 比* 」
│${emot} Aktif selama ${mpt}
│${emot} Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
│${emot} Prefix : [ ${_p} ]
│${emot} *${Object.keys(global.db.data.users).length}* Pengguna
│${emot} *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
│${emot} *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
│
├━━━━━━━━━━━━━━━━┈─⋆
│
│ ▸ *Sumber :* YouTube ZykoBotz-MD Official
│ ▸ *ᴀᴜᴛʜᴏʀ :* 𝑍𝑌𝐾𝑂-𝑀𝐷
┴ ▸ *ᴏᴡɴᴇʀ :* ${nameown}
✧
┬ 📌 𝗣𝗶𝗻𝗻𝗲𝗱 :
│ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ^ω^
│
├━━━━━━━━━━━━━━━━┈─⋆
│${emot} *ʀᴏʟᴇ:* ${usrs.role}${usrs.premiumTime > 1 ? `
│${emot} *ᴇxᴘɪʀᴇᴅ ᴘʀᴇᴍɪᴜᴍ:*
│${emot} ${clockStringP(usrs.premiumTime - new Date())}` : ''}
╰━━━━━━━━━━━━━━━━┈─◂`
const listMessage = {
  text: tek,
  footer: `📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner\n\nᴍᴀᴅᴇ ᴡɪᴛʜ ❤ ʙʏ ${nameown}\n\n${botdate}\n\n${wm2}`,
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `CLICK HERE ⎙`, 
  sections
}
  if (teks == '404') {
return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }}) 
}

let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
.replace(/%islimit/g, menu.limit ? llim : '')
.replace(/%isPremium/g, menu.premium ? lprem : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

//----------------- FAKE
let fvn = {quoted: { key: {participant : '0@s.whatsapp.net'},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "2022","ptt": "true"} } }}
 let floc = {quoted: { key: { participant : '0@s.whatsapp.net'}, message: { "liveLocationMessage": { "caption": `Menu`,"h": `${name}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}} }}
 let fdocs = {quoted: { key : { participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Hai Kak ${name}!`,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }}}}
 let fgclink = {quoted: {key: {participant : '0@s.whatsapp.net'},message: {groupInviteMessage: {groupJid: "17608914335-1625305606@g.us",inviteCode: null,groupName: `Hai ${name}!`,  caption: wm,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }} }}
 let fgif = {quoted: {key: { participant : '0@s.whatsapp.net'}, message: {  "videoMessage": {  "title": `Hai Kak ${name}!`, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') } } } }
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  
    let urls = pickRandom(['https://telegra.ph/file/035e524939ab0294ba91f.jpg', 'https://telegra.ph/file/96b2275d3b14d071290bc.jpg', 'https://telegra.ph/file/2c6b7660bc6126404a9bb.jpg', 'https://telegra.ph/file/c635bf577bb9d59a3e00b.jpg', 'https://telegra.ph/file/be8dd52f6363f9e9f5a60.jpg', 'https://telegra.ph/file/02e53361b9dc946f63c8d.jpg', 'https://telegra.ph/file/298ed2f1bba17aeb64ca8.jpg', 'https://telegra.ph/file/be2a18221974147f66ea0.jpg'])
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    //FAKE TROLI

    const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
    
    const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: '[❗] Memuat Menu ' + teks + '...\n Sabar Ya Kak ^ω^', 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
   //  await m.reply(`*_${md} @${m.sender.split(`@`)[0]}..._*`)
    conn.reply(m.chat, `*Tunggu Sebentar Kak @${m.sender.split(`@`)[0]}. . .*`, ftrol) 

//------------------< MENU >----------------
let mangkane25 = "mangkane25"
let mangkane26 = "mangkane26"
let mangkane27 = "mangkane27"
let mangkane28 = "mangkane28"
let mangkane29 = "mangkane29"
let mangkane30 = "mangkane30"
let mangkane31 = "mangkane31"
let mangkane32 = "mangkane32"
let mangkane33 = "mangkane33"
let mangkane34 = "mangkane34"
let mangkane35 = "mangkane35"
let mangkane36 = "mangkane36"
let mangkane37 = "mangkane37"
let mangkane38 = "mangkane38"
let mangkane39 = "mangkane39"
let mangkane40 = "mangkane40"
let snd = `${pickRandom([mangkane25,mangkane26,mangkane27,mangkane28,mangkane29,mangkane30,mangkane31,mangkane32,mangkane33,mangkane34,mangkane35,mangkane36,mangkane37,mangkane38,mangkane39,mangkane40])}`
let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${snd}.mp3`
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: "SUBSCRIBE YT",
    body: bottime,
    thumbnail: await (await fetch(pp)).buffer(),
    sourceUrl: syt
 	  /*   sourceUrl: sig,
           title: '◄⟬ ●━━━ ⧏ ⧎ ⧐ ━━━● ⟭►',  
            body: 'Now Playing...', 
           thumbnail: await (await fetch('https://telegra.ph/file/c72133b197a68d3ea514d.jpg')).buffer()*/
}
     }
    })
    

//------------------ menuny
let ownernya = `@${nomorown.split`@`[0]}`
let floor = `╭────═[ INFO USER ]═───⋆
│╭───────────────···
┴│☂︎ *Name:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
${emot}│☂︎ *Tag:* ${tagnya}
${emot}│☂︎ *Premium:* ${prems}
${emot}│☂︎ *Limit:* ${usrs.limit}
${emot}│☂︎ *Money:* ${money}}
${emot}│☂︎ *Role:* ${usrs.role}
┬│ *Level:* ${usrs.limit}
│╰────────────────···
┠─────═[ TODAY ]═─────⋆
│╭────────────────···
┴│    *${ucapan()}* ${name}
${emot}│☂︎ *Tanggal:* ${week} ${weton}
${emot}│☂︎ *Date:* ${date}
${emot}│☂︎ *Tanggal Islam:* ${dateIslamic}
┬│☂︎ *Waktu:* ${wib} 
│╰────────────────···
┠─────═[ INFO BOT ]═───⋆
│╭────────────────···
┴│☂︎ *Nama Bot:* ${namebot}
${emot}│☂︎ *Mode:* ${mode}
${emot}│☂︎ *Prefix:* ${_p}
${emot}│☂︎ *Baileys:* Multi Device
${emot}│☂︎ *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
${emot}│☂︎ *Platform:* ${platform}
${emot}│☂︎ *Type:* Node.Js
${emot}│☂︎ *Uptime:* ${mpt}
┬│☂︎ *Database:* ${totalreg}
│╰────────────────···
╰──────────═┅═──────
⃝▣──「 *INFO CMD* 」───⬣
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
▣────────────⬣`
let nomorwa = '0'
let nomorowm1 = '6281386943282'
let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let d3= 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
let d4 = 'application/pdf'
let d5 = 'text/rtf'
let td = `${pickRandom([d1,d2,d3,d4,d5])}`
let ᴛᴇs = `Pᴏᴡᴇʀ Bʏ ⬝ @${nomorwa.split`@`[0]}\nCʀᴇᴀᴛᴏʀ Bᴏᴛ ⬝ @${nomorown1.split`@`[0]}\n⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
let thummb = fs.readFileSync('./thumbnail.jpg')
conn.send3ButtonVid(m.chat, 'https://telegra.ph/file/4ece0195006cf1bc508ea.mp4','ZYKOBOTZ-MD', floor + text.trim() + `\n` + botdate, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: "SUBSCRIBE YT",
    body: bottime,
    thumbnail: await (await fetch(pp)).buffer(),
    sourceUrl: syt
/*conn.send3ButtonVid(m.chat, 'https://telegra.ph/file/4ece0195006cf1bc508ea.mp4', `╭──═[ INFO USER ]═──⋆\n┊   ╭────────────···\n┊   │☂︎ *${ucapann()}* @${m.sender.split`@`[0]}\n┊   │☂︎ *Name:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}\n┊   │☂︎ *Tag:* @${m.sender.split`@`[0]}\n┊   │☂︎ *Premium:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}\n┊   │☂︎ *Limit:* ${usrs.limit}\n┊   │☂︎ *Money:* ${money}\n┊   │☂︎ *Role:* ${role}\n┊   │☂︎ *Level:* ${usrs.level}\n┊   │☂︎ *Aʟʟ Fɪᴛᴜʀ:* ${totalf}\n┊   ╰─────────────···\n╰───────═┅═───────\n⃝▣──「 *INFO CMD* 」───⬣\n│ *Ⓟ* = Premium\n│ *Ⓛ* = Limit\n▣────────────⬣`, text.trim() + `\n` + botdate, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: "SUBSCRIBE YT",
    body: bottime,
    thumbnail: await (await fetch(pp)).buffer(),
    sourceUrl: syt*/
     }}
  })
    
//------------------- BUTTON VID
/*conn.sendButton(m.chat, text, wm, 'https://youtu.be/3ONnszQtwz0', [['Ping', '.speed'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})*/

} catch (e) {
conn.reply(m.chat, 'Maaf, menu sedang error', m)
throw e
}
}
handler.help = ['listmenu', 'menulist','tesm']

handler.command = /^(listmenu|menulist|tesm|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years 🗓️*\n',mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}
function ucapann() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}