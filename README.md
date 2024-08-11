<div align="center">
 <h1>Welcome to the Game Project</h1>
  <h1>4096</h1>
</div>
<div style="margin: 0;">
  <h2></h2>
</div>
## TO DO ##<br>
 What was your motivation?<br>
 Why did you build this project?<br>
 What problem does it solve?<br>
What did you learn?<br>
What makes your project stand out?<br>
Your README might also describe some of the challenges you faced, as well as the feaures you plan to implement in the future. And if you project is deployed, make sure to include a link to the deployed application so people can see it in action.<br>
To add screenshot, create assets/image folder and save the screenshot there and link it.

<div style="margin: 0;">
  <h2>Description</h2>
</div>

 **4096** is a very captivating puzzle game demanding players to merge tiles with the same number. The purpose is to build a large number with the target to gain **4096**. With the movement of arrow keys players have to tactically merge same numbers in a 8x8 grid to achieve the desired high number and making space for new tiles. **4096** is a tile merging game that offers users hours of relaxation and mental workout.

<div style="margin: 0;">
  <h3>Objective</h3>
</div>
The purposes of the game is to merge the tiles to form the number  4096. Initially the game begins with a few tiles on the the grid. The players can move the tiles with the same value up, down, right and left with the arrow keys to merge the tiles and form a new tile with doubled value. For example, one can merge two tiles having the value 5 to  create a new tile with the value 10. When a player successfully generates 4096 or when there are no valid moves possible, the game ends.

<div style="margin: 0;">
  <h3>Installation</h3>
</div>

 No installation required.

<div style="margin: 0">
<h3> Features</h3>
8x8 Grid: The grid is larger compared to traditional 4x4 games. Therefore, it provides a distinctive challenge and demands more strategic planning.<br>
Responsive Controls: The controls are smooth and responsive. So, it provides an enjoyable experience of game.<br>
Visual and Audio Feedback: The quiet animations and sound effect enhances players' gaming experience without distraction.<br>
Local Storage: Players' high scores and previous game status are saved locally. This allows the plalyers to pick up where they left off or start a new game.

 <div style="margin: 0;">
  <h3>Usage</h3>
</div>

 Use your arrow keys to move the tiles. Up Arrow will move the tiles up, Down Arrow will move them down, Left Arrow will move the tiles left and Right Arrow key will shift the tiles to the right.

<div style="margin: 0;">
  <h3>Mechanism</h3>
</div>

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
<div style="margin: 0">
<h3>Conclusion</h3>
"4096" is a test of foresight, planning, and  strategy. It is not only a game, but provides endless hours of entertainment where players tries hard to reach the ultimate goal of creating a 4096 tile. "4096" offers a rewarding and challenging experience for all, whether one is a casual player looking for a quick puzzle fix or a dedicated gamer who aims for high scores.
<div style="margin: 0">
<h3>Additional Instructions</h3>
Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.


