---
id: util
title: Utility commands
sidebar_label: Utility
---

# Utility Commands

| Name                          | Description                                                                  |
|-------------------------------|------------------------------------------------------------------------------|
| [Avatar](#avatar)             | Display a user's global or server avatar.                                    |
| Grantable                     | List roles that can be managed with the role management command.             |
| Ping                          | Generic ping command.                                                        |
| [Poll](#poll)                 | Start a poll.                                                                |
| [Remind](#remind)             | Set a reminder.                                                              |
| [Selfrole](#selfrole)         | Give yourself a role.                                                        |

## Avatar  
`size`: The image resolution.  
`format`: The image format.  
`user`: User whose global avatar to display.  
`member`: User whose server avatar to display.  

---
## Poll
### Create
`choices`: Amount of choices in the poll.  
`channel`: Channel in which to post the poll.  
`duration`: How long should the poll run for.  
### Delete / End
`message`: The ID of the poll message. Only works with timed polls.  

---
## Remind  
### Create  
`in`: How long until the reminder should be sent.  
`reminder`: What to remind you with.  
### Delete / List
Will prompt you for additional input.

---
## Selfrole  
### Clear
Clear your self-assignable roles.  
### List  
List roles you can assign to yourself.  
### Add / Remove
`roles`: The roles to add or remove.
