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
  "APIKey"
  "Mpath"
}
```

On command line to activate bot:
```Bash
node [nameoffile.js]

# in this case the name of file will be juke-bot.js
```

We will have the following:
```Bash
$ node juke-bot.js
juke-bot online!

# To turn off, simply abort (Ctrl+C)
```
Commands:
```JS
join      "Joins current user voice channel"
leave     "Leaves current user voice channel"
play      "Plays music url and joins voice channel if haven't"
playlocal "Plays local file and joins voice channel if haven't"
echo      "Echoes user input"
ping      "Returns user latency to voice channel"
git       "Links git repository"
prefix    "Changes command prefix"
```