const Discord = require("discord.js");
module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id);
    if(!serverQueue){
        return message.channel.send("```There is nothing playing!```");
    }
    if(message.member.voice.channel != message.guild.me.voice.channel){
        return message.channel.send("```You need to join the voice chat first.```");
    }
        let nowPlaying = serverQueue.songs[0];
        let qmsg = `now playing : ${nowPlaying.title}\n--------------\n`
        for(var i = 1; i < serverQueue.songs.length; i++)(
            qmsg += `${i}. ${serverQueue.songs[i].title}\n`
        )
        message.channel.send("" + qmsg + 'Requested by : '+ message.author.username + "");
    }
module.exports.config = {
    name: "queue",
    aliases: ['q']
}