let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'nih',m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(darkjokes)$/i

export default handler 