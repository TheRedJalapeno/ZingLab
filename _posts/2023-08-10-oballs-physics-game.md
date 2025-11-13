---
layout: post
title: "oBalls Physics Game"
type: websites
description: "Simple physics games, one Space Invaders clone, one with a complex audio management system with caching and volume scaling."
keywords: "game, physics, Space Invaders, audio, interactive"
permalink: "/websites/oballs-physics-game"
livelink: "https://oballs.com/"
githublink: "https://github.com/TheRedJalapeno/OBalls"
image: "/assets/2023_oballs.jpg"
---

oBalls is a small collection of browser-based physics games built to explore mechanics, audio design, and performance-friendly web gameplay. The project contains two playable experiences: a physics-driven Space Invaders–style shooter and a second demo that focuses on audio management and interactive sound.

Gameplay and features
- Physics-based movement and collisions: objects behave with realistic arcs, rebounds, and momentum, giving each level a tactile, responsive feeling.
- Space Invaders–inspired mode: classic wave-based enemies are combined with modern physics reactions so shots and obstacles affect the world in more dynamic ways than rigid-grid clones.
- Audio-heavy demo: demonstrates an audio management system with caching, dynamic volume scaling, preloading, and intelligent voice/sample mixing to keep memory use low while maintaining rich soundscapes.

Audio system highlights
- Caching: frequently-used samples are cached in memory and reused to avoid repeated decoding and network overhead.
- Volume scaling & mixing: sounds are attenuated based on distance and importance; critical effects get priority while ambient sounds fade gracefully.
- Web Audio API usage: low-latency playback, real-time mixing, and per-sound filters for a more immersive experience.
- Performance-minded behavior: the system reduces concurrent voices and gracefully degrades quality on constrained devices to maintain framerate.

Controls & accessibility
- Keyboard and gamepad support for the shooter mode; touch-friendly controls for mobile and tablet play.
- Adjustable difficulty and control sensitivity to accommodate different play styles and accessibility needs.

Development notes
- Built with a compact physics engine tailored for 2D browser performance; collision handling is optimized to minimize allocations during fast update loops.
- Audio logic lives separately from game logic so the sound system can be reused or swapped without changing core gameplay code.
- Designed to run smoothly on desktop and mobile browsers; fallback behaviors are included for environments with limited audio capabilities.

Player tips
- In the shooter mode, use momentum to your advantage—shooting while moving produces different rebound patterns that can clear clustered enemies.
- For best audio fidelity, play on a device with hardware acceleration enabled; the audio demo scales back opportunistically when performance is restricted.
