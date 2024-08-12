<h1 align="center">Welcome to the Puzzle Game Application</h1><br> 
<h1 align="center">4096</h1>
<font color="green">// TO DO  ..............................................</font>
<br>

 ### Introduction<br>
<font color="orange"> What was our motivation?</font><br>
 The purpose of building the application is to implement what we learned as a student of Full Stack Application Developer<br>
 <font color="orange">Why did we build this project?</font><br>
 We built the 4096 game because it's an interesting interactive user friendly puzzle game that gave us a scope for using html, css and javascript.<br>
 <font color="orange">What problem does it solve?</font><br>
 The application handles the events of dragging and dropping of the tiles at user desired locations using arrow keys. It does the work of generating random numbers, rnadom tiles, does the calculation of merged tiles, displays current score, the highest achieved score for a player.<br>
 <font color="green">//TO DO.......................................................................................................</font>

<font color="orange">What did we learn?</font><br>
We learned how to use different types of Event Handling invloling dragging and dropping, moving tiles with arrows. Creating random tiles with random colours, and assigning random values on each tile after every movement, was a good learnig activity. We learned  Math functions of calculation. We learnt how to store the tile values and user's score in the browser's local storage and again displaying them with display functions.

<font color="orange">What makes our project stand out?</font><br>
Our project stands out because of its cool appearance and functionality. It provides users a scope to face challenges and yet offers hours of relaxation and mental workout.<br>
<font color="orange">Some of the challenges we faced during the application developmet</font><br>
<font color="green">//TO DO .......</font>
*   Applying CSS FrameWork?


<font color="orange">Features we plan to implement in the future</font><br>


<font color="green"> README might also describe some of the challenges you faced, as well as the feaures you plan to implement in the future. And if you project is deployed, make sure to include a link to the deployed application so people can see it in action.<br>
To add screenshot, create assets/image folder and save the screenshot there and link it.</font><br>

### Description


 **4096** is a very captivating puzzle game demanding players to merge tiles with the same number. The purpose is to build a large number with the target to gain **4096**. With the movement of arrow keys players have to tactically merge same numbers in a 8x8 grid to achieve the desired high number and making space for new tiles. **4096** is a tile merging game that offers users hours of relaxation and mental workout.


### Objective

The purposes of the game is to merge the tiles to form the number  4096. Initially the game begins with a few tiles on the the grid. The players can move the tiles with the same value up, down, right and left with the arrow keys to merge the tiles and form a new tile with doubled value. For example, one can merge two tiles having the value 5 to  create a new tile with the value 10. When a player successfully generates 4096 or when there are no valid moves possible, the game ends.


### Installation
 No installation required.

###  Features
8x8 Grid: The grid is larger compared to traditional 4x4 games. Therefore, it provides a distinctive challenge and demands more strategic planning.<br>
Responsive Controls: The controls are smooth and responsive. So, it provides an enjoyable experience of game.<br>
Visual and Audio Feedback: The quiet animations and sound effect enhances players' gaming experience without distraction.<br>
Local Storage: Players' high scores and previous game status are saved locally. This allows the plalyers to pick up where they left off or start a new game.

 
### Usage


 Use your arrow keys to move the tiles. Up Arrow will move the tiles up, Down Arrow will move them down, Left Arrow will move the tiles left and Right Arrow key will shift the tiles to the right.


### Mechanism


__Starting the Game:__ The game starts with two tiles placed randomly on the  8x8 grid. These tiles can have a value of 2,4,8 or 16.<br> <br>
__Moving the Tiles:__ All the tiles on the grid will slide in the direction of the arrow key movement untill they hit the edge of the grid or another tile.<br><br>
__Merging Tiles:__ If two tiles of same vallue touch each other while moving, they will merge into one tile with doubled value. As you play with the up, down, right and left keys the tiles will chnage positions and colour.  As you play the tiles will display random numbers. You can merge the tiles with the same number into one when they touch. For example, if a tile with number 8 touches another tile with number 8 on it, the two 8s will merge to 16 and so on. There are two score boards for **Current Score** and **Highest Score**. Current score displays your current total while the Highest Score shows the highest total you achieved in your total number of games.<br><br>
**Adding New Tiles:** A new tile appears on the grid at a random empty spot after each move. It can have a value of 2,4,8, or 16, more common to have with value 2 and 4.<br><br> 
**Game Over:** When there are no more valid moves available, having no empty spaces and when there are no two neighbouring tiles with the same value, the game ends.<br><br>
**Winning the Game:** A player wins when he has created a tile with the **4096** on it. However,if desired, he can continue to play to achieve higher scores.<br><br>
**Strategies:**<br> 
**Planning before a move:** One has to plan ahead considering the result of each move and how new tiles will alter the placement of the tiles on the grid. Avoiding random movement is a good strategy, else it can quickly fill the grid and your options may become limited.<br>
**Focus on Corners:** Players must try to keep the tiles with highest valules in a corner, so that it will be easy to control the board and merge other tiles towards that corner.<br>
**Create Space:** You must try to move away tiles with lower values to make room for new tiles with higher values.<br>
**Chain Reaction:** You should look for the opportunity to create a chain reaction where one merge leads to another. This will help in making more space and getting higher valules in less moves.<br>
**Scoring**<br>
**Score:** Players earn points equal to the value on the new tile they merge each time. For example, if you merge two tiles with 32 on it, you will earn 64.<br>
**High Score:** The game application will keep track of the highest score you gained. You can compete with your friends by collecting highest score.<br><br>

### Technologies Used:


*  html<br>
*  Java<br>
*  CSS<br>
*  CSS Framework: Bootstrap


### Credits:
Collaborators with GitHub Links:

  * Ian Stocker :
  * Elliot Stocker: <br>
  * Joey Vedder: <br>
  * Matthew Mendez: <br>
<font color="green">
// TO DO  if we used third party assets, lint creator with links.........</font>

  
<font color="green">// TO DO  If you followed tutorials, include links to those here as well..</font>



<font color="green">Add MIT to your project’s package description, if applicable (e.g., Node.js, Ruby, and Rust). This will ensure the license is displayed in package directories.Source
Who’s using this license?
Babel
.NET
Rails
About Terms of Service Help improve this page</font>




### License
MIT License<br>
<font color="green">// TO DO  ; How to include license or NOT............................................</font>

### Conclusion
"4096" is a test of foresight, planning, and  strategy. It is not only a game, but provides endless hours of entertainment where players tries hard to reach the ultimate goal of creating a 4096 tile. "4096" offers a rewarding and challenging experience for all, whether one is a casual player looking for a quick puzzle fix or a dedicated gamer who aims for high scores.<br>

<font color="green">// TO DO  ..............................................</font>


### Additional Instructions
Provide instructions and examples for use. Include screenshots as needed.<br>
<font color="green">// TO DO ...To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```
</font>

---

 <font color="green">// TO DO ...The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.</font>

## Badges
<font color="green">// TO DO  ..............................................
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.</font><br>



## How to Contribute
<font color="green">// TO DO  ..............................................
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
</font><br>
## Tests
<font color="green">// TO DO  ..............................................<br>
Go the extra mile and write tests for your application. Then provide examples on how to run them here.</font>


