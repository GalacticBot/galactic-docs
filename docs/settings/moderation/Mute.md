---
id: Mute
title: Mute
sidebar_label: Mute
---

Configure the mute role as well as mute behaviour.

## Syntax  
`-settings mute <option|role> <value>`

## Aliases  
`muted, muteType, mutedType, muteRole, mutedRole, createMute, createMuteRole, createMuted, createMutedRole, permaMute, permanentMute, muteDuration, defaultMuteDuration`  

:::caution
Some of these aliases change the behaviour of the setting by combining the first argument (option) with the setting name.  
**Ex:** `-settings mute type 1` is equivalent to `-settings mutetype 1`
:::

## Types  
`0` **[DEFAULT]** Append the mute role.  
`1` Replace all roles with the mute role.  
`2` Remove all roles (no mute role is used)  

## Options  
`create <name>` - Creates a new mute role.  
`type <type>` - Sets the mute type, see types above.
`duration <time>` - Sets the default duration of a mute when no time is given in the command.
`permanent <on|off>` - Whether to allow permanent mutes or not.

## Examples  
`-settings mute create muted`  
`-settings mute type 1`  
`-settings mute duration 3 hours`