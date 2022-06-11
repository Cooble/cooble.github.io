---
layout: post
title: 3D Editor Update
subtitle: 
date: 2020-09-25
ShowToc: false
categories:
- NiceDay
GitLink: https://github.com/Cooble/Niceday
cover: 
    image: https://github.com/Cooble/NiceDay/raw/master/screenshots/25_09_2020_scene_editor.png
---
Gotta admit that in this update there was really not much in Terraria clone (Sandbox project).
Nevertheless here are some minor tweaks for the Terraria clone:
- Optimized Particle renderer
- Fixed particle fadeaway effect
- Once again added support for spawning particles using Lua.

#### Now for the many new things in the engine itself (NiceDay project):
- Mono C#, Added crude support for using C# as another scripting language (apart form Lua)
    - If hotswaps are enabled, application will look every second at Managed.dll file to see if new version is available to reaload it. That's very useful for development, in Dist HotSwap should be disabled.
    - Currently supports adding C# Layers which look similar to C++ Application layers (In the future, ECS will be bound to C# as well).
- NBT supports glm::vec<size,float>, that means that things like `nbt["pos"]=glm::vec3(0.f);` are possible
- Fixed textureAtlas (huge memory leak and to some extension optimized)
- Added ECS using lib entt

#### Now for the many new things in 3D Editor (SandboxTest project):
- The most important thing is of course the change of ImGui style (to resemble a certain 3D editor)
- Customizable and persistent layouts. (no longer need to change the size and pos of window at every start)
- Windows can be resized and even hidden and shown using View tab option
- Editor windows:
    - Material bar to show and create new materials (change their properties == uniforms),(materials are bound to a shader which can be changed and reloaded on the go)
    - Mesh bar to show and load new meshes (from .fbx or .obj. or binary) (binary file can be created from already loaded model to dramatically speed up loading in the future)
    - Scene Window to manage all models, lights, cameras 
- Scene entities are composed of entt components. Also they can be moved, scaled and rotated in the editor.
- no scene serilization yet :(

![Alt text](https://github.com/Cooble/NiceDay/raw/master/screenshots/25_09_2020_scene_editor.png?raw=false "Scene Editor") 
![Alt text](https://github.com/Cooble/NiceDay/raw/master/screenshots/25_09_2020_mat_editor_0.png?raw=false "Material Editor 0") 
![Alt text](https://github.com/Cooble/NiceDay/raw/master/screenshots/25_09_2020_mat_editor_1.png?raw=false "Material Editor 1") 
