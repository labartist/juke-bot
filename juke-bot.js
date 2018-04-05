const Discord = require("discord.js");
const config = require("./config.json")
const client = new Discord.Client();

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
    let tosend = ['```JS', 
      '// Juke-Bot Commands',
      config.prefix + 'join  : "Joins current user voice channel"',	
      config.prefix + 'leave : "Leaves current user voice channel"',	
      config.prefix + 'play  : "Plays music if already joined to voice channel"', 
      config.prefix + 'echo  : "Best command ever"',
      config.prefix + 'git   : "Links git repository"',	
    '```'];
		message.channel.sendMessage(tosend.join('\n'));
	},
	'leave': (message) => {
    message.member.voiceChannel.leave();
    message.reply('Left Channel: ' + '**' + message.member.voiceChannel +'**');
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
  if (commands.hasOwnProperty(message.content.toLowerCase().slice(config.prefix.length).split(' ')[0])) commands[message.content.toLowerCase().slice(config.prefix.length).split(' ')[0]](message);

  if(message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. "-prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;
    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }

  // Misc Commands (using switch)
  switch (command) {
    case "echo":
      let tx = args;
      message.channel.send(tx);
      break;
    case "git":
      message.channel.send(`https://github.com/labartist/juke-bot`);
      break;
  }
});

client.login(config.token);