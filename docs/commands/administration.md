---
id: admin
title: Administration commands
sidebar_label: Administration
---

### Purpose
The administration commands are used for configuring the bot's behaviour within the server.

### Commands

| Name         | Arguments                           | Description                                                                  | Example                                        |
|--------------|-------------------------------------|------------------------------------------------------------------------------|------------------------------------------------|
|grant         | <role.. \| user..\> <permission..\> | Grants the roles or users permissions to use a command or group of commands. | -grant moderator module:moderation command:poll|
|revoke        | <role.. \| user..\> <permission..\> | Revokes a permission or group of permissions from the roles or users.        | -grant moderator module:moderation command:poll|
|permissions   | <role.. \| user..\>                 | Show the currently granted permissions for a user or role.                   | -permissions moderator                         |