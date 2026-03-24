Some ideas for features I could add.

Ok, this is probably out of scope.
But, what if we could set up a simple database. In team duels, in between every round, we could see the path our teammate took.
We would POST our path to a server when results shown. Then, we GET the path corresponding to the teammate, at the same game-id and round.
Then, we render our path, and our teammate's path.

Add a toggle to the settings UI to enable debug mode. Which, enables all the console.logs.
We could even technically add UI to select what to log, and what not to log. Like check boxes.

Simplified route means we don't get full gradients. Perhaps we can artificially increase the number of segments, to ensure full gradients every time.
Like, have a minimum of 10-20 segments. It still looks simplified, but with a gradient.

Potential issue. Might need to check for an element on the end of duel page, that shows the last round temporarily. Right now, might not be rendering last round of duel,
until you go into the game summary page. Sometimes happens, sometimes doesn't.
Another potential issue. Geoguessr loads in the next street view while we look at the result of the round in duels. Behind the scenes. This means it trigger onMove, and
stops rendering the path of the round we just finished. It's also inconsistent.
Maybe isMoving = false when the results screen is shown. Maybe this state can help us decide when to keep rendering the path's route.
What if we record any onMove that happens while resultShown === true, save them without stopping rendering the old path. Then, once the result screen is gone,
start the route from the saved point.

When we update the settings, we should update the paths that are currently drawn. Not just the paths that are drawn in the future. Basicaly, re-render paths on screen.
For the edge case where they edit settings while viewing the results screen.
