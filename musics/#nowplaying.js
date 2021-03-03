const Discord = require("discord.js");
module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id);
    if(!serverQueue){
        return message.channel.send("```There is nothing playing!```");
    }
    if(message.member.voice.channel != message.guild.me.voice.channel){
        return message.channel.send("```You need to join the voice chat first.```");
    }
    let dur = `${parseInt(serverQueue.songs[0].vLength / 60)}:${serverQueue.songs[0].vLength - 60 * parseInt(serverQueue.songs[0].vLength / 60)}`
    let np = new Discord.MessageEmbed()
        .setTitle("Now Playing:")
        .addField(serverQueue.songs[0].title, "----------")
        .addField("Duration: ", dur)
        .setThumbnail(serverQueue.songs[0].thumbnail)
        .setFooter(`Requested by :` + message.author.username)
        .setColor("PURPLE")
    return message.channel.send(np);
}
module.exports.config = {
    name: "nowplaying",
    aliases: ['np', 'nowplay']
}