const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("aide : *help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message',message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commande : \n ```commande d'aide``` *help \n ```commande de moderation``` \n *kick \n *ban");
    }

    if (message.content === "Salut"){
        message.reply("Salut à toi");
        console.log("Commande Salut effectué");
    }
});
