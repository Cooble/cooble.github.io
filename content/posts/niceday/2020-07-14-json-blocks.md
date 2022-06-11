---
layout: post
title: JSONification of Blocks, Docking
subtitle: one language is not enough
date: 2020-07-14
ShowToc: false
categories:
- NiceDay
cover: 
    image: https://github.com/Cooble/NiceDay/raw/master/screenshots/09_07_2020_scene_layout.png
---
The amount of data in blocks.cpp has become impossible to maintain.
I decided to outsource the data to json files located in
res/registry. There is no space in cpp code for that!
To add new block, one no longer needs to write an entry in header file as
well as cpp files.
To add a new block:
	1. add entry to blocks.ids (choose unique id for the block)
	2. add json map object to blocks.json
	3. fill the object with desired attributes (hardness,
	lightSrc...)
	4. CPP version can be still used nevertheless alongside with
	json: just specify blank constructor with string block_id, all
	of the attributes get copied from json file so one can focus solely
	on overriding functions.
  
- Note:
	CMake script automaticaly creates a special header file (from blocks.ids) that contains all
	block ids as constexpr int constants like BLOCK_DIRT so it's
	easy to use it in the code.
  
A block entry might look something like this:
```
 //note: added comment support even though JSON specs "forbid" it
 "stone": {
    "hardness": 2,
    "hasBigTexture": true,
    "connectGroups": "dirt",
    "corners": "dirt"
  },
 "radio": {
    "opacity": "air",
    "collision": false,
    "cannotFloat": true,
    "multiBlock": {
      "width": 2,
      "height": 2
    },
    "tileEntity": "TileEntityRadio",
    "flags": [ "burnable" ]
  },
  /* 
  Multiliners are also OK, Yay!
  */
```  
### ImGui Docking
Finally I've switched to docking branch of imgui which makes docking as well as multiple viewports possible.
The imgui windows can be easily docked into the main window or can stay outside of it independently.
I had to change `App::getWindow()` to return not neccessarily the physical glfw window but also a "fake" one which is just proxy for another imgui window.
It depends on the app settings and can be switched off. (no docking no multi-viewports) 
Also since the default OPENGL FBO doesn't have to be the default render target anymore, -> 
#### (GL)FrameBuffer was completely redone:
- No longer is just a shell for textures (attachments)
- FrameBuffer has 3 modes: 
    - `WINDOW_TARGET` (render directly to physical application window)
    - `NORMAL_TARGET` with textures (has its own set of attachments which are created in the constructor)
    - `NORMAL_TARGET_EXTERNAL_TEXTURES` (one needs to manually attach textures = same as before this change)
 
When using FBOs the current approach is not to bind them but every
time something is renderered simply pass them to renderer, This helps with
troubleshooting to find which damned FBO I am rendering to right now. ('cause God bless OPENGL state machine)
### Also...
- Added very crude scene support (which will be probably redone using ECS in the future) 
- Added assimp for 3D model loading
- Simple 3D lighting
- 3D Cameras (Player and Editor)
- Added Mandelbrot shader, just for fun (also Mandelbulb (though only slices can be viewed))