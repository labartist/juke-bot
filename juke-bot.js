const Discord = require("discord.js");
const config = require("./config.json")
const client = new Discord.Client();
var fs = require('fs');

let queue = {};

const commands = {
	'join': (message) => {
    //message.reply('VIN I GOT THE GODDAMN JOIN MESSAGE BUT I HAVENT JOINED YET');
		return new Promise((resolve, reject) => {
      const voiceChannel = message.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') {
        return message.reply('FOOL! I CAN ONLY JOIN A VOICE CHANNEL!');
      }
      message.reply('Joined Channel: ' + '**' + message.member.voiceChannel + '**');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'help': (message) => {
    let tosend = ['Commands:','```JS', 
      config.prefix + 'join    "Joins current user voice channel"',	
      config.prefix + 'leave   "Leaves current user voice channel"',	
      config.prefix + 'play    "Plays music if already joined to voice channel"', 
      config.prefix + 'echo    "Echoes user input"',
      config.prefix + 'git     "Links git repository"',	
      config.prefix + 'prefix  "Changes prefix"',
    '```'];
		message.channel.send(tosend.join('\n'));
	},
	'leave': (message) => {
    message.member.voiceChannel.leave();
    message.reply('Left Channel: ' + '**' + message.member.voiceChannel +'**');
  },
  'echo': (message) => {
    message.channel.send(message.content.slice(config.prefix.length + 4).trim());
	},
  'git': (message) => {
    message.channel.send(`https://github.com/labartist/juke-bot`);
  },
  'prefix': (message) => {
    // Gets the prefix from the command (eg. "-prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change and save changes to config in memory
    config.prefix = newPrefix;
    message.channel.send('Prefix changed to ' + '`' + newPrefix + '`');
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }
}

client.on("ready", () => {
  console.log("juke-bot online!");
});

client.on("message", (message) => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (!message.content.startsWith(config.prefix) || message.author.bot) {
    return;
  }
  if (commands.hasOwnProperty(message.content.toLowerCase().slice(config.prefix.length).split(' ')[0])) {
    commands[message.content.toLowerCase().slice(config.prefix.length).split(' ')[0]](message);
  }

  // Commands (using switch)
  // switch (command) {
  // }
});

client.login(config.token);