---
id: admin
title: Administration commands
sidebar_label: Administration
---

# Administrative Commands

| Name                           | Description                                                                                  |
|--------------------------------|----------------------------------------------------------------------------------------------|
| Administration (settings)      | Command for modifying administrative settings                                                |
| [Import](#import)              | Import data from old versions of the bot, or the test branch.                                |
| Logging (settings)             | Command for modifying logging settings.                                                      |
| Moderation (settings)          | Command for modifying moderation settings.                                                   |
| [Modstats](#modstats)          | Displays statistics related to moderation.                                                   |
| [Permissions](#permissions)    | Manage permissions.                                                                          |
| Settings                       | Lists all available settings.                                                                |
| Utility (settings)             | Command for modifying utility settings.                                                      |

## The setttings commands
See the respective setting pages for information about them.

## Import
### Modlogs  
`version`: The bot version from which to import.  
`overwrite`: Whether any new modlogs on the current bot should be written over by the imported logs, or if they should be bumped up.  
### Settings  
`version`: The bot version from which to import.  

## Modstats
`after`: Count statistics for actions after this date.  
`before`: Count statistics for actions before this date.  

## Permissions
### Grant
`channel`: Limits the grant to a channel.  
`role`: Role that is granted the permission.  
`member`: Member who is granted the permission.  
`permission`: The permission to grant.  
### Revoke
`channel`: The channel in which to revoke.  
`role`: Role from which to revoke the permission.  
`member`: Member from whom to revoke the permission.  
`permission`: The permission to revoke.  
### List
Lists the grantable permissions.  
### Reset
`channel`: Reset permissions that are granted in the given channel.  
`role`: The role for which to reset permissions.  
`member`: The member for whom to reset permissions.  
### Show
`channel`: Display grants in the given channel.  
`role`: Display grants for the role.  
`member`: Display grants for the member.  
`permission`: Display roles or members that have the given permission.  