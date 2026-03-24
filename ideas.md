Some ideas for features I could add.

Ok, this is probably out of scope.
But, what if we could set up a simple database. In team duels, in between every round, we could see the path our teammate took.
We would POST our path to a server when results shown. Then, we GET the path corresponding to the teammate, at the same game-id and round.
Then, we render our path, and our teammate's path.

Add a toggle to the settings UI to enable debug mode. Which, enables all the console.logs.
We could even technically add UI to select what to log, and what not to log. Like check boxes.

Simplified route means we don't get full gradients. Perhaps we can artificially increase the number of segments, to ensure full gradients every time.
Like, have a minimum of 10-20 segments. It still looks simplified, but with a gradient.

When we update the settings, we should update the paths that are currently drawn. Not just the paths that are drawn in the future. Basicaly, re-render paths on screen.
For the edge case where they edit settings while viewing the results screen.
