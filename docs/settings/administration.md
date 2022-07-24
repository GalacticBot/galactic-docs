---
id: admin-settings
title: Administrative settings
sidebar_label: Administration
---

# Administrative settings
Admin settings
Configured with `/administration [setting]`

| Name                                | Description                                                                                  |
|-------------------------------------|----------------------------------------------------------------------------------------------|
| [Commands](#commands)               | Enable and disable commands.                                                                 |
| [Ignore Channels](#ignore-channels) | Ignore commands in given channels.                                                           |
| [Permission Type](#permission-type) | What to base command privileges on.                                                          |
| [Protection](#protection)           | How to determine immunity from moderation on.                                                |
| [Silent](#silent)                   | Disable inline moderation responses.                                                         |

## Commands  
`/administration commands enable|disable|list [options]`  
Used to enable and disable commands in the server. With slash commands this can be done via the integration management in the Discord server settings.  

**Options**  
`commands`: The commands to disable. Applicable to enable & disable.  

## Ignore Channels  
`/administration ignore [options]`  
Used to tell the bot in which channels to ignore commands. The bypass list lets roles bypass the ignore. This is also something you can achieve through the integration management in the Discord server settings.  

**Options**  
`list`: Which list to modify.  
`method`: How to modify the given list.  

## Permission Type  
`/administration permissions [option]`  
Used to tell the bot which permissions to use when evaluating if a user is privileged to run a command. If the commands are not visible for users who are supposed to have permissions to run them, ensure they have permission to use them in the integrations tab in the Discord server settings.  

**Option**  
`type`: Choices are discord, grant, both.   

## Protection  
`/administration protection [options]`  
Used to tell the bot how to determine if a moderator is able to run a moderation command on a user.  

**Options**  
`type`: Choices are role, position.  
`roles`: How to modify the roles list used for the role protection type.  

## Silent  
`/administration silent [option]`  
Toggle whether the bot responds in the channel the command is ran in.  

**Option**
`enabled`: Toggle enable state  
