---
id: ModerationPoints
title: Moderation points
sidebar_label: Moderation Points
---

Configure point values for infractions. Used together with [automod](./AutoModeration) to define automatic infraction escalation.

## Syntax  
`-settings moderationpoints <action|option> <value>`

## Aliases  
`moderationpoint, modpoints, modpoint`

## Actions  
`WARN, MUTE, KICK, SOFTBAN, BAN, VCMUTE, VCKICK, VCBAN`

## Options  
`<on|off>` - Turn the setting on or off.  
`multiplier <on|off>` - Turning this on will multiply the expiry time with the point value.  
`<action> <points|expire> <value>` - Configures the point value or expiry of the type of infraction.  
`associate <reset|remove|value> <points>` - Associate a certain amount of points with a word in the infraction reason.  

## Examples  
`-set modpoints warn points 2` - Sets the default amount of points given for any warning, can be overridden by giving points when issuing the infraction.  
`-set modpoints associate nsfw 10` - Associates the word nsfw with 10 points, if an infraction reason contains the word nsfw without any point specifications in the reason, the infraction will carry 10 points.  
`-set modpoints multiplier on`