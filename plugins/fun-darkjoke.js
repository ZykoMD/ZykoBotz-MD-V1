let handler = async (m, { conn }) => {
let rest = 'https://api.zacros.my.id/randomimg/darkjokes'
    conn.sendButtonImg(m.chat, rest, 'Dark? 🤨', wm, 'NEXT', '.darkjokes', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet', 'fun', 'kabul']
handler.command = /^(dragjokes|darkjokes)$/i
export default handler 