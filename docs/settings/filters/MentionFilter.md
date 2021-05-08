---
id: MentionFilter
title: Mention filtering
sidebar_label: Mention Filtering
---

Filter messages that contain a certain amount of mentions.

## Syntax  
`-settings mentionfilter <option|method> <value..>`  

## Aliases  
N/A

## Methods  
`set, reset, add, remove`  

## Options  
`<on|off>` - Turn filtering on or off.  
`bypass <method> <role..>` - Configure the roles that can bypass the filter.  
`ignore <method> <channel..>` - Configure the channels that are ignored by the filter.  
`silent <on|off>` - Toggle inline (responses directly in the channel to the filtered user) responses on or off.  
`unique <on|off>` - Toggle whether several mentions for one user in one message are counted as one (turning this on will count several mentions for the same user as one mention).  
`limit <int>` - Define the limit for how many users can be mentioned. Default is 4, meaning a message containing 5 mentions would trigger the filter.  
`action <method>` - You can read the detailed documentation about configuring actions [here](../../tutorials/Filters).  

## Examples  
`-settings mentionfilter limit 4`
`-settings mentionfilter unique on`
`-settings mentionfilter bypass add moderator`

## Action triggers