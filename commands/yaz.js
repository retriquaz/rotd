exports.run = (bot, message, args) => {
  if(!message.content.startsWith("r!yaz")){
    return;
  } else{

    if (message.author.id === bot.config.ownerId1){

       let yazı = args.slice(0).join(" ")
       message.delete()
       message.channel.send(yazı)
       .catch(console.error);
	   
     }
	  
     else {

       message.reply("Bu komut için yetkin yok.")
       message.delete()

 };
}
}
