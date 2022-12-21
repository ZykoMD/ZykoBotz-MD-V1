/*let xfar = require('xfarr-api')
let axios = require('axios')
let fetch = require('node-fetch')
*/
import fetch from 'node-fetch'
import axios from 'axios'
import xfar from 'xfarr-api'
//import { Telesticker } from 'xfarr-api'
let handler = async (m, { usedPrefix, command, conn:fur, args }) => {
if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} spiderman`
xfar.Film(args[0]).then(async data => {
let txt = `*--------「 FILM-SEARCH 」--------*\n\n`
for (let i of data) {
txt += `*📫 Judul :* ${i.judul}\n`
txt += `*🎞️  Tipe  :* ${i.type}\n`
txt += `*📟 Kualitas :* ${i.quality}\n`
txt += `*📮Upload :* ${i.upload}\n`
txt += `*🔗 Url :* ${await shortlink(i.link)}\n-----------------------------------------------------\n`
}

conn.sendButtonLoc(m.chat, await (await fetch(data[0].thumb)).buffer(), txt, wm, 'pencet', 'ok', m)
})
}
handler.help = ['film <keyword>']
handler.tags = ['internet', 'film', 'kabul']
handler.command = /^(film)$/i
export default handler

async function shortlink(url){
isurl = /https?:\/\//.test(url)
return isurl ? (await fetch('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''}