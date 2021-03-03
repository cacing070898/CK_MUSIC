const Discord = require("discord.js");
module.exports.run = (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue){
        return message.channel.send("```There is nothing playing!```");
    }
    if(message.member.voice.channel != message.guild.me.voice.channel){
        return message.channel.send("```You need to join the voice chat first.```");
    }
    if (serverQueue.songs = []){
         
            let strip = `------ `
            let nomusic = new Discord.MessageEmbed()
                .addField(strip, "Reset !!!")
                .setColor("PURPLE")
            serverQueue.connection.dispatcher.end()
            return message.channel.send(nomusic);
            
    }
    
    // serverQueue.connection.dispatcher.end()
    // timer = setTimeout(function() {
    //     serverQueue.txtChannel.send("I didn't have anything to do so I just left!");
    //     serverQueue.vChannel.leave();
    //     queue.delete(guild.id);
    // }, 300000)
    // return;
}
module.exports.config = {
    name: "clearqueue",
    aliases: ["reset", "rq"]
}