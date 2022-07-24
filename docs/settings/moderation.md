---
id: moderation-settings
title: Moderation settings
sidebar_label: Moderation
---

# Moderation settings
Moderation settings  
Configured with `/moderation [setting]`

| Name                                        | Description                                                                                  |
|---------------------------------------------|----------------------------------------------------------------------------------------------|
| [Automod](#automatic-infraction-escalation) | Automated infraction escalation.                                                             |
| [Grantable Roles](#grantable-roles)         | Roles grantable through <code>/roles add\|remove </code>                                     |
| [Invite Filter](#invite-filter)             | Filter unwanted server invites.                                                              |
| [Link Filter](#link-filter)                 | Filter unwanted links based on domain.                                                       |
| [Mention Filter](#mention-filter)           | Limit how many people a user can mention in a message, best used together with actions.      |
| [Moderation Points](#moderation-points)     | Define infraction severity and expiration, used by automod to escalate infractions.          |
| [Mute](#mute)                               | Set up how muting works with the bot.                                                        |
| [Staff](#staff)                             | Define the role used by the staff command and its accompanying message.                      |
| [Word Filter](#word-filter)                 | Filter messages for prohibited words.                                                        |
| [Word Watcher](#word-watcher)               | Highlight messages containing keywords to a channel.                                         |

## Automatic Infraction Escalation
`/moderation automod [options]`  
Configure automatic infraction escalation. This setting is to be used together with the modpoints option, which the bot uses to determine the escalation.  

**Options**  
`enabled`: Toggle enable state.  
`useprevious`: Whether the bot should use the previous threshold infraction if a new threshold has not been passed.  
`threshold`: Escalation point threshold. The given infraction will be used if the user's total point value exceeds this limit.  
`infraction`: Which infraction to escalate to at the given threshold.  
`length`: Duration for the infraction if the given infraction supports a duration.  

## Grantable Roles
`/moderation grantable [options]`  
Define the roles that can be granted to users through the `/roles add|remove` command.  

**Options**  
`enabled`: Toggle enable state.  
`roles`: Method choice.  

## Invite Filter
`/moderation invitefilter [options]`  
Filter Discord invites. You can allow invites to certain servers by adding the server ID to the whitelist.

**Options**  
`method`: Method choice.  
`list`: Which list to modify.  
`enabled`: Toggle enable state.  
`silent`: Silently delete invites.  

**Action Triggers**  
The invite filter currently only has generic action triggers (cannot be specified).  

## Link Filter
`/moderation linkfilter [options]`  
Filter links on a domain basis. The filter has 3 filter lists (blacklist, greylist and whitelist). Functionally the black and greylist are the same, they exist to enable different actions for domains in each list, e.g. bans for blacklisted links and warnings for greylisted links. In whitelist mode the bot will still use the black and greylists, but any domains not in any of the lists will still be deleted.  

**Options**  
`method`: Method choice.  
`list`: Which list to modify.  
`enabled`: Toggle enable state.  
`silent`: Silently delete links.  
`whitelist`: Toggle whitelist mode.  

**Action Triggers**  
Link filter triggers can be one of the lists or a domain.  

## Mention Filter
`/moderation mentionfilter [options]`  
Filter out messages with excessive mentions. This filter is best used together with actions.  

**Options**  
`method`: Method choice.  
`list`: Which list to modify.  
`enabled`: Toggle enable state.  
`silent`: Silently delete invites.  
`unique`: Multiple mentions for the same person count as one mention.  
`limit`: How many mentions in a message to triggert the filter.  

**Action Triggers**  
The mention filter supports different actions based on the amount of mentions in the message.

## Moderation Points
`/moderation modpoints [options]`  
Configure infraction severity points and their expirations. Used to determine automatic infraction escalation.  

**Options**  
`points`: The point value to assign to the given infraction.  
`expire`: How long it takes for an infraction's points to expire and no longer counted towards escalations.  
`infraction`: Which infraction to assign the given points to.  
`enabled`: Toggle enable state.  
`multiplier`: Use points as a multiplier for the expiration, i.e. `final expiration = expiration * points`.  
`associate`: Associate a word with the given points. If the word is present in the reason said point value will be used.  

## Mute
`/moderation mute [options]`  
Assign or create a mute role.

__Mute Types__  
**`0`:** Mutes only add/remove the muted role.   
**`1`:** Mutes remove all roles except for the muted role.  
**`2`:** Mutes remove all roles, does not require a muted role.  
**`3`:** Uses the built-in timeout feature to mute. *(default)*  

**Options**  
`create`: Name of the role to create. If an existing role is given the bot will ensure its permissions are in order.  
`role`: The role to use for muting.  
`default`: The default duration for a mute. Only used if permanent mutes are disabled.  
`permanent`: Whether to allow permanent mutes.  
`type`: Which type of mute to use.  

## Staff
`/moderation staff [options]`  
Configure the role and message used for the `/staff` command.  

**Options**  
`role`: Which role to use.  
`rule`: Text to be displayed with the prompt.  
`enabled`: Toggle enable state.  

## Word Filter
`/moderation wordfilter [options]`  
Filter out messages that contain prohibited words or phrases. Consists of 3 filter lists, explicit, fuzzy, and regex.  
The explict list looks for explicit matches, no bypass checking (does normalise text, i.e. emoji letters are treated as normal letters).  
The fuzzy list does some bypass checking, may sometimes run into false positives.  
The regex filter supports a subset of regex (`? ( ) | . [ ] -`). The regex list requires some understanding of how regex works, if you don't know how regex works but would like to utilise the list, you can add presets to it. Currently availalbe presets are `profanity`, `obscenity` and `slurs`.  

Use the whitelist to counteract any false positives you may run into.  

**Options**  
`method`: How to modify the list.  
`list`: Which list to modify.  
`enabled`: Toggle enable state.  
`silent`: Toggle silent mode.  

**Action Triggers**  
The word filter triggers can be any of the filter lists or specific words from any of the filters.

## Word Watcher
`/moderation wordwatcher [options]`  
Flag messages containing keywords. Supports having 5 quick actions under the flag message.  

**Options**  
`method`: How to modify the list.  
`list`: Which list to modify.  
`channel`: The channel in which to output the flags.  