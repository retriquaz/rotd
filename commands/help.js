const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  if(message.content !== "r!help"){
    return;
  } else{

  const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setThumbnail(url='https://cdn.discordapp.com/attachments/646115125627191297/646305686057123840/giphy_5.gif')
    .setAuthor("RiseOfTheDevilBot", "https://cdn.discordapp.com/avatars/669100368709419018/6a2525597597f55a59e9970fc7f658e8.png?size=128")
    .setFooter("İçin Oluşturuldu", message.author.avatarURL)
    .setTimestamp()
    .setDescription(bot.helplist)

    message.channel.send("" + message.author.toString() + " Lets rise a little devil", embed);
}
}
