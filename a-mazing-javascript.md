# A-mazing Javascript!

## Summary

Now that we've mastered a lot of the Javascript basics, lets take things a bit further and see if we can build and navigate a Javascript maze.

First build the maze using a table. Let green cells represent the path through the maze and all other cells should be red. Make it as straight forward or complicated of a path as you desire. However, if you take a wrong step and end up on a red cell you will have to start again!

The player will advance through the maze using the arrows on your keyboard (up, down, left, right). We will time the attempt at traversing the maze so that you can compete with your pair.

The goal here is to learn more about JavaScript, jQuery, the DOM, and asynchronous event handling.

Before you start, if you haven't already you should read about [jQuery][].  In particular, you should understand event handling and callback functions.

## Releases

### Release 0: The Setup

Again, there is no skeleton for this challenge.  You will have to write the HTML, CSS and JavaScript files yourself (and link them all together).  Let's just start with very simple table that will act as a grid on which we will draw our maze.  This will be rendered via HTML. We encourage you to do this yourself, but here's an example of how it could be done:

```html
<table class="racer_table">
  <tr id="player1_strip">
    <td></td>
    <td class="active"></td>
    <td></td>
    <td></td>
    ... etc ...
  </tr>
  <tr id="player2_strip">
    <td></td>
    <td></td>
    <td></td>
    <td class="active"></td>
    ... etc ...
  </tr>
</table>
```

Then, using CSS, you can provide styles like:

```css
.racer_table td {
  background-color: white;
  height: 20px;
  width: 20px;
}

.racer_table td.active {
  background-color: black;
}
```

Updating a player's position could again be achieved by adding the `active` class to the appropriate `td`. There are lots of ways to define the track through the maze. We need some way to differentiate the track (green) from the out of bounds area (red). Although it will be obvious to us visually, think about the best way to tell the computer when the player has gone off the track. Whatever way you choose to do this, it should be easy for jQuery/JavaScript to manipulate, so keep that in mind.


### Release 1: Add JavaScript

Now that we have our maze board all set up we need some way for JavaScript to update the board state.  Create simple
JavaScript functions that can update the player's position through the maze.  You give the functions the players position as input and they update the underlying HTML to reflect the new position. This doesn't have to be shown visually in the browser (but you can if you like), but will certainly need to change the state of the DOM.

It could look something like:

```javascript
update_player_position('player', 10);
```

Just like you did in challenge one, store this JavaScript in a separate file and use the JavaScript console to debug it and pass in values manually.

### Release 2: Binding to Key Presses

Now we'll make the game interactive!  Bind to the [keyup][] event to detect
when a player has "pressed" a key.  We don't bind to the [keydown][] or
[keypress][] events because those events fire when the keyboard repeats the
key, whereas the keyup event doesn't.

It'd be a boring game if you could just hold the key and go.  You want to bind
to the `document`, like so:

```javascript
$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
  });
});
```

### Release 3: Starting and Winning States

The last bit is to have starting and winning states, so we can restart the game
and declare a winner when the game is over.  Add these features (starting,
playing, winning, and restarting) and submit your solution as a pull request
with at least three files: an HTML file, a CSS file, and a JavaScript file.
You can have more files, but all CSS and JavaScript should be linked externally
from the HTML file.

## Resources

* [jQuery][]
* [normalize.css][]
* [Moxilla documentation for: keyup][keyup]
* [Moxilla documentation for: keydown][keydown]
* [Moxilla documentation for: keypress][keypress]
* [JQuery on Codecademy for: codecademy][codecademy]


[jQuery]: http://learn.jquery.com/about-jquery/
[normalize.css]: http://necolas.github.com/normalize.css/
[keyup]: http://api.jquery.com/keyup/
[keydown]: http://api.jquery.com/keydown/
[keypress]: http://api.jquery.com/keypress/
[codecademy]: http://www.codecademy.com/tracks/jquery