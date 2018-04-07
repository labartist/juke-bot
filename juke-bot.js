const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
var opus = require('opusscript');
var yt = require('ytdl-core');
var fs = require('fs');

const streamOptions = { seek: 0, volume: 1 };

let queue = {};

const commands = {
  'play': (message) => {
    let url = message.content.split(' ')[1];
		yt.getInfo(url, function(err, info) {
      if (err) throw err;
			message.member.voiceChannel.join()
      .then(connection => {
        const stream = yt(url, { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
      })
      .catch(console.error);
      message.channel.send(`Playing: **${info.title}**`);
    });
	},
  'join': (message) => {
		return new Promise((resolve, reject) => {
      const voiceChannel = message.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') {
        return message.channel.send('Unable to join, please join a voice channel');
      }
      message.channel.send('Joined Channel: ' + '**' + message.member.voiceChannel + '**');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
  'help': (message) => {
    let tosend = ['**__All Commands__**',
	  '```JS', 
      config.prefix + 'join    "Joins current user voice channel"',	
      config.prefix + 'leave   "Leaves current user voice channel"',	
      config.prefix + 'play    "Plays music if already joined to voice channel"', 
      config.prefix + 'echo    "Echoes user input"',
      config.prefix + 'ping    "Returns user latency to voice channel"',
      config.prefix + 'git     "Links git repository"',	
      config.prefix + 'prefix  "Changes command prefix"',
    '```'];
		message.channel.send(tosend.join('\n'));
	},
  'leave': (message) => {
    message.member.voiceChannel.leave();
    message.channel.send('Left Channel: ' + '**' + message.member.voiceChannel +'**');
  },
  'echo': (message) => {
    message.reply(message.content.slice(config.prefix.length + 4).trim());
  },
  'ping': async (message) => {
    const m = await message.channel.send('Checking ping...');
    const ping = m.createdTimestamp - message.createdTimestamp;
    if (ping > 200) {
      m.edit(`Your ping is **${ping}ms**. What a laggy cunt.`);
    } else {
      m.edit(`Your ping is **${ping}ms**.`);
    }
	},
  'git': (message) => {
    message.channel.send(`https://github.com/labartist/juke-bot`);
  },
  'prefix': (message) => {
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
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

  // For @juke-bot
  if (message.isMentioned(client.user.id)) {
    message.reply('my current prefix is `' + config.prefix + '`.\n Use `' + config.prefix + 'help` for more information.');
  }
  // Prefix and botception filter
  if (!message.content.startsWith(config.prefix) || message.author.bot) {
    return;
  }
  // Commands filter
  if (commands.hasOwnProperty(message.content.toLowerCase().slice(config.prefix.length).split(' ')[0])) {
    commands[message.content.toLowerCase().slice(config.prefix.length).split(' ')[0]](message);
  }

  // Commands (using switch)
  // switch (command) {
  // }
});

client.login(config.token);