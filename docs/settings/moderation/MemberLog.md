---
id: MemberLog
title: Member logging
sidebar_label: Member Logging
---

Configure member join and leave logging.

## Syntax  
`-settings memberlogs <#channel|option|method> <value..>`

## Methods  
`on, off, reset`

## Tags  
Tags are replaced in the join message.  
`{mention}`  
`{tag}`  
`{user}`  
`{serversize}`  
`{servername}`  
`{accage}`  
`{id}`  

## Options  
`<on|off>` - Turn member logging on or off.  
`<join|leave> <value>` - Define the join and leave messages.
`#channel` - Set the channel for the logs

## Examples  
`-setting memberlogs #channel`  
`-setting memberlogs join {mention} joined the server!`  
`-setting memberlogs leave **{tag}** ({id}) left the server.`  
`-setting memberlogs off`  