---
id: IgnoreChannels
title: Channel ignoring 
sidebar_label: Channel Ignore
---

Have the bot ignore commands from users in certain channels. Lets you define roles that bypass the ignore.

## Syntax  
`-settings ignore <method|option> [value..]`

## Methods
`add, remove, set, reset, list`

## Options
`bypass <method>` - Allows you to define roles that bypass the ignore

## Examples
`-settings ignore add #general`  
`-settings ignore bypass add moderator`