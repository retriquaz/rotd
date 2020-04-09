const Discord = require("discord.js");
module.exports = (bot, member) => {
 const genel = bot.channels.get('697822538507485304');
 const sıra = bot.channels.get('697820359071891546');
 if(genel){
   const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setFooter("İçin Oluşturuldu", member.user.avatarURL)
    .setTimestamp()
    .setImage(url='https://cdn.discordapp.com/attachments/646115125627191297/646305686057123840/giphy_5.gif')
 genel.send(`**<:hg:669191375396536321> Rise of the Devil Adlı Sunucumuza Hoşgeldin <@${member.user.id}> \n 
 <:devil:669191067244953603> Kaydının yapılması için sesli odaya gelip ses vermen gerekli. \n  
 <:devil2:669191118218461195> <@&642814764334186509> Rolündeki Yetkililer Seninle İlgilencektir.**`, embed);
   
 }
 if(sıra){
   sıra.send(`<@${member.user.id}> Adlı kullanıcı onay beklemektedir.`);
 }
 var rol = member.guild.roles.get("642815868094513152");
 member.addRole(rol)
 .catch(console.error);
}
