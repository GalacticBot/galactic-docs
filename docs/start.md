---
id: getting-started
title: Getting started with Galactic
sidebar_label: Getting started
---

**TL;DR**  
Advanced moderation bot for servers of any size.

<!--truncate-->

### ❯ Introduction - What is Galactic?
Galactic is a powerful moderation bot for servers of all sizes.

### ❯ Features
As Galactic is a moderation bot at its core, it naturally has a bunch of moderation commands. This is naturally accompanied by moderation logging and making sure the user is aware of the infraction (provided the configuration is set correctly). The bot allows for fairly extensive configuration for you to tailor it to your server's needs.

### ❯ Documentation notation
**Optional** arguments are denoted by being encapsulated in brackets `[ ]` - means that the command will run either with default values or show usage prompt.  
**Required** arguments are denoted by less and greater than `< >` - means that the command will not run and return an error.  
**Infinite** arguments (ones you can list several) are denoted by `..` after the argument. Ex `< argument.. >` - means you can pass more than one argument.  
**Alternatives** are denoted by being separated by a `|`.  
**Actual values** that you can use in a command are denoted by being surrounded by single quotes `' '`.  

### ❯ Arguments
The bot splits arguments by space unless specified otherwise. To pass an argument that contains spaces you have to encapsulate it in quotes, some exceptions exist.  

**Ex:**  
`-grant "rolename that contains spaces" < permission >` - quotes are necessary  
`-user some user` - quotes not necessary  
**Typically** if the argument is at the end of a command it won't require quotes.

### ❯ Command aliases
Most commands and settings have some kind of aliases associated with them, some of which change the behaviour of the command or setting.  
For instance the **mute setting** has a `createmute` (`-settings createmute <rolename>`) alias, which changes the behaviour to be identical to `-settings mute create <rolename>`.  

In v3 of Galactic, the ban commands (tempban, hardban & ban) will all be one command with flag support for the behaviour of the other ban commands. In this instance aliasing is also used for the flags,  
i.e. `-softban @user reason` **will be identical to** `-ban @user --soft reason`.

### ❯ Syntax

