---
id: getting-started
title: Getting started with Galactic
sidebar_label: Getting started
slug: /
---

**TL; DR**  
Advanced moderation bot for servers of any size.

:::caution WIP
Be aware that the documentation is still in its early stages and prone to lacking in explanations and documentation. Everything is being worked on, especially the bot, which makes keeping the documentation up to date a challenge.  
I have plans for a more streamlined documentation pipeline, which would make the documentation more consistent and easier to keep up to date with the bot.  

If you wish to contribute to the documentation, see our [github page](https://github.com/Navy-gif/galactic-docs) for further information.
:::

### ❯ Introduction - What is Galactic?
Galactic is a powerful moderation bot for servers of all sizes. Galactic also provides some utility features on top of moderation. Everything on the bot serves some kind of purpose, though not everything may be applicable for your needs and as such some features can be turned off per server.

### ❯ Features
As Galactic is a moderation bot at its core, it naturally has a bunch of moderation commands. This is accompanied by moderation logging and making sure the user is aware of the infraction (provided the configuration is set correctly). The bot allows for fairly extensive configuration for you to tailor it to your server's needs.  

Galactic also has some premium features that build on top of the existing features, such as attachment logs for message logging. All core moderation features will always remain free for everyone.

### ❯ Documentation notation
:::caution
Some sections may be out of date or a WIP, so this notation may not always be present.
:::

**Optional** arguments are denoted by being encapsulated in brackets `[ ]` - means that the command will run either with default values or show usage prompt.  
**Required** arguments are denoted by less and greater than `< >` - means that the command will not run and return an error.  
**Infinite** arguments (ones you can list several) are denoted by `..` after the argument. Ex `<argument..>` - means you can pass more than one argument.  
**Alternatives** are denoted by being separated by a `|`.  
**Actual values** that you can use in a command are denoted by being surrounded by single quotes `' '`.  

### ❯ Arguments
:::info
This only applies to text commands, as slash commands are parsed on the client and are parsed differently.
:::
The bot splits arguments by space unless specified otherwise. To pass an argument that contains spaces you have to encapsulate it in quotes, though some exceptions may exist.  

**Ex:**  
`-grant "rolename that contains spaces" <permission>`  
<!-- **Typically** if the argument is at the end of a command it won't require quotes. -->

### ❯ Command and setting aliases
:::caution
Aliases are not available yet, as text commands weren't a priority for the slash command version.  
Consider this part outdated.
:::
Most commands and settings have some kind of aliases associated with them, some of which change the behaviour of the command or setting.  
For instance the **mute setting** has a `createmute` (`-settings createmute <rolename>`) alias, which changes the behaviour to be identical to `-settings mute create <rolename>`.  

In v3 of Galactic, the ban commands (tempban, hardban & ban) will all be one command with flag support for the behaviour of the other ban commands. In this instance aliasing is also used for the flags,  
i.e. `-softban @user reason` **will be identical to** `-ban @user --soft reason`.

### ❯ Syntax
`{prefix}command arguments`

### ❯ Versions

**V1**  
__No longer active, only V3 is active at this time__  
V1 is the original Galactic Bot, still running on its old code from its early days. It currently has a blue profile picture and is serving the largest amount of servers of the three bots.

**V2**  
__No longer active, only V3 is active at this time__  
V2 is the second generation of Galactic. While being a more modern version of the bot, it had some design flaws that needed amending. As such we're now working on the 3rd generation. V2 uses an orange profile picture and is running on a client called GalacticTest.

**V3**  
V3 is the third and hopefully final generation of Galactic. It is currently deployed on all of the bot user accounts.