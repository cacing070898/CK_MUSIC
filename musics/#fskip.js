const Discord = require('discord.js');
module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if (message.member.voice.channel != message.guild.me.voice.channel) {
        let strip = `----------------------------------------- `
        let notinvcChannel = new Discord.MessageEmbed()
            .addField(strip, "There is nothing to skip!")
            .setColor("PURPLE")
        return message.channel.send(notinvcChannel);
    }
    if (!serverQueue) {
        let strip = `----------------------------------------- `
        let nomusic = new Discord.MessageEmbed()
            .addField(strip, "There is nothing to skip!")
            .setColor("PURPLE")
        return message.channel.send(nomusic);
    }
    if (serverQueue) {
        serverQueue.connection.dispatcher.end();
        serverQueue.skipVotes = [];
        let fsDesc = `Very Poor Song`
        let fskip = new Discord.MessageEmbed()
            .setTitle("Force Skip :")
            .addField(serverQueue.songs[0].title, "----------")
            .addField("Maybe you really don't like this song", fsDesc)
            .setThumbnail(serverQueue.songs[0].thumbnail)
            .setColor("PURPLE")
        return message.channel.send(fskip);
        // let roleN = message.guild.roles.cache.find(role => role.name === "DJ")
        // if(!message.member.roles.cache.get(roleN.id))
        //     return message.channel.send("You don't have the DJ role");
    }
}
module.exports.config = {
    name: "fskip",
    aliases: ["fs", "fsk"]
}