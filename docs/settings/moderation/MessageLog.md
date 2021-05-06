---
id: MessageLog
title: Message logging
sidebar_label: Message Logging
---

Configure message logging. Message logging has a premium feature for logging attachments. To use message logs make sure the bot has permissions to **Manage Webhooks** in the channel.

## Syntax  
`-settings messagelog <option|method|#channel> <value..>`

## Methods  
`on, off, set, reset, add, remove`

## Options  
`#channel` - Set the channel for the logs  
`bypass <method> <value..>` - Configure roles that are ignored by message logs  
`ignore <method> <value..>` - Define the channels that are ignored by message logs.  
`attachments <on|off>` - **[Premium]** Toggle attachment logging.  
`<on|off>` - Toggle the setting on or off.  

## Examples  
`-settings messagelog #channel`  
`-settings bypass add admin`  
`-settings ignore set #staff-chat #admin`  