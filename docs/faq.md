---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
---

This document is a collection of questions that get asked rather frequently and is updated whenever necessary. If your question isn't answered here or something is still unclear, please start a thread in the support forum in the server.

## Can I revert to the old commands?
See [this article](./tutorials/TextCommands)

## Mods can't see slash command 
See [this article](./tutorials/InitialSetup.md#permissions)

## How do I enable/disable x setting?
This is done using the `enabled` option. With text commandds you can use `--enabled` and `--enabled false`.

**Example**   
`/moderation wordfilter enabled:False`  
`-moderation wordfilter --enabled false`  

## How do I add x to y filter?  
For most settings whenever the setting has multiple lists (e.g. blacklist, greylist, ignore, bypass, etc.) you choose the list with the `list:` option. This option is always accompanied by the `method:` option to select what you're doing to the list, that is to say if you're adding you use `method:add`. For some settings that only have one or two lists the method will be named as the list, for instance `/administration protection roles:add`.  

**Example**  
To add words to the explicit list of the wordfilter, run the following command:  
`/moderation wordfilter method:add list:explicit` or  
`-moderation wordfilter add explicit`
These will prompt you to respond with the words to add.

## How do I grant a mods permissions?  
Granting permissions is only necessary if you use the permission type `grant`.  
To grant a role permissions to use commands use `/permissions grant role:<role..> permission:<permission..>`  
Use `/permissions list` to display all available permissions. To display granted permissions use `/permissions show`.  

**Example**  
To grant the role "moderators" permissions to use the moderation commands, run the following:  
`/permissions grant role:moderators permission:module:moderation`

## Bot saying missing permissions even though I granted permissions   
Make sure to check the permission type with `/administration permissions`.

## Mute isn't working  
Check the mute type with `/moderation mute`.  
Some types of mutes don't always work with the way you've configured your permissions. Try changing to a different type and run the create on the existing role to have the bot check its permissions.  
If neither of these options solve your issue, try using type 3 (uses discord timeouts).

## Missing tempban and hardban
Tempban is now under the ban command, simply add a duration to the ban.  
Same with hardban, except use the option days, which tells discord to delete x amount of days worth of messages from the user.  