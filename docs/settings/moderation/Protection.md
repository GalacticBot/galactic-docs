---
id: Protection
title: Protection
sidebar_label: Protection
---

Configure which roles are immune to moderation. Can operate in two modes, list of immune roles and position based.

## Syntax  
`-settings protection <option|method> <value..>`

## Methods  
`set, reset, add, remove`

## Types  
`role` - Operates based on a list of roles that are protected.
`position` - Based on the moderator's highest role vs the highest role of the target.

## Options  
`<type>` - Selects the operation mode  
`<method> <role..>` - Configure the immune roles  

## Examples  
`-settings protection add moderator`
`-settings protection type role`