const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  if(!message.content.startsWith("r!nick")){
    return;
  } else{

       let nick = args.slice(1).join(" ");
       let user = message.mentions.members.first()
	   
       if (args.length === 0)
       return message.reply('Yanlış Kullanım   `r!nick @ETİKET yeninick`')

       else if(message.member.roles.has("642814764334186509")){
	   
	   user.setNickname(nick)
	   
	   const embed = new Discord.RichEmbed()
         .setTitle("**Nick Değiştirme Başarılı!**")
         .setColor("#5599ff")
         .setDescription(`**Nicki Değiştirilen Kullanıcı: <@${message.mentions.members.first().id}>**`)
         .setFooter("İçin Oluşturuldu", message.author.avatarURL)
	   message.channel.send(embed)
	   
	   
	   } else {
		   message.reply('Bu komutu kullanmak için yetkiniz yoktur.')
	   }


}
}
