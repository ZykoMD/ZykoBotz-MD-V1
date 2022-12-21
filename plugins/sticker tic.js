let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*_${md} @${m.sender.split(`@`)[0]}..._*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendButton(m.chat, `Nih *${name}* animetic`, botdate, pickRandom(tic2), [['Next', `/tic2`]],m)
}
handler.help = ['tic2']
handler.tags = ['nsfw']
handler.command = /^(tic2)$/i
handler.premium = true
handler.limit = false
handler.fail = null
handler.register = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const tic2 = [

"https://telegra.ph/file/868898dbc252a57bbcb72.mp4",
"https://telegra.ph/file/e10f7a0506620739b5cd6.mp4",
"https://telegra.ph/file/2693c52edb0513c85034c.mp4",
"https://telegra.ph/file/9bd07ee5c02d40b686c44.mp4",
"https://telegra.ph/file/db51417deee8d3a979fde.mp4",
]
