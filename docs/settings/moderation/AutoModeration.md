---
id: AutoModeration
title: Automatic moderation 
sidebar_label: Automod
---

Configure automatic infraction escalation based on moderation points. Various filters can be configured to work together with automod, though they don't have to. See [Filters](../../tutorials/Filters) for reference. 

## Syntax  
`-settings automod <option|method> <points|value> <action|time> [time]`

## Methods  
`on, off, reset`

## Actions  
`WARN, MUTE, KICK, SOFTBAN, BAN, VCMUTE, VCKICK, VCBAN`

## Options  
`threshold <points> <action> [time]` - sets a threshold for `<action>` at `<points>`, if the `<point>` threshold is exceeded `<action>` will be taken instead of the used command **only if** the new action is higher in the hierarchy   
`length <points> <time>` - lets you configure the duration of an existing mute or ban threshold  
`useprevious` - tells the automod to use the previous threshold if no new threshold is exceeded  

## Examples  
`-settings automod on`  
`-settings automod threshold 10 mute 3 hours`  
`-settings automod length 10 5 hours`  
`-settings automod useprevious on`