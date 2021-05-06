---
id: LinkFilter
title: Link filter
sidebar_label: Link Filter
---

Configure filtering of links based on domains. Can operate in blacklist or whitelist mode. Integrates with automod.

## Syntax  
`-settings linkfilter <option|method> <method|value> [value..]`

## Methods  
`on, off, set, reset, add, remove`

## Presets  
**TODO**

## Options  
`<blacklist|whitelist> <method> <value..>` - Add or remove entries from either the blacklist or whitelist.  
`ignore <method> <channel..>` - Define which channels links always allowed in.  
`bypass <method> <role..>` - Define the roles that bypass the filter.  
`silent <on|off>` - Toggle silent mode, silent mode will not notify the user that their message was filtered.  
`mode <whitelist|blacklist>` - Toggle the operating filter list and behaviour.  
`action <method>` - You can read the detailed documentation about configuring actions [here](../../tutorials/Filters).

## Examples  
`-settings linkfilter on`  
`-settings linkfilter whitelist add google.com youtube.com`
`-settings linkfilter ignore add #share-links`

## Action triggers  
**TODO:**
- Implement presets before this