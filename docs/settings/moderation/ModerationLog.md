---
id: ModerationLog
title: Moderation logging 
sidebar_label: Moderation Logging
---

Configure where and which infractions are logged.

:::note
This setting simply defines the output channel and which infractions are sent there. All infractions are stored in the bot's database regardless of this setting.
:::

## Syntax  
`-settings moderationlog <value>`

## Aliases
`moderationlogs, modlog, modlogs`

## Methods  
`set, reset, add, remove`

## Actions  
`NOTE, WARN, MUTE, UNMUTE, KICK, SOFTBAN, BAN, UNBAN, VCMUTE, VCUNMUTE, VCKICK, VCBAN, VCUNBAN, PRUNE, SLOWMODE, ADDROLE, REMOVEROLE, NICKNAME, LOCKDOWN, UNLOCKDOWN`

## Options  
`#channel` - Set the channel for the logs.  
`<method> <infractionType..>` - Configure which infractions are logged into the channel.  
`off` - Removes the logging channel.  

## Examples  
`-settings modlogs #mod-log`  
`-settings modlogs add BAN WARN KICK MUTE`