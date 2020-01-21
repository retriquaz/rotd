module.exports = (bot, ready) => {
  var channel = bot.channels.get('669099770551468059')
  bot.user.setActivity('Satanistlerle');
  console.log('Bot Hazır');
  setInterval(function(){
   channel.send("İmana mı gelsek?");
}, 43200000);
};
