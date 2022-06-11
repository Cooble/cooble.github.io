---
layout: post
title: Christmas Game Adventure
ShowToc: false
categories:
- ChristmasGameAdventure
date: 2017-07-30
GitLink: https://github.com/Cooble/ChristmasAdventureGame
cover:
    image: https://github.com/Cooble/ChristmasAdventureGame/raw/master/screen_shot.png
---
I started working on this game circa 2 weeks before Xmas in 2016. You know, I was feeling festive and had a great deal of free time on my hands, so why not put my creativity into good use. My hopes, that I could put it under my Xmas tree, were mercilessly crushed, though. 

Writing the story, drawing all textures, dubbing the whole thing and coding the game engine itself had  rendered itself not to be as straightforward as my young and feeble mind expected (surprisingly). 
After sudden realization (on 24th) that I'd unable to finish that madness in time I stashed the project and forgot about it. Nevertheless, thanks to a game jam sort of competition on [ITNetwork Summer 2017](https://www.itnetwork.cz/java/oop/zdrojove-kody/vanocni-adventura) I found a freshly burning courage to revive my inner strength to work on it again and this motivation in the end won me a 2nd place at the competition. Hurray.

## README
**Simple point-and-click adventure game written in Java.**

- Currently, only first episode of the game is out. (available in GitHub [Releases](https://github.com/Cooble/ChristmasAdventureGame/releases/download/v1.0/ChristmasGameAdventure.zip))
- Estimated playtime: 1+ hrs.
- Game achieved 2nd place at event [ITNetwork Summer 2017](https://www.itnetwork.cz/java/oop/zdrojove-kody/vanocni-adventura) (In Czech).
- Walkthrough is available on [YouTube](https://www.youtube.com/watch?v=OeaAyTkPHLU).


Have you ever wonderered, what would happen if Santa got kidnapped?
No? Well, that's sad but that's exactly what happens,
and it's up to the player to figure out the identity of the criminal
as well as to save Santa... and Xmas I guess.
## Current Episodes:

1. Santa's missing
2. Who knows? (like I really don't have a clue)

## Story
Player is invited for yearly Christmas party with Santa at the North Pole.
At the Santa's cottage everybody is dancing to the Christmas carolls under the lights of mutlicolored reflectors
when suddenly...

Lights go out, panic bursts out, and when the lights are back up, the most important person is missing.


## Project structure
Uses Slick2D graphics engine.

Everything is working and ready to be extended, commented, and maybe to add even new episodes.
No external dependencies are required. Everything is contained in *lib* folder.

Project consists of 3 modules:
- **CoobleEngine**
  - Engine which manages all low level stuff, provides locations, resource loaders etc.
  - Parses custom locations from xml files
- **ChristmasGameV2**
  - Content of the game itself, is dependent on the Engine.
  - contains xml files for locations as well as custom Locations.java (items entities...)
  - contains all resources (audio, textures, dialogs ...)
- **CoobleSandpit**
  - Graphical editor that generates xml files for locations.
  - Generates all static content from placing items in locations to writing branching dialog
  - constant `Loc.SRC_FOLDER` stores game resource folder, defaultly is set to ChristmasGameV2

## More info
- At first, I started writing the game in JavaFX, let's just say that it's possibly not the optimal solution...
- During development, I became so lazy that I wrote a level editor to create more game content easily.
- I wrote an algorithm for entity navigation in location (finding path from A to B), so now the hero can solve any maze without players help. Or it can walk around a table. :D
- Game contains simple branching dialog system, where player can pick from various questions to find out more about Santa's unfortunate fate.
- Inventory is overloaded with all the items that could be useful.
- You can save Santa in 1280/720 or in Fullscreen.
- Textures have a resolution of 320/180. That's not a lot I know. Btw. the first version was in 160/90.
- All textures drawn in GIMP (by me, unfortunately).