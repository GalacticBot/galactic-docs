---
id: mod
title: Moderation commands
sidebar_label: Moderation
---

# Moderation Commands
Commands for moderating and managing users in a server.

---
:::caution
Moderation commands require exact user matching, i.e. you must pass something that can only resolve to one specific user (tag, ID or mention).
:::

| Name                           | Description                                                                                  |
|--------------------------------|----------------------------------------------------------------------------------------------|
| [Ban](#ban)                    | Bans the user(s), optionally for a given time.                                               |
| [Case](#Case)                  | Display infraction information.                                                              |
| [Dehoist](#infraction-commands)| Remove hoisting characters from a user's display name.                                       |
| [Edit](#Edit)                  | Edit an infraction.                                                                          |
| [History](#History)            | Display a user's moderation history, can also be used to display a moderator's actions.      |
| [Kick](#infraction-commands)   | Kick given user(s).                                                                          |
| [Lockdown](#Lockdown)          | Lockdown given channel(s), optionally for a given duration                                   |
| [Modtimers](#Modtimers)        | Display active timed infractions.                                                            |
| [Mute](#Mute)                  | Mute given user(s).                                                                          |
| [Nickname](#Nickname)          | Change user(s) nickame(s).                                                                   |
| [Note](#infraction-commands)   | Add a note to user(s) moderation history.                                                    |
| [Prune](#Prune)                | Remove several messages from a channel at once.                                              |
| [Resolve](#Resolve)            | Resolve a case. Undoes the action taken, i.e. will unban a banned user if a ban is resolved. |
| [Roles](#Roles)                | Manage user(s) roles.                                                                        |
| [Slowmode](#Slowmode)          | Change the slowmode in channel(s).                                                           |
| [Softban](#Softban)            | Remove user(s) from the server, removing their recent messages.                              |
| [Staff](#Staff)                | Used to allow users summon moderators through a role.                                        |
| [Unban](#Unban)                | Unbans user(s).                                                                              |
| [Unlockdown](#Unlockdown)      | Lifts lockdown(s).                                                                           |
| [Unmute](#Unmute)              | Lifts user(s) mute.                                                                          |
| [Unresolve](#Unresolve)        | Unresolves the case and reapplies the actions.                                               |
| [Warn](#infraction-commands)   | Warns the given user(s).                                                                     |



## Infraction commands
Most of the infraction commands share these base options. Any deviations from these will be noted below.  
`users`: The users to issue infractions to.  
`points`: Only applicable when moderation points are enabled, assigns the given number of points to the infraction.  
`expiration`: How long the points are relevant.  
`force`: Only applicable when automatic infraction escalation is enabled, bypasses said escalation.  
`silent`: Whether the bot should DM the receiver (defaults to whatever the DM log setting is).  
`reason`: Reason for the infraction.  
`prune`: Amount of messages to prune from the user in the channel the infraction is given in.  

Additional options will be denoted with a plus (+) sign, a missing option will be denoted with a minus (-) sign.  
The commands **dehoist**, **kick**, **note** and **warn** only use these default options.

### Ban  
\+ `duration`: How long the ban should last.  
\+ `days`: How many days worth of messages to delete (same option discord provides when using the built in ban).  

### Lockdown  
\- `users`, `points`, `expiration`, `force`, `silent`  
\+ `channels`: The channels to lockdown.  
\+ `duration`: How long the lockdown should last.  

### Mute  
\+ `duration`: How long the mute should last.  

### Nickname  
\+ `name`: The new nickname to issue.  

### Prune  
\+ `channels`: The channels in which to prune messages.  
\+ `amount`: Amount of messages to look through.  
**Note that the actual amount of messages deleted may deviate from the amount if a user is specified. This only defines how many messages to filter through!**  
\+ `bots`: Limit to messages sent by bots.  
\+ `humans`: Limit to messages sent by regular users.  
\+ `contains`: Limit to messages containing the given text.  
\+ `startswith`: Limit to messages starting with the given text.  
\+ `endswith`: Limit to messages ending with the given text.  
\+ `text`: Limit to messages only containing text.  
\+ `invites`:  Limit to messages only containing invites.  
\+ `links`:  Limit to messages only containing links.  
\+ `emojis`:  Limit to messages only containing emojis.  
\+ `after`:  Limit to messages after a specific message.  
\+ `before`:  Limit to messages before a specific message.  
\+ `logic`:  Which logic type to combine options with, defaults to OR.  

### Roles  
\- `points`, `expiration`, `force`  
\+ `duration`: Optional duration for the addition/removal of roles.  
\+ `roles`: Which roles to give/take.  

### Slowmode  
\- `users`, `points`, `expiration`, `force`, `silent`  
\+ `limit`: The slowmode to set.  
\+ `channels`: The channels in which to set the slowmode, defaults to the one the command is ran in.  

### Softban  
\+ `days`: How many days worth of messages to delete (same option discord provides when using the built in ban).  

### Unban  
\- `points`, `expiration`, `force`, `prune`  

### Unlockdown  
\- `users`, `points`, `expiration`, `force`, `prune`, `silent`  
\+ `channels`: The channels to lockdown.  

### Unmute  
\- `points`, `expiration`, `prune`, `force`  

---
## Other  
Generic moderation related commands.
### Case  
`id`: The infraction ID of the case to display.  
`export`: Print out the JSON formatted infraction.  
`verbose`: Display additional information.  
`changes`: Display changes done to the infraction.  

### Edit  
`case`: Which infraction to edit.  
`reason`: New reason to assign. Respond with "long" to give a lengthier reason than the response box allows.  
`points`: New point value to assign.  
`expiration`: New expiration for the points.  
`duration`: New duration for the infraction if the infraction supports durations.  

### History  
`before`: Infractions from before the given date.  
`after`: Infractions after the given date.  
`verbose`: Display a more verbose output.  
`oldest`: Display oldest infractions first.  
`export`: Print out the JSON formatted history (limited to server admins).  
`private`: DMs the history.  
`type`: Filter by infraction type.  
`pagesize`: How many infractions to show per page. Defaults to 5.  
`page`: Which page to view.  
`user`: Filter by receiver.  
`moderator`: Filter by moderator.  
`channel`: Filter by channel (for infractions like lockdown & slowmode).  

### Modtimers
No options. 

### Resolve  
`case`: The infraction ID to resolve.  
`reason`: Reason for resolving.  
`notify`: Attempts to notify the user that their infraction has been resolved.  

### Staff  
No options.  

### Unresolve
`case`: The infraction ID to resolve.  
`reason`: Reason for resolving.  