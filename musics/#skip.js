const Discord = require('discord.js');
module.exports.run = async (client, message, args, queue, searcher) => {
    
    // const skipVote = message.channel.cache.find(usersC => usersC.name === "required");
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue){
        return message.channel.send("```There is nothing playing!```");
    }
    if(message.member.voice.channel != message.guild.me.voice.channel){
        return message.channel.send("```You need to join the voice chat first.```");
    }
    let usersC = message.member.voice.channel.members.size;
    let required = Math.ceil(usersC / 2);

    if (serverQueue.skipVotes.includes(message.member.id))
    {
        let strip = `----------------------------------------- `
        let notinvcChannel = new Discord.MessageEmbed()
            .addField(strip, "You already voted to skip!")
            .setColor("PURPLE")
        return message.channel.send(notinvcChannel);
    }

    // if (serverQueue.skipVotes.length <= required) {
    //     let vmsg = new Discord.MessageEmbed()

    //     let messageEmbed = await message.channel.send(vmsg);
    //     messageEmbed.react(skipEmote);
    //     client.on('messageReactionAdd', async (reaction, user) => {
    //         if (reaction.message.partial) await reaction.message.fetch();
    //         if (reaction.partial) await reaction.fetch();
    //         if (user.bot) return;
    //         if (!reaction.message.guild) return;

    //         if (reaction.message.channel.id == serverQueue) {
    //             if (reaction.emoji.name === skipEmote) {
    //                 await reaction.message.guild.members.cache.get(user.id).serverQueue.add(sva);
    //             }
    //         } else {
    //             return;
    //         }
    //     });

    // }
    serverQueue.skipVotes.push(message.member.id)
    message.channel.send(`You voted to skip the song ${serverQueue.skipVotes.length}/${required} votes`)

    if (serverQueue.skipVotes.length >= required) {
        serverQueue.connection.dispatcher.end();
        serverQueue.skipVotes = [];
        let sDesc = `Poor Song`
        let msg = new Discord.MessageEmbed()
            .setTitle("Skiped :")
            .addField(serverQueue.songs[0].title, "----------")
            .addField("Song has been skipped", sDesc)
            .setThumbnail(serverQueue.songs[0].thumbnail)
            .setColor("PURPLE")
        return message.channel.send(msg);
    }



}
module.exports.config = {
    name: "skip",
    aliases: ["s", "sk"]
}