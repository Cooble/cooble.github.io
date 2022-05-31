---
layout: post
title: ParticleSystem, Trees, Flowers, PlayerSprite
subtitle: + Walking on steep floor, fullscreen
gh-repo: cooble/niceday
gh-badge: [star, fork, follow]
tags: [niceday]
comments: false
bigimg: nd/25_08_2019.png?raw=true

---

- Ability to walk on blocks which are 1high without jumping.     
- Player has a walk animation.     
- Added entity health bar.  
- Crude ParticleSystem using BatchRenderer2D temporarily, will have its own renderer with shader in the future. Can do 3500 particles without a problem.  
- Added multiblock structure = tree and its generator. After placing a sapling block, sapling tile entity counts the worldtime and then calls TreeGen. Trees have random number of branches(dry or normal) and random corona.  
- Everybody loves flowers. and graaasss. (Sheep are in sight :D)  

