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
        message.channel.sendMessage("Liste des commande : \n ```commande d'aide``` *help \n *info \n *serv ");
    }

    if (message.content === "Salut"){
        message.reply("Salut à toi");
        console.log("Commande Salut effectué");
    }

    if (message.content === prefix + "info"){
        message.reply(" bot crée le_12/11/2018 à 19:19 par fufu");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "serv"){
        message.reply(" MEGA GHOST FUFU \n proprietaire : fufu /n co-proprietaire BTS fan et Banana")
        console.log("Commande effectué");
    }

bot.on("guildMemberAdd", member => {
   member.guild.channels.find("name", "generale").send(`Bienvenue ${member} dans la MGFA amuse toi bien`);
});


