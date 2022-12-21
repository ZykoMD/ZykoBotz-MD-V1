import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
await m.reply(`*_${md} @${m.sender.split(`@`)[0]}..._*`)
const time = moment.tz('Asia/Jakarta').format('HH')
  let name = await conn.getName(m.sender)
  let runnya = `
 ⌚ Waktu: ${time} WIB
 💌 Aktif Selama : ${uptime}
 🌹 Name : ${name}`
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
 await conn.sendButton(m.chat, runnya,wm + '\n\n' + botdate, intro, [['MENU','.listmenu']], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `${ucapan()} ${name}`,
                        body: `${bottime}`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/1826b3e41f860b48c0658.jpg`)).buffer(),
                        sourceUrl: 'https://youtube.com/@zykobotz'
            }
        }
    })
}


handler.help = ['runtime']
handler.tags = ['info']
handler.command = ['runtime', 'rt']
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapann() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Malam"
  if (time >= 4) {
    res = "Pagi"
  }
  if (time >= 10) {
    res = "Siang"
  }
  if (time >= 15) {
    res = "Sore"
  }
  if (time >= 18) {
    res = "Malam"
  }
  return res
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}