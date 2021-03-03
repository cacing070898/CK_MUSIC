const Discord = require("discord.js");
module.exports.run = (client, message) => {
    let Info = new Discord.MessageEmbed()
    .setColor('#ffffff')
    .setTitle('The new music command for Cuk  has Coming !!! ')
    .setDescription('just adding some classes for Music Commands\n\n'
        + `fskip / fs / fsk             = Force Skip Song \n`
        + `loop / l / lp                = Looping song on the queue \n`
        + `lyrics / l / lry             = Lyric Finder\n`
        + `nowplaying / np / nowplay    = Current playing Song\n`
        + `pause / p / ps               = Pausing Currently playing Song\n`
        + `play / p / pl                = Play song, Absolutly\n`
        + `queue / q                    = List of Queue\n`
        + `clearqueue / reset / rq      = Remove all Queue\n`
        + `resume / r / rs              = Resuming Paused Song\n`
        + `skip / s / sk                = Skip queue\n`
        + `stop / st                    = Stop queue\n\n`
        + `Support Commands\n\n`
        + `info / tolong                = Command Info\n`
        + `ping / pg                    = Bot Stat\n\n\n`
        + `auth : Ahmad Afta a.K.a CACING\n\n`)
        .setFooter('Dont forget to Be Nice');   
        return message.channel.send(Info);
    }
module.exports.config = {
    name: "info",
    aliases: ["tolong"]
}