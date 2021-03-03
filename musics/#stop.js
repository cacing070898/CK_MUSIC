const Discord = require("discord.js");
module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue){
        return message.channel.send("```There is nothing playing!```");
    }
    if(message.member.voice.channel != message.guild.me.voice.channel){
        return message.channel.send("```You need to join the voice chat first.```");
    }
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    {
        let strip = `----------------------------------------- `
        let notinvcChannel = new Discord.MessageEmbed()
            .addField(strip, "Stoped")
            .setColor("PURPLE")
        return message.channel.send(notinvcChannel);
    }
}

module.exports.config = {
    name: "stop",
    aliases: ["st"]
}