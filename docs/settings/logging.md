---
id: logging-settings
title: Logging settings
sidebar_label: Logging
---

# Logging settings
Logging settings  
Configured with `/logging [setting]`

| Name                                | Description                                                                                  |
|-------------------------------------|----------------------------------------------------------------------------------------------|
| [DM Infractions](#dm-infractions)   | Which if any infractions are sent to the recipient's DMs.                                    |
| [Errors](#errors)                   | Logging of runtime issues you can remedy with configuration or editing permissions.          |
| [Members](#members)                 | Member joins and leaves.                                                                     |
| [Messages](#messages)               | Logging of messages.                                                                         |
| [Moderation](#moderation)           | Which infractions if any are logged to a chosen channel.                                     |
| [Nicknames](#nicknames)             | Logging of nickname changes.                                                                 |
| [Voice Channels](#voice-channels)   | Logging of voice channel joins and leaves.                                                   |

## DM Infractions  
`/logging dminfraction [options]`  
Configure which infractions are sent to the infraction target in DMs.  

**Options**  
`message`: The message to send with the infraction.  
`infraction`: The infraction for which to modify the message.  
`infractions`: Modify the list of infractions to send DMs for.  
`enabled`: Toggle enable state.  
`anonymous`: Whether to replace the moderator's username with the bot's in the DM.  

## Errors 
`/logging errors [options]`  
Log configuration related errors to a channel. These are issues you can typically remedy with additional configuration.  

**Options**  
`channel`: Channel into which log errors.  
`enabled`: Toggle enable state.  

## Members
`/logging members [options]`  
Log member joins and leaves.  

Supports the following template tags:  

| Tag           | Description               |
|---------------|---------------------------|
| `{mention}`   | mentions the user         |
| `{tag}`       | username#discriminator    |
| `{username}`  | username                  |
| `{guildsize}` | member count of the server|
| `{guildname}` | name of the server        |
| `{accage}`    | age of the account        |
| `{id}`        | ID of the account         |

**Options**  
`enabled`: Toggle enable state.  
`channel`: Channel where to log.  
`join`: Join message.  
`leave`: Leave message.  

## Messages
`/logging messages [options]`  
Log messages.

**Options**  
`channel`: Channel where to log.  
`enabled`: Toggle enable state.  
`attachments`: Whether to log images. Premium option.  
`method`: How to modify the list.  
`list`: Which list to modify.  

## Moderation
`/logging moderation [options]`  
Log moderation actions.  

**Options**  
`channel`: Channel where to log.  
`enabled`: Toggle enable state.  
`infraction`: Modify which infractions to log in the channel, does not affect which infractions are logged in the database.  
`anonymous`: Whether to replace the moderator's username with the bot's in the log.  

## Nicknames
`/logging nicknames [options]`  
Log member nickname changes.  

**Options**  
`channel`: Channel where to log.  
`enabled`: Toggle enable state.  

## Voice Channels
`/logging voice [options]`  
Log voice channel joins and leaves.  

**Options**  
`channel`: Channel where to log.  
`enabled`: Toggle enable state.  