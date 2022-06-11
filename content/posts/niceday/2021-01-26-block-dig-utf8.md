---
layout: post
title: Auto Block Digging, Translator and UTF-8
subtitle: 
date: 2021-01-26
ShowToc: false
categories:
- NiceDay
cover: 
    image: https://github.com/Cooble/NiceDay/raw/master/screenshots/26_01_2021_gui_0.png
---
(Well it's been some time I'm aware... well college and stuff.., was little busy.) 
Anyway some improvements were made.

- New Language selector screen was added.

#### Translator and UTF-8
First big thing is Translator which is simple static class that offers method `translate(String& key)`(obviously). 
Usually it's good thing to separate strings that are shown to user from strings in source code, preferably store them in some .txt file.
Also adding another language is as simple as adding another lang file and registering the language in code.
- For example play button will get it's string not as `"Play"` 
but as `ND_TRANSLATE("btn.play")` which converts the universal key to it's mapped value in current lang file.
I have stolen the translator code from my old Java Game ChristmasGameAdventure.
Lang format allows comments as well as wrapping nested key names. For example 
```
# only line comments are allowed
// this is also line comment
->main.btn
play=Play
settings=Settings
exit=Quit
<-
btn.start=Start Me
```
will expand to:
```
main.btn.play=Play
main.btn.settings=Settings
main.btn.exit=Quit
btn.start=Start Me
```
Not quite sure whether the wrapping of nested keys is really that useful but let's leave it for now.

- Next thing is utf-8 support. This is necessary since nearly all languages require some special non-ascii characters, which don't fit in one byte.
Lang files are already utf-8 encoded so I added method to convert utf-8 encoded std::string to std::u32string where each character really coresponds to one glyph.
Also modified Font and FontParser to work with decoded std::u32strings.

#### Everything for Hiero
(Hiero font converter tool is a software I use to generate the .fnt and .png files in res/fonts directory. 
This program requires TrueTypeFont and list of to-be-included characters. 
It generates atlas .png of all glyphs and .fnt file containing uv coords of said glyphs.)
  

After adding translator and utf-8 support I wanted to test it with some languages.
English was working already so I started with my native tongue: Czech.
I draw all the ěščřžýáíé.. glyphs to andrew_font.ttf). Then opened Hiero, set the font and specified all the required glyphs to output.
Chars in game visible, no problem. 
The reason why I'm describing each step is that the next language to add was Japanese.
Obviously I wasn't going to draw every japanese character to adrew_font so I went with very nice japanese font umeboshi. 
Ok next step is to open Hiero, load font aaaand specify all the required characters... 
  
Well that was certainly a problem since there is no way I'm going to fit all the 5918 glyphs in the font by hand 
and also there is no way to fit such number of glyphs to one png file. So I would need to pick only the most frequently used ones.
If only there was a list of those... Guess what! ImGui to the rescue. `ImGui::GetIO().fonts.getJapaneseRanges()` returns about 2000 most used glyphs.
Nice so I wrote a function `ImGui::FontRangeToUTF16(ImWchar* ranges)`  to return those glyphs as an utf-16 encoded string which can be saved to file from which I can copy it to Hiero. Aaand done.
  
![Alt text](https://github.com/Cooble/NiceDay/raw/master/screenshots/26_01_2021_gui_0.png#center "Main gui") 
![Alt text](https://github.com/Cooble/NiceDay/raw/master/screenshots/26_01_2021_gui_1.png#center  "languages gui") 
  
#### Integration of Chrome profiler
Since I noticed some sudden fps drops (up to 90ms per tick) I decided to inspect it using profiler. 
But BPE (Better Profiler Experience) was needed! (translated: The old one sucked)
Current engine profiler saves data to .json file. 
In the past to view the json it was necessary to open Chrome, write url `chrome://tracing` 
then hit button load and pick which .json file to open. No more!
Added wonderful integration of Chrome profiler. In Telemetrics window
new button added to begin/end profiling and button to open Chrome with
already finished profiling session. That means no more annoying
load button clicking and searching through the goddamn filesystem to
find that one .json file. 
  
  
Technically it was done like this: Copied chrome://tracing
html and js file to '/res/tracing/'. Modified html to include another js file called
currentProfileTemp.js. Modified original tracing.js to load json string
specified in second js file after document load. This was
neccessary due to security issues with js being forbidden to read any
files not specified directly by user in some file dialog. When
OpenLastProfile button is hit in game, game copies profile json data to
currentProfileTemp.js and then opens index.html with chrome. script
in tracing.js reads json file in curProfTemp.js file ... And done.
Ain't that magnificient.

(In the end I found the culprit of the 90ms peaks: `glMapPointer()` during particle render. No clue how to fix it though...yet)
  
#### Auto BlockDig and other stuff
When the pickaxe is held in hand and mouse is held, Pickaxe automatically finds block in view to dig, 
renders gui block selector to show which block will be dug 
and digs it (corners of block periodically change to simulate block damage)
- El Pickaxo was added (OP pickaxe with veery fast digging speed)
- Added trash slot to players inventory
- Added wooden armor and armor slots
- Player useItemActions are controlled by items; not by WorldLayer anymore.
  
![Alt text](https://github.com/Cooble/NiceDay/raw/master/screenshots/26_01_2021_dig.gif#center "digging") 
![Alt text](https://github.com/Cooble/NiceDay/raw/master/screenshots/26_01_2021.gif#center "nagaretekutokinonakadedemo") 