# juke-bot
## Personal Discord Music Bot (and other functionalities)

### Usage
Requires: config file (json) schema:
```JavaScript
{
  "token",
  "prefix",
  "clientID",
  "username"
}
```

On command line to activate bot:
```Bash
node [nameoffile.js]
# in this case the name of file will be juke-bot.js

We will have the following:
$ node juke-bot.js
juke-bot online!

To turn off, just abord (Ctrl+C)
```

Commands: TODO
```Java
-play     plays music
 Usage: give space after command
 [url]  e.g. youtube link url/music or playlist
 [name] e.g. name of music (search functionality)

-pause    pauses current music played
-unpause  unpauses current music played
-list     lists current queue of music
-queue    adds to queue
-clear    clears queue
```