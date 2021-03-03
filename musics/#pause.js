module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue){
        return message.channel.send("```There is nothing playing!```");
    }
    if(message.member.voice.channel != message.guild.me.voice.channel){
        return message.channel.send("```You need to join the voice chat first.```");
    }
    if(serverQueue.connection.dispatcher.paused){
        return message.channel.send("paused.");
    }
    serverQueue.connection.dispatcher.pause();{
        return message.channel.send("`Pausing.");
    }
}
module.exports.config = {
    name: "pause",
    aliases: ["p", "ps"]
}