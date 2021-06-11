---
title: New bot rollout
author: Navy.gif
author_url: https://github.com/Navy-gif
author_image_url: https://i.imgur.com/xzB8BTV.jpg
autor_title: Developer
description: First change log entry on the new docs.
tags: [v3, rollout, update]
#image: https://i.imgur.com/xzB8BTV.jpg
draft: false
---

### How Galacticbot v3.0 Will Be Rolled Out
It will happen in various stages, across multiple days (and weeks, if needed) incase if something doesn't seem to be working we can fix it before it's publicly released.
The first stage is the most important stage.  
1. QA Testing - The bot will be published to a completely different bot than GalacticBot and GalacticTest, however it's not meant to stay around. It will go offline and be completely voided after QA testing is completed. QA testing is available for anyone wanting to test the bot to find any bugs before releasing to *thousands of servers*.  
2. Galacticbot v1 -> v3 - Galacticbot v3.0 will be FIRST RELEASED to the version 1 bot (the blue one). The blue one will remain up and be used as the stable version of the bot. Read FAQ for more infomation. Importing settings and your configuration from v1 and v3 will be possible.  
3. Galacticbot v2 -> v3 - Galacticbot v3.0 will be released to the version 2 bot (the orange one). The orange one will remain up and be used as the "canary" (alpha testing) version of the bot. This version of the bot will STILL BE *(RELATIVELY)* stable. Read FAQ for more infomation. Importing settings and your configuration from v2 and v3 will be possible.  
4. Settings Merge - Now that Galacticbot (blue) and GalacticTest (orange) is running the same version, the settings for your servers are running in completely different database collections. Our solution is to merge them, so the blue galacticbot and the orange galactictest are using the same values. Users using both of the bots (for whatever reason) will be asked to choose what settings are the most up-to-date, or we will attempt to merge them.  

### Frequently Asked Questions
- **Does this mean I should switch (back) to the blue bot?**  
  It's not necessary, but if you would prefer a more stable experience, then yes, you can. Setting transfer between GalacticTest and Galacticbot will be available.
- **Is GalacticTest (orange bot) going to have downtime?**  
  In order to test new features and release new updates, the orange bot might have more downtime than the blue one, however it will be very insignificant.
- **What is the point in GalacticTest (orange) bot?**  
  It will be a wide-spread QA testings where we can port our development builds over to the GalacticTest build (after we're done testing everything for release). The features released to GalacticTest will eventually be ported over to the GalacticBot (blue bot), once we are certain the build of the bot is stable enough.