---
layout: post
title: Lights, Day/Night cycle, Entities
subtitle: 
gh-repo: cooble/niceday
gh-badge: [star, fork, follow]
tags: [niceday]
comments: false
bigimg: nd/12_08_2019.png?raw=true
---

#### Multithreaded lights,  Inheritance Entity System (maybe will change to ECS in the future)(22_07_2019)  
- Added NBT to save and load entities. (No entity saving yet, though.)  
- Added basic physics system with polygon collision detection.  

In the pic: The first entity after Player was (who would have guessed...) TNT!  
![screenshot]({{site.nd}}22_07_2019_00.gif?raw=false&style=centerme)  

In the pic: red Zombie attacks black Player.  (and then mysteriously disappears up in the sky)  
![screenshot]({{site.nd}}22_07_2019_01.gif?raw=false&style=centerme)   

#### Smooth wallLight vs edgy blockLight, Day/Night cycle (12_08_2019)  
- Added dynamically created TextureAtlas.  
- Added painting and multiblock structure support.  

![Alt text]({{site.nd}}12_08_2019.png?raw=false&style=centerme)   
Oh, shoot!   
![screenshot]({{site.nd}}12_08_2019.gif?raw=false&style=centerme) 
  
