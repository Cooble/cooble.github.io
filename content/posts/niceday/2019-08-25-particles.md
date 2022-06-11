---
layout: post
title: ParticleSystem, Trees, Flowers, PlayerSprite
subtitle: + Walking on steep floor, fullscreen
date: 2019-08-25
ShowToc: false
categories:
- NiceDay
GitLink: https://github.com/Cooble/Niceday
cover:
    image: https://github.com/Cooble/NiceDay/raw/master/screenshots/25_08_2019.png
---

- Ability to walk on blocks which are 1high without jumping.     
- Player has a walk animation.     
- Added entity health bar.  
- Crude ParticleSystem using BatchRenderer2D temporarily, will have its own renderer with shader in the future. Can do 3500 particles without a problem.  
- Added multiblock structure = tree and its generator. After placing a sapling block, sapling tile entity counts the worldtime and then calls TreeGen. Trees have random number of branches(dry or normal) and random corona.  
- Everybody loves flowers. and graaasss. (Sheep are in sight :D)  

