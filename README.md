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
```Java
join    "Joins current user voice channel"
leave   "Leaves current user voice channel"
play    "Plays music if already joined to voice channel"
echo    "Echoes user input"
git     "Links git repository"
prefix  "Changes prefix"
```