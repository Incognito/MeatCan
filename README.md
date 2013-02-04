# MeatCan.js

Meta canvas layer to assist in MVC style canvas apps.


Should be able to handle:
        - Kernel 
        - Clock manager (Distrubutes out to game clock, frame clock, etc...)
        - Game state (can impact game clock for other states! eg, Pause game.)
          - Should abstract ways to deal with game state (global, network, brokers, pub/sub, database, shared entities)
          - Leaning towards pubsub events
        - Kernel
        - Automatic module dependancy ... somehow.
        - Optimize for GCC?
        - Do I want static site, or a build with scripts/Rhino?

Add-ons should deal with:
        - Rendering
        - Networking
        - Sound?
        - Game state management implementation (not abstraction)
        - Game clock (web worker?)
        - Frame clock (reduce rate if running slowly? will this deal with sound?)
        - Effects
        - Collision detection
        - User input
        - Expose API for scripted testing of user inputs
        - Expose API to hoist everything globally and debug quirks (not errors)
        - 

