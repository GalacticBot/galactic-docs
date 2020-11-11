---
id: ww #Word watcher
title: Word Watcher #Moderation settings
sidebar_label: Word Watcher
---

Flags messages that are matched into a channel with a direct link to the message and context.  
Intended for servers that do not want automatic message deletion for offending messages, but would still like for such messages to be flagged.

## Syntax  
`-settings wordfilter <option> [value]`  

## Methods  
`add, remove, set, reset, list`  

## Options  
`<off>` - Turn watcher off.  
`reset` - Resets the setting to default values.  
`<method> <word>` -   
`bypass <method> <role resolvable>` - Configure the roles that can bypass the watcher.  
`ignore <method> <channel resolvable>` - Configure the channels that are ignored by the watcher.  
`<channel resolvable>` - The channel in which the watcher outputs in.

## Examples  
`-settings wordwatcher add fuck shit`