const Discord = require("discord.js");
module.exports = (bot, member) => {
 const genel = bot.channels.get('642814380932857859');
 const sıra = bot.channels.get('635092553338716190');
 if(genel){
   const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setFooter("İçin Oluşturuldu", member.user.avatarURL)
    .setTimestamp()
    .setImage(url='https://cdn.discordapp.com/attachments/646115125627191297/646305686057123840/giphy_5.gif')
 genel.send(`**:neroxsy: Rise of the Devil Adlı Sunucumuza Hoşgeldin <@${member.user.id}> \n 
 :yan: Kaydının yapılması için sesli odaya gelip ses vermen gerekli. \n  
 :neroxsy3: <@&642814764334186509> Rolündeki Yetkililer Seninle İlgilencektir.**`, embed);
   
 }
 if(sıra){
   sıra.send(`<@${member.user.id}> Adlı kullanıcı onay beklemektedir.`);
 }
 var rol = member.guild.roles.get("642815868094513152");
 member.addRole(rol)
 .catch(console.error);
}
