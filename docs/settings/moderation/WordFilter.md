---
id: WordFilter #Word filter
title: Word Filter #Moderation settings
sidebar_label: Word Filter
---

A fairly robust word filtering utility. Keep in mind that no word filter will ever be perfect, bypasses will always exist. This filter aims to at least catch the most common bypasses if configured right.

Any suggestions/recommendations can be directed into the discord server in the #suggestions channel.

## Syntax  
`-settings wordfilter <option> <method> [value]`  

## Methods  
`add, remove, set, reset, list`  

## Lists  
`explicit` - List of words that are **explicitly** matched, i.e. there is no real bypass checking to them\*.  
`fuzzy` - Includes some bypass checks with word similarity as well as random character insertions.  
`regex` - User defined regex patterns, supports a subset of regex with the following characters: `( ) | ?`. If you don't know how regex works I'd advice using the other lists or ask for help from someone who knows regex. This list is mainly intended for users who know what they are doing.  
`whitelist` - List of words that are to be ignored by any bypass checking lists, add words to this if they are being flagged falsely by the bot's bypass checks.  

**\***All messages are interpreted as text, as in, any emoji letters, special characters etc will be interpreted as their plaintext counterparts.  
Note that some characters may still bypass this, please report such characters in our support server.  

## Presets  
`slurs` - contains the most common slurs and variations  
`obscene` - contains common inappropriate words  
`profanity` - strong language filter, allows mild profanity  

Full list of the preset contents will be available at the bottom soon.

## Options  
`<on|off>` - Turn filtering on or off.  
`reset` - Resets the setting to default values.  
`<list> <method> <word|phrase>` - Modify the selected filter list. Phrases must be enclosed in quotes - "this is a phrase".  
`bypass <method> <role resolvable>` - Configure the roles that can bypass the filter.  
`ignore <method> <channel resolvable>` - Configure the channels that are ignored by the filter.  
`silent <on|off>` - Toggle inline (responses directly in the channel to the filtered user) responses on or off.  
`presets <method> <preset>` - Add a preset filter list to the filter.  
`action <method>` - You can read the detailed documentation about configuring actions [here](../../tutorials/Filters).  

## Examples  


## Action triggers  