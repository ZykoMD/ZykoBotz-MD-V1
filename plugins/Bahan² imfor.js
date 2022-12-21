cara nambhin kontak pas menu keluar
fakes ganti ke fkontak
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
const CLIENT_ID = 'zZeR6I5DM5NMAYEhk7J9vveMqZzpCIym'
import soundcloud from 'soundcloud-downloader'
import hx from 'hxz-api'
import util from 'util'
import fetch from 'node-fetch'
import didyoumean from 'didyoumean'
import similarity from 'similarity'
import moment from 'moment-timezone'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import fetch from 'node-fetch'
import bo from 'dhn-api'
import { sizeFormatter } from 'human-readable'
let formatSize = sizeFormatter({
///////////////////////////////////////////////////////////
import PhoneNumber from 'awesome-phonenumber'
import { xpRange } from '../lib/levelling.js'
import axios from 'axios'
import fetch from 'node-fetch'


///
import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
import { pinterest } from '@bochilteam/scraper'
import { xpRange } from '../lib/levelling.js'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
//
import jimp from 'jimp'
import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
import { youtubeSearch } from '@bochilteam/scraper'
import PhoneNumber from 'awesome-phonenumber'
//
//
import axios from 'axios'
//handler Comand tags help true false owner dll
handler.tags = ['owner']
handler.command = /^(broadcastchat|bcchat|bcc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.register = true
//
import FormData from 'form-data'
import { Sticker } from 'wa-sticker-formatter'
import gplay from 'google-play-scraper'
import { watchFile, unwatchFile } from 'fs'
//
//
import { group } from 'console'
import { sticker } from '../lib/sticker.js'
//
//
//
//
//
import { webp2png } from '../lib/webp2mp4.js'
import path from 'path'
import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
//
//
import cp from 'child_process'
import { promisify } from 'util'
import { kbbi } from '@bochilteam/scraper'
import { unlinkSync, readFileSync } from 'fs'
import { join } from 'path'
import { exec } from 'child_process'
import got from 'got'
import { Telesticker } from 'xfarr-api'
import { stickerTelegram } from '@bochilteam/scraper'
import { dirname } from 'path'
//
import * as fs from 'fs'
import * as path from 'path'
import * as  crypto from 'crypto'
import { ffmpeg } from './converter.js'
import fluent_ffmpeg from 'fluent-ffmpeg'
import { spawn } from 'child_process'
import uploadFile from './uploadFile.js'
import uploadImage from './uploadImage.js'
//
import webp from 'node-webpmux'
//
import { FormData, Blob } from 'formdata-node'
import { fileTypeFromBuffer } from 'file-type'
import { extract } from 'zs-extract'
import { lookup } from 'mime-types'
import { DOMImplementation, XMLSerializer } from 'xmldom';
import JsBarcode from 'jsbarcode';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
//;
//;
const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default
//;
const src = join(__dirname, '..', 'src')
const _svg = readFileSync(join(src, 'welcome.svg'), 'utf-8')
//
//
import { randomBytes } from 'crypto'
//
import { lookup } from 'mime-types'
import { extract } from 'zs-extract'
import { createHash } from 'crypto'
import xfar from 'xfarr-api'
import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
//
import { savefrom } from '@bochilteam/scraper'
//
import { xpRange } from '../lib/levelling.js'
import db from '../lib/database.js' 
 //
//
//
//
//
import osu from 'node-os-utils'
//
//
let format = sizeFormatter({ 
import { createHash } from 'crypto'
//
import osu from 'node-os-utils'
import { sizeFormatter } from 'human-readable'
import { stickerLine, stickerTelegram } from '@bochilteam/scraper'
import { toPTT } from '../lib/converter.js'
import { toAudio } from '../lib/converter.js'
import { addExif } from '../lib/sticker.js'
//
  //
//
let { MessageType } = (await import('@adiwajshing/baileys')).default
handler.tags = ['menbalas']
handler.help = ['menbalas'].map(v => v + ' <nomor|nama|pesan>')
handler.command = /^(menfess|menfes)$/i
handler.private = true

export default handler
/////////////////
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('proses..')
  let res = `https://ziy.herokuapp.com/api/maker/rem?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'rem.jpg', `Nih kak`, m, false)
}
handler.help = ['logorem'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logorem)$/i
handler.register = false

handler.limit = false

export default handler
////// 
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zacros.my.id/asupan/hijaber'
	conn.sendButton(m.chat, 'Nih', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(china)$/i
handler.tags = ['asupan']
handler.help = ['hijaber']
handler.limit = false
export default handler
//////////////-------------
handler.help = ['stikersearch <name>'] 
 handler.tags = ['sticker', 'premium'] 
 handler.command = /^(ss|stickers|stickersearch|ssearch)$/i 
  
 handler.limit = true 
handler.premium = true

 export default handler 
  
 const delay = time => new Promise(res => setTimeout(res, time))
