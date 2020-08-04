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

| Name         | Arguments                           | Description                                                                  |
|--------------|-------------------------------------|------------------------------------------------------------------------------|
|warn          | <user..\> [reason] [points]         | Gives a user a warning.                                                      |
|kick          | <user..\> [reason] [points]         | Kicks the user from the server.                                              |
|mute          | <user..\> [time] [reason] [points]  | Mutes the user.                                                              |
|ban           | <user..\> [time] [reason] [points]  | Bans the user for an optional time.                                          |
|softban       | <user..\> [reason] [points]         | Displays information about a user or returns a list of users with the key in their name.|
|strike        | <user..\> [reason] [points]         | Command specific for automod, selects punishment in accordance to a user's points.|
|addrole       | <user..\> <role..\> [reason]        | Adds the specified roles to the given users.                                 |
|removerole    | <user..\> <role..\> [reason]        | Removes the specified roles from the given users.                            |
|nickname      | <user..\> [name] [reason]           | Sets the users' nicknames to the given name.                                 |
|note          | <user..\> [reason] [points]         | Adds a note to the users' history. **Modpoints will not trigger automod**    |
|prune         | [channel..] <amount\> [reason]      | Prunes x messages from given channels.                                       |
|unban         | <user..\> [reason]                  | Unbans the given user. User IDs should be used to ensure proper functionality.|
|slowmode      | [channel..] <time\> [reason]        | Sets the slowmode in the given channels.                                     |
|snipe         | [channel]                           | Retrieves the latest deleted message in the given channel.                   |
|unmute        | <user..\> [reason]                  | Unmutes the given user.                                                      |
|vckick        | <user..\> [reason] [points]         | Kicks the given user from the voice channel they're in.                      |