---
id: InitialSetup
title: Initial Configuration
sidebar_label: Initial Configuration
---

## Getting started with Galactic configration  
This article is meant to get you started with the basic configuration of the bot with the essential settings for moderation purposes. Remember that the bot is just a tool for your moderation team and ultimately the moderators are responsible for moderation. The purpose of the bot is to streamline your work and complement Discord's features.

:::caution Permissions heads-up!  
Keep in mind that, even though the bot may have some bugs here and there, the most basic features are thoroughly tested and generally bug-free. If you're experiencing issues, make sure that you've configured your server permissions right! The bot can't perform certain actions if it lacks the permissions to do so. Generally the bot will tell you if it is missing a permission.
:::

:::tip
There are plenty of bots on the Discord platform, so naturally a lot of bots will have clashing prefixes. If you happen to have a bot in your server that responds to the same prefix it's probably best to change the prefix. You can do so with `-settings prefix newPrefix`.  
You can also use a mention instead if the command clashes with another bot, `@Galactic settings prefix newPrefix`.  
If you're unsure of the current prefix, check it with `@Galactic prefix`.
:::

## Basic configuration - the essentials  
As far as this bot goes, essential configurations are permissions and logging. If you already have a properly setup moderator role with the relevant permissions, the bot should work out of the box with minimal configuration, as by default the bot will check the role permissions of a user.  

The bot also provides logging functionality for various things. The most essential of which are infraction logs and message logs, though there are a few more which you can configure as you see fit. The bot will keep track of all infractions even if you don't configure a moderation log channel, you just have to query for them with the `history` command.

### Permissions  
The bot can be set to operate in 3 different permission modes:  
- `discord` Only discord-based permissions work with bot commands.
- `grant` Only grantable permissions from the bot work with bot commands. (requires you to set everything up yourself)
- `both` Both discord-based and grantable permissions work with bot commands. Having either a discord permission or a granted permission will let you run the command. (default)  

Changing [Permission Types](../settings/administration/PermissionType) is as simple as using `-settings permissiontype <type>`

To find out the necessary permissions for each command, run `-help <command>`. Discord based permissions will look like `BAN_MEMBERS`, while a granted permission will look like `command:ban`.  
Users with insufficient permissions will receive an error message stating that they are missing a permission.

Granting permissions to users and roles is done with the `grant` command.  
The syntax is `-grant <role..|user..> <permission..>`, where permsission is either a module or a command.  
**Ex:** `-grant "moderation team" module:moderation command:activity`
:::note
Only users that the bot considers administrators will be able to use the grant command. Administrators are users who have the `ADMINISTRATOR` or `MANAGE_GUILD` permissions on Discord.
:::

***

While strictly not a permission setting, you may want to block normal users from using commands in every channel. This is something you can configure with the [ignore setting](../settings/administration/IgnoreChannels). Make sure to add your moderator role to the bypass list, otherwise the bot will ignore them too!

***

### Logging  
The bot offers several types of logs, though not everybody will need all of them. The most pertient logs as far as this guide goes are message and moderation logging.
:::note
Logging in this context means that the bot simply sends a log in a designated channel. The only things the bot stores in its database are infraction logs, and in some cases message attachments. Attachment logging is a paid feature and the entries are regularly swept.
:::

Message logs can be configured with `-settings messagelogs #channel`. Make sure the bot has necessary permissions to manage webhooks in the channel you wish to use as a log. If you have channels you wish not to have logged, you can exclude them with `-settings messagelogs ignore add #channel`. You can do the same with roles with `-settings messagelogs bypass add role`. 

Moderation logs are configured in a similar fashion, with `-settings modlogs #channel`. Again, make sure the bot has the necessary permissions in the channel, in this case `SEND_MESSAGES` and `EMBED_LINKS`. If you wish to exclude certain infraction types from being logged you can do so with `-settings modlogs remove <infractionType..>`.

**Relevant links:**  
[Moderation log setting](../settings/moderation/ModerationLog)  
[Message log setting](../settings/moderation/MessageLog)  

### Mute  
Setting up mute functionality is easily done with the [mute setting](../settings/moderation/Mute). If you already have an existing mute role, you can designate it as the role the bot should use with `-settings mute "role name"`. If you don't have an existing role and don't want to manually create it, you can have the bot do it for you with `-settings mute create "role name"`.

## More settings and advanced configuration  
The bot offers more complex features as well, such as filters and various other logs. To learn about filters see the guide on [filters](./Filters).