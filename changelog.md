# Changelog
## List of changes made for juke-bot

### 7/11/2018
- New package update

### 6/10/2018
- Added more tests for blizzard api functionality
- gitignore is added for convenience (now contains config.json file since informationw within needs to be private).
- README long due update!
- Added config file and node_modules to gitignore
- Removed node_modules directory (to install packages simply `npm install` with package-lock.json)

### 4/21/2018
- Enabled functionality to see name of user who queued audio stream.
- Added blizzard api functionality.
- Implemented blizzard api oauth service.
- Added World of Warcraft realm info console logging.

### 4/18/2018
- Added local play functionality, bot can now stream audio file given its path.
- Updated config file and help command as to now require a local path variable.
- Added templates to implement pause, unpause and stop for music.

### 4/7/2018
- Added play functionality, bot can now stream audio from given youtube url.
- Changed join and leave commands to now send messages to channel instead of replying within channel.

### 4/6/2018
- Added ping functionality for calculating user latency.
- Added mention functionality, now mentioning @juke-bot causes it to reply with current prefix and usage information.

### 4/5/2018
- Fixed echo truncate bug causing messages to be parsed incorrectly.
- Added join-leave functionality for voice channels.
- Added prefix functionality (change prefix - writes to config file).
- Moved switch statements to the dictionary of commands.

### 3/31/2018
- Fixed json schema having incorrect fields.

### 2/14/2018
- Added dot file (cd && ls config) for convenience.

### 1/24/2018
- Added and updated README.