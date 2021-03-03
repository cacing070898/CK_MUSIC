const Discord = require('discord.js');
module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue){
        return message.channel.send("```There is nothing playing!```");
    }
    if(message.member.voice.channel != message.guild.me.voice.channel){
        return message.channel.send("```You need to join the voice chat first.```");
    }
    switch (args[0]) {
        case 'all':
            serverQueue.loopall = !serverQueue.loopall;
            serverQueue.loopone = false;
            if (serverQueue.loopall === true) {
                let lpallon = new Discord.MessageEmbed()
                    .setTitle("Loop all for this song has been turned on! :")
                    .addField(serverQueue.songs[0].title, "----------")
                    .setThumbnail(serverQueue.songs[0].thumbnail)
                    .setColor("PURPLE")
                return message.channel.send(lpallon);
            }
            else if (serverQueue.loopall === false) {
                let lpalloff = new Discord.MessageEmbed()
                    .setTitle("Loop all for this song has been turned off! :")
                    .addField(serverQueue.songs[0].title, "----------")
                    .setThumbnail(serverQueue.songs[0].thumbnail)
                    .setColor("PURPLE")
                return message.channel.send(lpalloff);
            }
            break;
        case 'one':
            serverQueue.loopone = !serverQueue.loopone;
            serverQueue.loopall = false;
            if (serverQueue.loopone === true) {
                let lponeon = new Discord.MessageEmbed()
                    .setTitle("Loop one for this song has been turned on! :")
                    .addField(serverQueue.songs[0].title, "----------")
                    .setThumbnail(serverQueue.songs[0].thumbnail)
                    .setColor("PURPLE")
                return message.channel.send(lponeon);
            }
            else if (serverQueue.loopone === false) {
                let lponeoff = new Discord.MessageEmbed()
                    .setTitle("Loop one for this song has been turned off! :")
                    .addField(serverQueue.songs[0].title, "----------")
                    .setThumbnail(serverQueue.songs[0].thumbnail)
                    .setColor("PURPLE")
                return message.channel.send(lponeoff);
            }
            break;
        case 'off':
            serverQueue.loopall = false;
            serverQueue.loopone = false;
            {
                let lpoff = new Discord.MessageEmbed()
                    .setTitle("All Loop for this song has been turned off! :")
                    .addField(serverQueue.songs[0].title, "----------")
                    .setThumbnail(serverQueue.songs[0].thumbnail)
                    .setColor("PURPLE")
                return message.channel.send(lpoff);
            }
            break;
        default:
            {
                let loopdesc = new Discord.MessageEmbed()
                    .addField("Please specify what loop you want.", "!loop <one / all / off>")
                    .setColor("PURPLE")
                return message.channel.send(loopdesc);
            }
    }
}
module.exports.config = {
    name: "loop",
    aliases: ["l", "lp"]
}