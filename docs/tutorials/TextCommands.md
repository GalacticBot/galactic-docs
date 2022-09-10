---
id: TextCommands
title: Text Based Commands
sidebar_label: Text Commands
sidebar_position: 2
---

:::caution
Note that in the future there may be options or commands that only work with text based commands due to increased complexity that cannot be implemented with slash commands in a satisfactory manner, but for now all commands are interchangeable.
:::

## Enabling  
To enable text based commands use `/administration textcommands enabled:true`. This same command also allows you to change the prefix by appending the prefix option to it.  

## Command Structure  
:::note **Note that while this command structure is similar to the old bot's, it's not 1:1.**  
In some instances, such as some settings, the name of the option isn't required unless the option is a flag, see the setting's help prompt for which options are flags.
:::

Text based commands follow the same structure as slash commands, as in  
`/command subcommandgroup subcommand options`  

The primary difference is in how options are parsed. While slash commands make distinguishing where one option ends and another starts very easy, text commands are a bit trickier in that regard, there is no clear delimiter for where one ends and another starts. This is why some options are defined as flags (as in they are prefixed with --). You can check which options are parsed as flags with the `/help` command. Non-flag options will try to parse their expected value from the command directly (i.e. there's no need to prefix it with the option's name). 

### Option Parsing
Take for instance the ban command, it expects at least the users option, and for this example we'll also give it a time and point value, so the command structure is  
`-ban <USERS> [TIME] [POINTS] [REASON]` - The order of these is completely arbitrary, but all values for one option need to be consecutive.  

Our actual command would then look like  
`-ban @user @user2 2w 3p broke a rule` - This works as intended, the users are parsed the same way they would when passing the users option in the slash command version. **Keep in mind that moderation commands require a strict user resolveable, that is to say an ID, complete tag or a mention.**

If you instead were to do something like this then  
`-ban @user 2w 3p broke a rule @user2` - This would still work, as a user is successfully parsed, but the 2nd user will become a part of the reason as it was not given consecutively after the first user.

How about this then?  
`-ban some @user reason 2w 3p` - This would error out due to an unrecognised option. Why? Because you've now split the reason string into two by putting the only user resolveable in the string, remember, values belonging to one option must be consecutively given.

### Flag Parsing
Some flags don't require an explicit value, their presence provides the value. This is typically an option for some boolean type flags, as in, the flag being present in the command implies a truthy value. Flags that allow this indicate this in the help prompt. For other values, the previously mentioned remains true, if the flag expects multiple values they need to be given consecutively.

### Multi-word Values
Sometimes a value you want to pass consists of multiple words, for instance a username that contains a space, in instances like this you need to surround it in quotes for the bot to interpret it as one value.  
**This is also the case for string type flags!** (again this is due to a lack of clear delimiters)

