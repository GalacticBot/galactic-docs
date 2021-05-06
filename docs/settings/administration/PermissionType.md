---
id: PermissionType
title: Permission type 
sidebar_label: Permission Type
---

Configure where the bot compares permissions. Can be discord, bot or both permissions. Discord permission mode means the bot will only allow commands be ran by users who have the corresponding permission on any of their roles. For instance the ban command is linked to the discord ban permission.

## Syntax  
`-settings permissiontype <type>`

## Types  
`discord` - Command permissions are compared against discord role permissions  
`grant` - Command permissions are compared against granted permissions (see [grant command](../../commands/admin))  
`both` - Command permissions are compared against both discord and granted permissions, having either permission is enough.

## Examples  
`-settings permissiontype discord`