const { Client, Events, GatewayIntentBits } = require('discord.js')

// dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(Events.ClientReady, readyClient => {
    console.log(`Pronto! Logado como ${readyClient.user.tag}`)
})

client.login(TOKEN)