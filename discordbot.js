const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, MessageEmbed, GuildMember, Role, avatarURL, display, User, guild, memberCount } = require('discord.js');

const token = '';

const prefix = '$';

/////////////////////////////////////////////////////////////////////////////// !info 'member'///////////////////////////////////////////////////////////////////////////////////

const Melox = new MessageEmbed()
    .setTitle('User information')
    .addField('Username:', 'Melox')
   // .addField('Rang:', message.User('269488597651030017').roles.highest)
    .addField('Geburtstag:', '02.07.2002')
    .setThumbnail('https://cdn.discordapp.com/avatars/269488597651030017/590ca397e950541745008f0c5a3b28b2.webp?size=128');

// const _____ = new MessageEmbed()
//    .setTitle('User information')
//    .addField('Username:', '____')
//    .addField('Rang:', '_____')
//    .addField('Geburtstag:', 'XX.XX.XXXX')
//    .setThumbnail();

const helpembed = new MessageEmbed()
    .setTitle('This is how I can help you')
    .addField('List of commands:', prefix + 'commands')
    .addField('suicide prevention hotline:', '0800 1110 222')
    .addField('contact an admin:', prefix + 'admin');


const adminalert = 1 ;


//////////////////////////////////////////////////////////////////////////////Bot Start////////////////////////////////////////////////////////////////////////////////////////////
bot.on('ready', () => {
    console.log(`This bot is online`);
});

bot.on("guildMemberAdd", member => {
    member.send(`Welcome on the Toxi server! Please be aware that we won't tolerate troll, spam or harassment. Have fun!`)
})


bot.on('message', message=> {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'status':
            message.reply('Promethean Guardian - D 00.1.320 online.');
            break;
        case 'help':
            message.channel.send(helpembed);
            break;
        case 'website':
            message.reply('As of yet, Toxi does not have a website');
            break;
        case 'twitter':
            message.reply('Here is the link to the official Toxi twitter account: https://twitter.com/Toxi2015?s=20');
            break;
        case 'youtube':
            message.reply('Here is the link to the official Toxi youtube channel: https://www.youtube.com/channel/UCNhzSAP-Kc8z-rZ1Os1W6nA/featured');
            break;
        case 'twitch':
            message.reply('Here is the link to the official Toxi twitch stream: https://www.twitch.tv/toxi_league/');
            break;
        case 'reddit':
            message.reply('Here is the link to the official Toxi subreddit: https://www.reddit.com/r/toxi/');
            break;
        case 'thx':
            message.reply('you are very welcome!');
            break;
        case 'commands':
            message.channel.send('Here is a list of available commands:\n' + prefix + 'website\n' + prefix + 'twitter\n' + prefix + 'youtube\n' + prefix + 'twitch\n' + prefix + 'reddit\n' + prefix + 'thx\n' + prefix + 'info me\n' + prefix + 'info Melox\n' + prefix + 'scp 001 - 5999\n' ); // [prefix + '\n' ]
            break;
        case 'admin':
 //           if (valueof(adminalert == 1))
 //           {
            message.User.Id<285412951446257665> ( message.author + ' requires your help!');
            message.reply('An admin has been notified. You will be contacted as soon as possible. Please consider that this might take some time.');
//            }
//            const adminalert = adminalert - 1
            break;
        case 'reset':
            if (message.author.user('285412951446257665') = true)
            {
                const adminalert = 1 ;
            }
            else 
            {
                message.channel.send('You do not have the authority to use this command')
            }
            break;
       // case 'membercount':
       //     message.channel.send('This Server has' + toString(this.guild.memberCount) + 'members!');



////////////////////////////////////////////////////////////////////////////////// Scp code////////////////////////////////////////////////////////////////////////////////////////
        case 'scp':
            if (parseInt(args[1]) <= 6000 && parseInt(args[1]) >= 1)
            {
              //  const SCP = new MessageEmbed()
              //      .setTitle('SCP-' + args[1])
              //      .setThumbnail('http://scp-wiki.wdfiles.com/local--files/scp-' + args[1] + '/' +  + '.png')
              //  message.channel.send(SCP)
                message.channel.send('SCP-' + args[1] + ', Here you go:\nhttp://www.scp-wiki.net/scp-' + args[1]);
                
            } else {
                message.reply('Sorry, there is no article with this number (yet)');
            }
            break;

      //const embed = new messageEmbed()
      //    .setTitle('User information')
      //    .addField('username: ', Message.author.username)


/////////////////////////////////////////////////////////////////////////////// Information commands //////////////////////////////////////////////////////////////////////////////
        case 'info':
            if (args[1] === 'me') {
                const embed = new MessageEmbed()
                    .setTitle('User:  ' + message.author.username)
                    .setThumbnail(message.author.avatarURL())
                    .addField('User ID:', message.author.tag)
                    .addField('Rang:', message.member.roles.highest)
                    .setColor(message.member.roles.highest.color)
                message.channel.send(embed);
            }
            else if (args[1] === 'Melox') {
                message.channel.send(Melox);
            }
            
       //     else if (args[1] === '') {
       //         message.channel.send();
       //     }
            else if (!args[1]) {
              message.channel.send('Please specify what information you want to access');
            }
            else {
              message.channel.send('Sorry, I could not find the data you requested');
            }
            break;    
    }
   
})
bot.login(token);
