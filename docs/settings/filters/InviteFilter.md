---
id: InviteFilter
title: Invite filter 
sidebar_label: Invite Filter
---

Configure filtering of discord invites.

## Syntax  
`-settings invitefilter <option|method> <value..>`

## Aliases  
`invfilter`

## Methods  
`set, reset, add, remove`

## Options  
`<on|off>` - Turn filtering on or off.  
`ignore <method> <channel..>` - configure which channels are not filtered  
`bypass <method> <role..>` - configure what roles are immune from the filter  
`silent <on|off>` - the bot will silently remove invites and not notify the user that their message was filtered if turned on  
`actions <method>` - You can read the detailed documentation about configuring actions [here](../../tutorials/Filters).  

## Examples  
`-settings invitefilter bypass add moderator`  
`-settings invitefilter ignore set #self-promo`  

## Action triggers  
The invite filter currently only has generic action triggers (cannot be specified).