---
title: Galactic with slash commands
author: Navy.gif
author_url: https://github.com/Navy-gif
author_image_url: https://i.imgur.com/xzB8BTV.jpg
autor_title: Developer
description: Covering the changes with the bot in its first major update in a while.
tags: [slash commands, update, v3]
#image: https://i.imgur.com/xzB8BTV.jpg
# draft: true
# slug: slash-commands
---
#

# A long time coming
This update has been in the works for a while now, probably around 2 years now, I've honestly lost track.  
Needless to say, **a lot** has been updated and changed. Initially this rewrite was meant to be as close to the Galactic you all know from before with some major under-the-hood changes and improvements to make it easier to work with.  

Unfortunately midway through development of V3, Discord decided that how bots interact on the platform will change on a somewhat fundamental level. This obviously threw some major wrenches in development. 
Personally not the biggest fan of this change. Typing in commands with their respective options feels clunkier now and makes some of the commands look odd.  

# The changes  

## Permissions  
In case you are not familiar with the slash commands yet, they introduced client-sided permission controls for commands. Basically server administrators can now define who can see and run certain commands.  
This has some benefits and drawbacks. Firstly the bot defines some default permissions which prohibits normal users from running moderation commands, it sets these based on the permissions that you can see when running `/help component:<command>`.  
**If you already use Discord based permissions (i.e. you don't use permission types `grant` or `both`) for the bot this changes nothing for you**  

The drawback to this system would be present for those servers that would rather not grant the moderator role any permissions and would rather do permission control through the bot, to bypass this limitation you'd have to permit a role to use the commands, admittedly not a difficult thing to do.  
To do this, go to `Server Settings` -> `Integrations` -> `Galactic` -> `Command Permissions`, click add roles and add whichever roles you want to be able to run commands that are behind permissions and make sure to click on the checkmark.

**The bot still does its own permissions checks!**

## Commands
Commands have seen some relatively minor changes to them. This should be most if not all of them.

- Moderation and Moderator (log viewing) are now merged into one History command.
- Tempban is now a subfunctionality of Ban, essentially instead of `/tempban` you now use `/ban` with a time.  
- Same as above with Hardban, instead of `/hardban` you now use `/ban` with the days option.
- Reason is now Edit (has been for a while technically, albeit with an alias). Allows editing of more than just the reason.
- Avatar allows for viewing of server and global avatars depending on which option you use, `member` for the server avatar and `user` for the global one.
- Poll and Option are now one command with an option to specify the amount of questions.
- Roleadd and Roleremove are now one command `/roles add|remove`.
- User is now under `/info` with a couple of other structures.
- Grant, Revoke and Perms are now under `/permissions grant|revoke|list|show`. To see granted permissions use `/permissions show`, the list subcommand is used to display grantable permissions.
- Guild is now Server.
- Settings is now split into multiple categories, see below for details.

**Some unused or redundant commands have been removed.**

## Settings  

- The modmail setting and functionality has been removed in favour of a [standalone bot](https://github.com/GalacticBot/modmail).
- Enable & Disable are now under `/administration commands enable|disable` for better clarity.
- Description has been moved under `/administration indexing` (TODO)
- Killitwithfire is now dehoist (TODO)
- Lockdown setting has been removed (unsure if final, may make a return)
- Various options from the `-settings moderation` setting have been moved under other settings, the `silent` option is now `/administration silent`, `dmlogs` is now under `/logging dminfraction`, `anonymous` is now both under `/logging dminfraction` and `/logging moderation` to allow for more versatility.
- Mutetype, Muterole and Createmute are all under `/moderation mute` now.
- Mute has a new type option for type 3, which uses the new timeouts. This is now the default, but role based mutes are still available.
- Prefix has been removed, unless I get confirmation from discord that prefix based commands are permitted.
- Selfrole is still available as a command, but now has additional functionality of having a message component based select menu option.
- Staffrole and Staffrule are now both under `/moderation staff`.
- New error logging setting under `/logging errors`. This allows you to receive error messages for configuration based errors, e.g. if the bot doesn't have the necessary permissions to delete messages, or moderate someone.

### The command(s)
Out of all command interactions, settings have seen the most change. The most obvious one being that they no longer reside under a `/settings` command, rather are now listed on a module level.
So basically any logging related settings will be under `/logging`, moderation related ones under `/moderation` and so on. The one exception is `/settings list`. 
Certain common options have also seen a more standardised naming change. So for instance **roleignore** is now called **bypass** and **channelignore** is now called simply **ignore**.

This is not a change I wanted to implement, however, due to the limitations imposed by slash commands, this had to be done. The short explanation for this is that the size of the command definition payload was too big for discord (thanks discord, very cool).

Viewing current settings has also changed. Instead of viewing current settings as a whole, they are now displayed on a per setting basis through for instance `/moderation wordfilter`.

### Options
The most fundamental change to altering settings is in how options that contain lists are altered. Unfortunately due to how limiting slash commands are this has to be done in a somewhat clunky way of defining a `method` option with a `list` option. 
So for instance if you want to add a role to the bypass list for word filtering you'd use `/moderation wordfilter method:add list:bypass` which then triggers a prompt.
The one exception to this is settings where only one option contains a list of values, so for instance to make roles grantable, you'd use `/moderation grantable roles:add`, which triggers a prompt.  
**Options with single value configurations will have their own options**  

### Filtering
The actual available options in settings should be about the same as the old version.  
The most notable change here would be the addition of the `actions` option to filter settings. 
This is new functionality to automate actions based on filter triggers. Basically you can now properly issue warnings, mutes etc based on filtering instead of the janky solution the old version had which entirely relied on modpoints being set. 
Actions allow you to automatically issue infractions to varying degrees of specificity. You can for instance issue bans for specific words, mutes for words that appear in the explicit match list and warnings for generic (any) triggers.

This new system doesn't require modpoints but easily integrates with them and therefore with the automated infraction escalation.  
In addition to this, wordfilter and linkfilter are now separated into more lists to allow for more nuanced actions. The wordfilter has also seen an addition of a regex* filter list which both allows for user defined regex as well as presets.

The linkfilter has seen the option for a greylist added to it, natively this has no functional difference to the blacklist, both have the messages deleted, this is purely to allow for more nuanced actions, so you can ban for a specific group of links and just delete another.  

There is now also a new filtering-but-not-filtering setting called wordwatcher. Functionally this simply flags messages with certain keywords in them. This setting can use the same subset of regex as the word filter.  
Actions for this setting don't do anything by themselves, rather they're treated as quick action buttons that are attached to the flags.  

The wordwatcher is not the only new addition, there is now also a mention filtering setting. It allows you to filter out messages that contain too many mentions. While I'm not telling you how to do your configuration, I would recommend pairing this up with some kind of action.

<sub>*To be precise, the bot supports a subset of regex, specifically the following characters: <code>? ( ) | . [ ] -</code>. Any other characters are escaped and treated as normal characters.</sub>  

## Logging & Automoderation  
While no fundamental changes to automoderation (filtering) have occurred, they have been improved under the hood, on top of the additional filter lists and actions. The reason logging and automoderation are under the same heading here is because they now work together, in the sense that if a message is filtered, that is now reflected in the message logs, this includes whether the user was sanctioned based on an action for a filter or message flag.

# Finally
There have been **a lot** of changes since the previous bot and I'm sure I've missed some. If something here is unclear or you think should be documented clearer, please reach out in the support server.  
Depending on how dilligently I feel like writing, some of the documentation may be a bit of a work in progress by the time this is released.