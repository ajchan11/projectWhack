# Project 1: Whack a Dictator!

![alt tag](https://github.com/ajchan11/projectOne/blob/master/readme/intro.png)

Name of the game: Whack a Dictator!

Objective: Whack as many dictators as quickly as possible within the 30 second time limit. Minus 10 points for hitting the Dalai Lama!

1) Began constructing the game with a simple layout of 8 x 3 squares.

![alt tag](https://github.com/ajchan11/projectOne/blob/master/readme/outline2.png)

2) Used a random number generator that cycles through the number of squares, randomly choosing one. The chosen box is given a new variable "random". 

![alt tag](https://github.com/ajchan11/projectOne/blob/master/readme/boxes.png)

3) Created a new class with a background image of my "mole".

![alt tag](https://github.com/ajchan11/projectOne/blob/master/readme/active.png)

4) Created a function that had an if/else statement. If the random box has the class "active", the class "active" was removed and a new global random variable was assigned to random. Else, the class "active" was given to the random box and a new global random variable was assigned. 

![alt tag](https://github.com/ajchan11/projectOne/blob/master/readme/swap.png)

5) Game keeps track of time by creating a function with a setTimeout of 1000ms. The function was constantly looped and the variable "s" was redefined to represent a count down clock in which 1 was subtracted from s. If s < 1, the gameStop function was called.

![alt tag](https://github.com/ajchan11/projectOne/blob/master/readme/time.png)

6) The function gameStop cleared the timeOut number given in setTimeout as well as cleared the game interval that would be called at the beginning of each game. The body element was given the class "gameOver" which displayed the gameOver sign, and all other classes were removed. The "display" score was pushed into an array "highScore" which had a default var highScore = [0]. The timer was replaced with "Time has finished"

![alt tag](https://github.com/ajchan11/projectOne/blob/master/readme/stop.png)

7) The game begins when a player clicks a mode. Each mode begins with removing the class "gameOver" from the body, the "s" is reset to 30. the "display" score is reset to 0 and the global interval variable is definied with the function "startGame" and the time frequency in which the function is constantly called. The function "gameCount" is called and the timer begins. 

![alt tag](https://github.com/ajchan11/projectOne/blob/master/readme/easy.png)

8) Points are accumulated when there is a button click on an "active" class. When a class is recognized, the "display" score is added.

![alt tag](https://github.com/ajchan11/projectOne/blob/master/readme/point.png)

9) The function compare is called at the end of each game. The [0] of highScore is compared to [1]. If [0] < [1], the [0] is spliced out and the high score is replaced as the new [0]. If not, the [1] is popped off. 

![alt tag](https://github.com/ajchan11/projectOne/blob/master/readme/compare.png)



# Rinse and Repeat!