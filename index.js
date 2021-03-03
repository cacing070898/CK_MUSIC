require("dotenv").config();
const { YTSearcher } = require('ytsearcher');
const Discord = require('discord.js');
const fs = require('fs');
const queue = new Map();
const client = new Discord.Client({partials: ['MESSAGE', "CHANNEL", "REACTION"]});
client.once('ready', () => {
    console.log('CUK Music on !');
});
const searcher = new YTSearcher({
    key: process.env.youtube_api,
    revealed: true
});
client.musics = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./musics/", (e, f) => {
    if(e) return console.error(e);
    f.forEach(file => {
        if(!file.endsWith(".js")) return
        console.log(`loaded : ${file}`)
        let cmd = require(`./musics/${file}`);
        let cmdName = cmd.config.name;
        client.musics.set(cmdName, cmd)
        cmd.config.aliases.forEach(alias => {
            client.aliases.set(alias, cmdName);
        })
    })
})
client.on("message", async(message) => {
    const prefix = process.env.prefix
    if(!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
    const cmd = client.musics.get(command) || client.musics.get(client.aliases.get(command));
    if(!cmd) return
    try {
        cmd.run(client, message, args, queue, searcher);
    }catch (err){
        return console.error(err)
    }
})
client.login(process.env.token)
