---
layout: post
title: Sun, Moon and Stars, Sound
subtitle: one language is not enough
date: 2020-04-28
ShowToc: false
categories:
- NiceDay
cover: 
    image: https://github.com/Cooble/NiceDay/raw/master/screenshots/28_04_2020_dayNight.gif
---
Well, it has been 5 months since last TIMELINE entry, but that doesn't mean that I haven't done anything, not even close!
As it's obvious from the title Engine now finally has full Sound support. There are three main parts to this madness:
1. **libogg** (for loading sound streams)
2. **libvorbis** (for decoding ogg sound streams)
3. and finally **portaudio** to play the data
4. and yeah of course the thing I wrote...

 Gotta admit that I was considering using some already available sound engines, mainly OpenAL but since it's not entirely free to use (API is, implementation is not) I decided to write my own. To put it simply there were few requirements:

 1. Play music = sound file isn't loaded into memory all at once (That would take looong time), instead it fills the buffer and after a part is consumed and played new data is inserted to the buffer from file, yeah, stream in the nutshell..
2. Play sound and cache it = It would be a pain to load sound every time one requests to play the same audio. If I had a machine gun (e.g. S.D.M.G) for example just imagine how many times the same .ogg file would need to be opened and read from at once! That's why it's important to store a decoded version of sound for later use if neccessary. When there is no more space we just drop the sound buffer which is not used.
3. Functions like ``setVolume, fadeIn, fadeOut, setSpeed/setPitch`` (same thing for now) and ``loop``.
4. Spatial sound - the farther away the radio is, the lower the volume. The more to the left the radio is, the lower the volume on the right channel 
  
  And I also added **AudioHandle** to interact with instead of command like methods of class Sounder (best naming ever). It's much more OOP.
  AudioHandle object can be also used in lua commands, so it's possible to write script that plays playlist!

```lua
function playFolder(fileP)
	local songs = ls(fileP) --list files (in startup.lua)
	local function basename(path)
  		return path:sub(path:find("/[^/]*$") + 1)
	end

  ND_INFO("Playing list of songs (" .. #songs .. " files)") --logging to console
  for index,value in ipairs(songs) do
        if not value.isDirectory and ends_with(value.path,".ogg") then	--ends_with() in startup.lua
            s = Music() --music handle
            s:open(value.path) --set filePath
            s:setVolume(0.5,0) --set volume=0.5 with fade_in_time = 0 seconds
            s:play(0) --start with fade_in_time = 0 seconds
			
            ND_INFO("playing " .. basename(value.path));
            while(s:isPlaying()) do
               waitFor(10) --from ND coroutine library, will wait for 10 game ticks
            end
        end
   end
end
playFolder("D:/SteamLibrary/steamapps/common/Undertale/") --quality content
```
But wait! There's more!
### Sun, Moon and Stars
It's unhealthy to stare directly into the sun. 

![Screenshot](https://github.com/Cooble/NiceDay/raw/master/screenshots/28_04_2020_dayNight.gif?raw=false "Day Night Cycle") 

And last but not least: The Whole project got ported from **premake** (which is awesome but nobody uses it) to **CMake** (with horrifying syntax but it works very well). To build the whole project only 2 commands need to be run:
```
- cmake .   #creates build files like .sln or make files
- cmake --build . --config Debug --target Sandbox   #builds the program 
```
Also the project is finally checked by Travis to ensure that each commit is working. (that was actually the reason why I transfered to CMake in the first place)

Listening to the **STATIC ON THE RADIO**
![Screenshot](https://github.com/Cooble/NiceDay/raw/master/screenshots/28_04_2020.gif#center "Listening to the static on the radio") 

