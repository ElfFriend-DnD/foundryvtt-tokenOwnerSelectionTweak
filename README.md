
## Deprecation Warning

As of [0.7.1](https://foundryvtt.com/releases/0.7.1) this module is unecessary on account of this change:
> When a player controls a Token that does not have vision itself, their vision will now be unified with other observed tokens. This will work better for summons or familiars where the user does not benefit from the Token's perspective.

Installing it or activating it won't break your game but will put a warning in the console.

I will not be supporting this module after this last stable version.

# Token Owner Selection Tweak

![Latest Release Download Count](https://img.shields.io/badge/dynamic/json?label=Downloads@latest&query=assets%5B1%5D.download_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2FElfFriend-DnD%2Ffoundryvtt-tokenOwnerSelectionTweak%2Freleases%2Flatest)

This is a tiny tweak aimed at solving a single inconvenience. If you're the kind of DM who likes using independant tokens for Light Sources or Spell Effects, you might have noticed that when you create such a token, all players who "Own" that character immediately select the new token.

This creates confusion as the players try to realize why the whole map just went dark and it would be easier to not have to repeat "deselect whatever token you have selected."

### Foundry Default Behavior

![Foundry Default Behavior Gif](without-tweak.gif)

### With this module's tweak

![Token Owner Selection Tweak Gif](with-tweak.gif)

## Solution

> Do not modify player selections when a new token is created that they own.

## Installation

Module json:

```
https://github.com/ElfFriend-DnD/foundryvtt-tokenOwnerSelectionTweak/releases/latest/download/module.json
```

Once installed and activated, there is a setting under Module Settings (Client Scope so individuals can turn this off):
![Preserve token owner selection setting](moduleSetting.PNG)

## Acknowledgements

Bootstrapped with Nick East's [create-foundry-project](https://gitlab.com/foundry-projects/foundry-pc/create-foundry-project).

Mad props to the [League of Extraordinary FoundryVTT Developers](https://forums.forge-vtt.com/c/package-development/11) community which helped me figure out a lot.
