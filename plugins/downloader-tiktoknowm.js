import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  try {
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${global.lolkey}&url=${args[0]}`)
    let json = await res.json()
    let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    conn.sendButton(m.chat, json.result.link, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
    } catch {
    try {
    let res = await fetch(`https://api.lolhuman.xyz/api/tiktok2?apikey=${global.lolkey}&url=${args[0]}`)
    let json = await res.json()
    let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    conn.sendButton(m.chat, json.result.link, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
    } catch {
    let res = await fetch(`https://api.lolhuman.xyz/api/tiktok3?apikey=${global.lolkey}&url=${args[0]}`)
    let json = await res.json()
    let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    conn.sendButton(m.chat, json.result.link, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
    }
  }
}
handler.help = ['tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['downloader', 'premium']
handler.command = /^(tt|tiktok)nowm(dl)?(download(er)?)?$/i

handler.premium = false

export default handler
