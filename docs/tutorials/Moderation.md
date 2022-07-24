---
id: Moderation
title: Moderation introduction
sidebar_label: Moderation
---

:::danger Outdated section
This section was written with text based commands in mind, however the underlying concepts remain the same.  
Text based commands are being brought back at some point, so this is not being rewritten until then.
:::

**Galactic Bot** offers extensive moderation tools for servers, small and large, ranging from simple warnings and notes to mutes and tempbans. One of our more recent additions is automod. While not necessarily being a true automod in and of itself, it'll keep track of moderation escalation for you with some configuration. Automod utilizes configurable modpoints and thresholds, for more information about automod see `-settings modpoints` and `-settings automod`. To further complement the automated infraction escalation, the various filters can be configured to work in conjunction with the escalations.  

**Galactic's** moderation commands can be viewed by using `-commands moderation`. The moderation utility follows a specific syntax for moderation, some parts allow for variation, while others require the arguments to be in specific locations in the command.  
**The general syntax is:** `-<command> @user [time] [reason]`  

Arguments that don't follow a strict pattern can be put anywhere **in the reason**. Such arguments are flags (and points, though they don't follow the same syntax as flags, more on that in a bit). For now there aren't many flags used by the moderation utility, though more may come in the future. The flags currently in use are `--force` and `--expires <time>`, which are used to guide and override the automod.  

## Flags
`--force` is the flag used to bypass automod, i.e. if you think automod will change your infraction due to a threshold being exceeded pass the `--force` flag to override.  
**Ex:** `-warn @user 2pts obnoxious --force` - this would force the infraction to be a warning even if the points issued would cause the total amount of points to exceed a threshold.  

`--expire <time>` is the flag used to tell the automod that a custom infraction expiration time should be used instead of the defined modpoints expiration value.  
**Ex:** `-warn @user 2pts obnoxious --expires 2d` - This tells the system that the infraction will expire in 2 days, instead of whatever was configured in the setting.  

`--silent` is the flag used to tell the bot not to DM the infraction the user if the bot otherwise was configured to do so.  
**Ex:** `-ban @user really obnoxious --silent` - with default configuration the bot would DM the user when removed from the server, passing the --silent flag will stop the bot from doing so.  

## Points
Points are the point values defined either when running the command or in the modpoints setting. Issuing points is fairly simple, as they get picked up from anywhere in the reason, so long they follow the correct format. Points follow this pattern: `integer value points|point|pts|pt|p`. Any point values that exceed 100 will default to 100, and any point values that go below 0 will default to 0.  
**Ex:** `-warn @user obnoxious 2 points`  

## Infraction history
Infraction history will always be logged to the bot's database regardless of text channel output. As such GalacticBot provides tools to search logs and filter them to some extent with flags, such as `--filter warn` or `--exclude mute`.  

When viewing a user's infraction history, the total amount on **unresolved infractions** is shown, and if modpoints are enabled, their unexpired points as well. This does not mean that the infractions are not displayed in their history!  

## NOTE
All flags and points will be parsed **out of the reason**, meaning that when issuing them they will not show up in the reason for the infraction. Points will be displayed in the infraction if the modpoints system is enabled and flags don't need to be displayed anywhere.