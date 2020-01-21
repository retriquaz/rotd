const Discord = require("discord.js");
exports.run = (bot, message, args) => {
	
	if(message.member.roles.has("642814764334186509")){
		
		
		let member = message.mentions.members.first();
		var kayitsiz = message.guild.roles.get("642815868094513152");
		var kadın = message.guild.roles.get("626794114884567040");
		member.addRole(kadın).catch(console.error);
		member.removeRole(kayitsiz).catch(console.error);
		
		const rolal = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setFooter("İçin Oluşturuldu", message.author.avatarURL)
    .setTimestamp()
    .setDescription("" + message.mentions.members.first() +"  ** Kişisinden** <@&642815868094513152> **Rolü Alındı** :yan: ")

    message.channel.send(rolal);
	
	
	const rolver = new Discord.RichEmbed()
    .setColor(3066993)
    .setFooter("İçin Oluşturuldu", message.author.avatarURL)
    .setTimestamp()
    .setDescription("" + message.mentions.members.first() +"  ** Kişisine** <@&626794114884567040> **Rolü Verildi** :yan: ")

    message.channel.send(rolver);
		
	} else{
		  message.reply("Bu komut için yetkin yok.")
	}
	
	
	
	
	
	
}