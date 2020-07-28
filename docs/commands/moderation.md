---
id: mod
title: Moderation commands
sidebar_label: Moderation
---

### Purpose
Commands for moderating and managing users in a server.

### Commands
:::caution
Moderation commands require exact user matching, i.e. you must pass something that can only resolve to one specific user (tag, ID or mention).
:::

| Name         | Arguments                           | Description                                                                  | Example                                        |
|--------------|-------------------------------------|------------------------------------------------------------------------------|------------------------------------------------|
|warn          | <user..\> [reason] [points]         | Gives a user a warning.                                                      | -warn navy.gif#1998 spam                       |
|kick          | <user..\> [reason] [points]         | Kicks the user from the server.                                              | -kick navy.gif#1998 even more spam             |
|mute          | <user..\> [time] [reason] [points]  | Mutes the user.                                                              | -mute nolan#2887 3h also spamming              |
|ban           | <user..\> [time] [reason] [points]  | Bans the user for an optional time.                                          | -ban synthetic#3178 posting too dank memes     |
|softban       | <user..\> [reason] [points]         | Displays information about a user or returns a list of users with the key in their name.| -user navy.gif                      |
|strike        | <user..\> [reason] [points]         | Command specific for automod, selects punishment in accordance to a user's points.| |
|addrole       | <user..\> <role\> [reason]          | Adds the specified roles to the given users.                                 | |
|removerole    | <user..\> <role\> [reason]          | Removes the specified roles from the given users.                            | |
|nickname      | <user..\> [name] [reason]           | Sets the users' nicknames to the given name.                                 | |
|note          | <user..\> [reason] [points]         | Adds a note to the users' history. **Modpoints will not trigger automod**    | |
|prune         | [channel] <amount\> [reason]        | | |
|unban         | <user..\> [reason]                  | | |
|slowmode      | [channel..] <time\> [reason]        | | |
|snipe         | [channel]                           | | |
|unmute        | <user..\> [reason]                  | | |
|vckick        | <user..\> [reason] [points]         | | |
| | | | |