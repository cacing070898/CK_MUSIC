const Discord = require("discord.js");
module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue){
        return message.channel.send("```There is nothing playing!```");
    }
    if(message.member.voice.channel != message.guild.me.voice.channel){
        return message.channel.send("```You need to join the voice chat first.```");
    }
    if(serverQueue.connection.dispatcher.resumed){
        return message.channel.send("`resumed");
    }
    serverQueue.connection.dispatcher.resume();{
        return message.channel.send("`resuming");
    }
}
module.exports.config = {
    name: "resume",
    aliases: ["r", "rs"]
}