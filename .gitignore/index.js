const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("aide : *help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.lenght).split(/ +/)
    command = args.shift().toLowerCase();

    if (command === prefix + "kick") {
        let modRole = message.guild.roles.find("name", "STAFFPERM");
        if (!message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas la permission de faire cette commande !").catch(console.error);        
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Merci de mentionner l'utilisateur à expulser.").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("Cet utulisateur est introuvable ou impossible à expulser !")
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci.").catch(console.error);
        }
        kickMember.kick().then(member => {
            message.reply(`${member.user.username} a été expulsé avec succès !`).catch(console.error);
            message.guild.channels.find("name", "general").send(`**${member.user.username} a été expulsé du discord par **${message.author.username}**!`)
        }).catch(console.error)
    }

    if (command === prefix + "ban") {
        let modRole = message.guild.roles.find("name", "STAFFPERM");
        if(message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas la permission de faire cette commande !").catch(console.error);
        }
        const member = message.mentions.members.first();
        if (!member) return message.reply("Merci de mentionner l'utilisateur à bannir !");
        member.ban().then(member => {
            message.reply(`${member.user.username} a été banni avec succès !`).catch(console.error);
            message.guild.channels.find("name", "general").send(`**${member.user.username} a été banni du discord par **${message.author.username}**`)
        }).catch(console.error)
}})

bot.on('message',message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commande : \n ***commande d'aide** \n *help \n *info \n *serv \n **commande de moderation** \n *kick \n *ban \n **commande de lien** \n *VSC \n *invite");
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
        message.reply(" MEGA GHOST FUFU \n proprietaire : fufu \n co-proprietaire BTS fan et Banana")
        console.log("Commande effectué");
    }

    if (message.content === prefix + "invite"){
        message.reply("l'invitation du discord est https://discord.gg/DVbUwKu");
        console.log("Commande effectué");
    }

bot.on
})

});


