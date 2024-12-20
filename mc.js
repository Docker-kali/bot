const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'openwrt.aternos.me', // minecraft server ip
  port: 45469,
  username: 'Bot', // username to join as if auth is `offline`, else a unique identifie>
  auth: 'offline',
  version: false // for offline mode servers, you can set this to 'offline'
  // port: 25565,              // set if you need a port that isn't 25565
  // version: false,           // only set if you need a specific version or snapshot (>
  // password: '12345678'      // set if you want to use password-based auth (may be un>
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)
