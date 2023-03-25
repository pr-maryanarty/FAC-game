# FAC-game

# Requirements 📃 ✂️🗿

there two players: a computer and a human player. A human player chooses one of three options:

- rock
- paper
- scissors.

A computer randomly chooses as well. Rock beats scissors, scissors beat
paper, and paper beats rock. If both players choose the same option they get a draw.

# Planning:

Make a design UI:

- Player's choice field
- Computer's choice field
- Result field
- Design for a player selection - should contain 3 buttons - rock, paper and scissors.

Plan the behavior:

On click a player chooses their option. Simulteniously computer randomly chooses its option. The result is displayed.

### Building:

Plan HTML. There are 5 components: player's choice, computer's choice, results, buttons for Rock, Paper, Scissors, and a reset (new game) button.

Plan JavaScript. On click of one of the buttons, player's choice is displayed in "player's choice" component. Computer's choice is done with random method. Results are calculated based on player's and computer's choices.

On click of reset button game starts from the beginning. All components are cleared.

After the game is played nothing happends unless reset button is clicked.


### Debugging:

I used devtools to debug my game. I'd put a "mark" on a line that I'm sure something is wrong with, and run "debugger", then, I'd hover over elements, to see - were they assigned or did the function "enter" the body of the function. My main mistakes were wrong classes or uncorrect parameters of a function. Most answers I got from freecodecamp or stackoverflow. 
