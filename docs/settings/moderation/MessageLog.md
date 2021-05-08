---
id: MessageLog
title: Message logging
sidebar_label: Message Logging
---

Configure message logging. Message logging has a premium feature for logging attachments. To use message logs make sure the bot has permissions to **Manage Webhooks** in the channel.

## Syntax  
`-settings messagelog <option|method|#channel> <value..>`

## Aliases  
`chatlog, chatlogs, msglogs, msglog, messagelogs`

## Methods  
`set, reset, add, remove`

## Options  
`<on|off>` - Toggle the setting on or off.  
`#channel` - Set the channel for the logs  
`bypass <method> <role..>` - Configure roles that are ignored by message logs  
`ignore <method> <channel..>` - Define the channels that are ignored by message logs.  
`attachments <on|off>` - **[PREMIUM]** Toggle attachment logging.  

## Examples  
`-settings messagelog #channel`  
`-settings bypass add admin`  
`-settings ignore set #staff-chat #admin`  