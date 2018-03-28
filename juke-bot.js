const Discord = require("discord.js");
const config = require("./config.json")
const client = new Discord.Client();

// Todo
let curr = null;

client.on("ready", () => {
  console.log("juke-bot online!");
});

client.on("message", (message) => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (!message.content.startsWith(config.prefix) || message.author.bot) {
    return;
  }

  if(message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. "-prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;
    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }

  // Music Commands
  // if (message.content.startsWith(config.prefix + "play")) {
  //   message.channel.send("playing music");
  // }
  switch (command) {
    // Music Commands
    case "play":
      let [url] = args;
      message.channel.send(`Playing music: <${url}>`);
      break;
    case "echo":
      let [tx] = args;
      message.channel.send(`${tx}`);
      break;
    case "pause":
      message.channel.send("Paused");
      break;
    case "unpause":
      message.channel.send("Unpaused");
      break;
    case "git":
      message.channel.send(`https://github.com/labartist/juke-bot`);
      break;
  }
});

client.login(config.token);