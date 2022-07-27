---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
---

This document is a collection of questions that get asked rather frequently and is updated whenever necessary. If your question isn't answered here or something is still unclear, please ask in the support channel in server.

## How do I add x to y filter?  
For most settings whenever the setting has multiple lists (e.g. blacklist, greylist, ignore, bypass, etc.) you choose the list with the `list:` option. This option is always accompanied by the `method:` option to select what you're doing to the list, that is to say if you're adding you use `method:add`. For some settings that only have one or two lists the method will be named as the list, for instance `/administration protection roles:add`.  

**Example**  
To add words to the explicit list of the wordfilter, run the following command:  
`/moderation wordfilter method:add list:explicit`  
This will prompt you to respond with the words to add.

## How do I grant a mods permissions?  
Granting permissions is only necessary if you use the permission type `grant`.  
To grant a role permissions to use commands use `/permissions grant role:<role..> permission:<permission..>`  
Use `/permissions list` to display all available permissions. To display granted permissions use `/permissions show`.  

**Example**  
To grant the role "moderators" permissions to use the moderation commands, run the following:  
`/permissions grant role:moderators permission:module:moderation`