---
id: InitialSetup
title: Initial Configuration
sidebar_label: Initial Configuration
sidebar_position: 1
---

## Getting started with Galactic configration  
This article is meant to get you started with the basic configuration of the bot with the essential settings for moderation purposes. Remember that the bot is just a tool for your moderation team and ultimately the moderators are responsible for moderation. The purpose of the bot is to streamline your work and complement Discord's features.

:::caution Permissions heads-up!  
Keep in mind that, even though the bot may have some bugs here and there, the most basic features are thoroughly tested and generally bug-free. If you're experiencing issues, make sure that you've configured your server permissions right! The bot can't perform certain actions if it lacks the permissions to do so. Generally the bot will tell you if it is missing a permission.
:::

:::tip Text based commands
Even though slash commands are now the default, text commands are still available. You'll just have to enable them through `/administration textcommands enabled:True`.  
See [Text Commands](./TextCommands) for more on those.

You may also be interested in changing the prefix, which you can do with `/administration textcommands prefix:-`.  
You can also use a mention instead, `@Galactic administration textcommands -`  
:::

## Basic configuration - the essentials  
As far as this bot goes, essential configurations are permissions and logging. If you already have a properly setup moderator role with the relevant permissions, the bot should work out of the box with minimal configuration, as by default the bot will check the role permissions of a user.  

The bot also provides logging functionality for various things. The most essential of which are infraction logs and message logs, though there are a few more which you can configure as you see fit. The bot will keep track of all infractions even if you don't configure a moderation log channel, you just have to query for them with the `history` command.

### Permissions  

:::caution Missing slash commands?
Moderators not able to see all the moderation commands when trying to type out a slash command?  
This can be remedied by going into `Server Settings > Integrations > Galactic > Command Permissions`, click on `Add roles or members` and add your moderator role and click `Allow`.  
Anyone with the role should now be able to see all of the bot's commands.
:::
The bot can be set to operate in 3 different permission modes:  
- `discord` Only discord-based permissions work with bot commands.
- `grant` Only grantable permissions from the bot work with bot commands. (requires you to set everything up yourself)
- `both` Both discord-based and grantable permissions work with bot commands. Having either a discord permission or a granted permission will let you run the command. (default)  

Changing [Permission Types](../settings/admin-settings#permission-type) is as simple as using `/administration permissions type:<type>`

To find out the necessary permissions for each command, run `/help component:<command>`. Discord based permissions will look like `BanMembers`, while a granted permission will look like `command:ban`.  
Users with insufficient permissions will receive an error message stating that they are missing a permission.

Granting permissions to users and roles is done with the `grant` command.  
The syntax is `/permissions grant <role..|user..> <permission..>`, where permsission is either a module or a command.  
**Ex:** `/permissions grant role:"moderation team" permission:"module:moderation command:activity"`
:::note
Only users that the bot considers administrators will be able to use the grant command. Administrators are users who have the `Administrator` or `ManageGuild` permissions on Discord.
:::

***

While strictly not a permission setting, you may want to block normal users from using commands in every channel. This is something you can configure with the [ignore setting](../settings/admin-settings#ignore-channels). Make sure to add your moderator role to the bypass list, otherwise the bot will ignore them too!

For slash commands this can be achieved in the integration settings by denying the everyone role permissions to the commands.

***

### Logging  
The bot offers several types of logs, though not everybody will need all of them. The most pertient logs as far as this guide goes are message and moderation logging.
:::note
Logging in this context means that the bot simply sends a log in a designated channel. The only things the bot stores in its database are infraction logs, and in some cases message attachments. Attachment logging is a paid feature and the entries are regularly swept.
:::

Message logs can be configured with `/logging messages channel:#channel`. Make sure the bot has necessary permissions to manage webhooks in the channel you wish to use as a log. If you have channels you wish not to have logged, you can exclude them with `/logging messages list:ignore method:add`, which will prompt you to respond with channels to ignore. You can do the same with roles with `/logging messages list:bypass method:add`. 

Moderation logs are configured in a similar fashion, with `/logging moderation channel:#channel`. Again, make sure the bot has the necessary permissions in the channel, in this case `SendMessages` and `EmbedLinks`. If you wish to exclude certain infraction types from being logged you can do so with `/logging moderation infractions:remove`, which will prompt you to respond with which infractions to remove.

**Relevant links:**  
[Moderation log setting](../settings/logging-settings#moderation)  
[Message log setting](../settings/logging-settings#messages)  

### Mute  
Setting up mute functionality is easily done with the [mute setting](../settings/moderation-settings#mute). If you already have an existing mute role, you can designate it as the role the bot should use with `/moderation mute role:"role name"`. If you don't have an existing role and don't want to manually create it, you can have the bot do it for you with `/moderation mute create:"role name"`.

## More settings and advanced configuration  
The bot offers more complex features as well, such as filters and various other logs. To learn about filters see the guide on [filters](./Filters).