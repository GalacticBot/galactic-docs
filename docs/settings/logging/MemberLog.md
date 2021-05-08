---
id: MemberLog
title: Member logging
sidebar_label: Members
---

Configure member join and leave logging.

## Syntax  
`-settings memberlog <#channel|option|method> <value..>`

## Aliases  
`memberlogs, joinlogs, leavelogs, join, leave, joinmessage, leavemessage, joinmsg, leavemsg`

## Methods  
`reset`

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