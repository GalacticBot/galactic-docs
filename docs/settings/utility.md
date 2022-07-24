---
id: util-settings
title: Utility settings
sidebar_label: Utility
---

# Utility settings
Utility settings  
Configured with `/utility [setting]`

| Name                                | Description                                                                                  |
|-------------------------------------|----------------------------------------------------------------------------------------------|
| [Auto Role](#auto-role)             | Automatically give new members a role.                                                       |
| [Self Role](#self-role)             | Let users give themselves roles.                                                             |
| [Sticky Role](#sticky-role-premium) | Roles that should stick to members that leave and rejoin.                                    |
| [Welcomer](#welcomer)               | A message sent to new users upon join.                                                       |

## Auto Role
`/utility autorole [options]`  
Used to define which roles a new member should be given upon join.  

**Options**  
`roles`: Method choice.  
`enabled`: Toggle enable state.  

## Self Role
`/utility selfrole [options]`  
Let your users select roles themselves. Can be configured to use a dropdown menu.  
Defines the roles for `/selfrole`.   

**Options**   
`roles`: Method choice.  
`channel`: If given, will post a message with a dropdown menu in the channel for users to select roles through.  
`text`: Text to display with the dropdown menu.  

## Sticky Role [Premium]  
Configure the roles that should persist on users through leaves & rejoins.  

**Options**  
`roles`: Method choice.  
`enabled`: Toggle enable state.  

## Welcomer
Set a message that is sent to new members upon joining.  

Supports the following template tags:  

| Tag           | Description               |
|---------------|---------------------------|
| `{mention}`   | mentions the user         |
| `{tag}`       | username#discriminator    |
| `{username}`  | username                  |
| `{guildsize}` | member count of the server|
| `{guildname}` | name of the server        |
| `{accage}`    | age of the account        |
| `{id}`        | ID of the account         |

**Options**  
`message`: The message to send.  
`enabled`: Toggle enable state.  