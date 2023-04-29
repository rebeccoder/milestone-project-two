![Mock Up](/assets/images/website-mockup.png)

# TIC TAC TOE 

## Overview

This is a Tic Tac Toe game built using HTML, CSS, and JavaScript. It was created for my second milestone project with The Code Institute.

LIVE LINK : https://rebeccoder.github.io/milestone-project-two/index.html

## Table of contents

1. [UX](#ux-user-experience)
    - [Visitor Goals](#visitor-goals)
    - [User Stories](#user-stories)
    - [Design Choices](#design-choices)
    - [Wireframes](#wireframes)

2. [Features](#features)

3. [Future Goals](#future-goals)

4. [Technology Used](#technology-used)

5. [Testing](#testing)

6. [UI](#ui)

7. [Issues and Resolutions](#issues-and-resolutions)

8. [Credits](#credits)



## UX (User Experience)

### **Visitor Goals**

The main target audience for the website are as follows:

- Groups of two to compete against eachother, couples or friends.
- The apps appearance is more suited for adults.
- Is suitable for total beginners as there is a instructions page.

The main visitor goals are as follows:

- Create an easy to use game for two people to play together online
- Allow the users to enter their names for a personalised expereience
- Have an instructions page for people who may have never played before
- To update the scoreboard so that users can keep track of their scores


### **User Stories**

- As a User I want to know the rules of the game
- As a User I want to be able to play against my componant 
- As a User I want to know who's turn it is 
- As a User I want to keep track of my score
- As a User I want to be notified when someone wins the game
- As a User I want to be able to reset the game without having to re-enter our names

## Design Choices

### **Colours**

The colour choices for the website were kept simple. Black and white with a bit of red for a statement colour. The hover effect was a dark grey colour for visibility. 

![Color Chart](/assets/images/color-chart.png)

### **Fonts**

After playing around with a few fonts I decided to go with Oswald from Google fonts which is a sans-serif font. 
It is bold and thick yet very simplistic. The font really brought out the style I was going for.

### **Styling**

The styling for the game board was influenced from a youtube tutorial which I have credited below. 
The winning message was also a Sweet Alert message but I changed the buttons to black to match the monochrome style of the board.
All other styling in the wesbite is original CSS.


## Wireframes

The website was designed on a wireframe software called Balsamiq.  
  
### **Homepage Wireframe:**
![Homepage Wireframe](/assets/images/homepage-wireframe.png)
### **Instruction Page Wireframe:**
![Instructions Wireframe](/assets/images/instructions-wireframe.png)
### **Game Area Wireframe:**
![Game Area Wireframe](/assets/images/gamearea-wireframe.png)
### **Mobile Wireframe:**
![Mobile Wireframe](/assets/images/mobile-wireframe.png)

## Features

### **Player Name Inputs**

![Name Inputs](/assets/images/name-inputs.png)


- The game allows the user to input their name before starting a new game. This feature adds a personal touch to the game, making the user experience more engaging. Additionally, it provides a way to track and compare scores between players. Once the user inputs their name, it is displayed at the top of the game area, as well as on the scoreboard and the winning message giving them a sense of ownership over their game.

---
 
### **Home Page Buttons**

![Homepage Buttons](/assets/images/homepage-buttons.png)
  
- The home page of this website features two buttons that allow the user to navigate to different parts of the website. The "Start Game" button takes the user to the game area, where they can start playing the game. The "Instructions" button takes the user to a separate page that provides instructions on how to play the game. These buttons provide a simple and intuitive way for users to interact with the website and access the different features of the game.  

---

### **Instructions Page**
  
![Instructions Page](/assets/images/instructions-page.png)
  
- The "Instructions" page is a feature of the game that provides the user with the rules and objectives of the game. This page is accessible from the home page through a button labeled "Instructions". The page displays a simple set of instructions on how to play the game, along with a button that returns the user to the home page. The use of this page makes the game more user-friendly and helps to ensure that all players understand the rules before starting the game. It also has a button that returns the user back to the home page to enter the player names and start the game.

---  

### **Tic Tac Toe Board**
 
![Game Board](/assets/images/game-board.png)  
  
- The Tic Tac Toe board is the central feature of the game, where players can place their X and O markers to compete against each other. It is designed with a responsive layout, making it easy to play on different screen sizes. The board is fully functional, preventing players from placing a marker on a square that has already been taken and determining the winner once the game is over. Additionally, the board is styled with a simple and modern design, enhancing the overall user experience of the game.

 ---

### **Hover Elements**
  
![Hover Elements](/assets/images/hover-elements.png)  
  
- The board in the game includes a hover effect on each cell that displays a grey X or an O when the relevant player hover their mouse over an empty cell. If the cell is in use then the cursor changes to a blocked sign to show the user that they can not enter anything into this cell. This feature improves the user experience and provides visual feedback to the user when they interact with the game board. 

--- 
### **Player's Turn Displayed**
 
![Player 1 Turn](/assets/images/player1-turn.png)   
![Player 2 Turn](/assets/images/player2-turn.png)

- In this project, a feature was added to display the current player's turn above the Tic Tac Toe board. This feature helps the players keep track of whose turn it is and adds clarity to the game. 

--- 
### **Winning Message**  
  
![Wining Message](/assets/images/winning-message.png)  
  
- The winning message in this game was made using 
Sweet Alerts. A message box pops up in the center of the screen saying the "player1/player2 wins!" using the actual name that was entered by the user. It also gives the option to play again or return to the main menu. This feature makes it easy for players to determine the winner of the game and adds a fun element to the gameplay.

---
### **Draw**  
  
![Draw](/assets/images/draw-message.png)  
  
- The winning message also works in the same way if there's a draw.

---

### **Scoreboard**  
  
![ScoreBoard](/assets/images/scoreboard.png)  
  
- The game includes a scoreboard that keeps track of the number of wins for each player. The scoreboard is displayed durectly underneath the Tic Tac Toe board and updates automatically after each game. It displays the player names and the number of games won. This feature provides an engaging and competitive experience for the players, as they can keep track of their progress throughout the game.

---

### **Game Area Buttons**  
  
![Game Area Buttons](/assets/images/scoreboard.png)  
  
- The game area contains two buttons that allow users to reset the game or return to the home page. The "Reset Game" button clears the current game board and resets the score to zero, allowing players to start a new game. The "Home" button takes the user back to the home page, where they can choose to start a new game or read the instructions. These buttons provide a simple and intuitive way for users to navigate the game and access important features.

--- 
## Future Goals

- To allow users to make accounts and play in tournaments online with their friends and with strangers
- To display a high score scoreboard
- To keep track of users wins and losses, who they played and a breakdown of how they won/loss

 
## Technologies Used

 [HTML Formatter:](https://webformatter.com/html)
    -  HTML Formatter was used to beautify the code.

 [Sweet Alerts:](https://sweetalert2.github.io/#download)
    -  I used sweet alerts for my winning message


### **Languages Used**

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript)

### **Frameworks and Programs Used**

- [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod and Code Anywhere terminal to commit to Git and Push to GitHub.
-  [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
-  [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.


## Testing      

### **Responsivity**

**Google DevTools:**  
   
To test the responsiveness of the game on different devices, I used Google DevTools, which is built into the Chrome browser.
By using Google DevTools, you can easily test the game's responsiveness on various devices without needing to own those devices physically. This helps to ensure that the game looks and functions correctly on all devices, providing a better user experience for all players. The devices available to test on DevTools are as follows:
- Pixel 2
- Pixel 2 XL
- Pixel 3
- Pixel 3 XL
- Pixel 4
- Pixel 4 XL
- iPhone 5/SE
- iPhone 6/7/8
- iPhone 6/7/8 Plus
- iPhone X
- iPad
- iPad Pro
- Surface Duo
- Galaxy Fold
- Galaxy Note 3
- Galaxy Note 9
- Galaxy S5
- Galaxy S9/S9+
- Nexus 5X
- Nexus 6P

**Desktop:**  
  
The game was tested on various desktop browsers, including Chrome, Firefox, and Safari, at different resolutions and with browser tools to emulate different screen sizes.
  
For example, during testing on a desktop device, the game was viewed on a 1920x1080 resolution screen as well as on a smaller 1366x768 resolution screen. The game was also viewed on both Chrome and Firefox browsers to ensure cross-browser compatibility. Additionally, the browser's built-in tools were used to emulate smaller screen sizes to test the responsiveness of the game.

**Mobile:**  
  
The game was tested on various mobile devices, including iPhones and Androids, with different screen sizes and resolutions.  
  
For example, during testing on a mobile device, the game was viewed on an iPhone X and an iPhone 8, both with different screen sizes and resolutions. The game was also viewed on an Android device with a smaller screen size and lower resolution. The game was tested both in portrait and landscape mode to ensure that it is displayed correctly in both orientations.
  
   
**If you experience any responsivtiy issues**:
- Clear your browser cache and reload the page
- Make sure that you have a stable internet connection
- Check if your browser is up to date
- If the issue persists, try accessing the website on a different device or browser.

## Validating Code
---
- The HTML was validated using [W3C validator](https://validator.w3.org/) without any errors or warnings:
![HTML Warnings](/assets/images/w3validator-warnings.png)
---
- The CSS code ran through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) without any errors, however displayed the following warnings:

![CSS Warnings](/assets/images/jigsaw-warnings.png)

  - In W3C Jigsaw, "Imported style sheets are not checked in direct input and file upload modes" means that any imported style sheets, which are external CSS files referenced by a link tag in the HTML file, are not validated by the tool in direct input or file upload modes. 
  - The warnings on line 127-185 means that since CSS variables are dynamic in nature and can change at runtime, they cannot be statically checked during validation. In other words, the W3C Jigsaw validator is not capable of detecting issues related to CSS variables during the validation process. 
  - The other warnings complaining about borders being the same colour as backgrounds is necessary for the curved border of the buttons in my code.

---

The Javascript code ran through the [Jshint validator](https://jshint.com/) with one error because the instructionsPage() is not called in the JS file, but it is being called in the HTML itself.

![Jshint](/assets/images/jshint.png)

---

To ensure the project is performing optimally, a [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) report was conducted with the following scores:
![lighthouse scores](/assets/images/lighthouse.png)
These scores indicate that the project has a high level of accessibility and meets best practices and SEO standards. The perfomance score has been brought down by my computers antivirus software, so the score is not an indicator for the need to improve anything.

## UI 


### **Welcome Area**
- Logo displays correctly on all devices
- Player 1 and 2 name are required to play the game
- Buttons navigate through pages as expected

### **Instructions Area**
- Logo displays corrently on all decives
- Instructions are displayed clearly for user to read
- Gives option to return to main menu but not to start game as player names need to be entered

### **Game Area**
- Player's name displays above to board and switches each turn
- Hover effect when cursor is over empty cells
- Blocked cursor displays when hovering over cells that are already full
- Place mark of X or O when the user clicks on the cell
- When player wins there is a winning message
- Score board is updated at the end of each game
- Reset button clears the scoreboard and the game board
- Return to main menu resets the game and player names


## Issues and Resolutions

* Problem: X's and O's not able to have aria-labels
* Cause: The X's and O's are made of psuedo elements instead of actual text so,
  this causes issues with screen readers as they don't exist within the HTML document, so they are basically completely invisible.
* Resolution: Added a role of "text" to the cell divs and then added an arialabel through Javascript. This was tested on the console  
  and seemed to work so hopefully it works for screen readers
---
* Problem: Player1 name displaying on the actual board when cell is clicked.
* Cause: The cells inner html was set to display player1 and X class.
* Resolution: removed the mistakes in the code so the cells inner html just displays X.
---
* Problem: Scoreboard and Reset button displaying in welcomeArea but not the gameArea,
  but after pressing the return to menu button, then starting the game again, the gameArea only displays the scoreboard and reset button but nothing else.
* Cause: There was an extra `</div>` tag right before the scoreboard div, which was causing the scoreboard and restart button to be    
  outside of the gameArea div. Also the gameArea div is not being cleared properly when the user returns to the main menu.
* Resolution: Removed the unnecessary closing div tag and modified the returnToMenu function to hide the gameArea.
---
* Problem: After Circle wins, the following game would have a X hover class but when the mark was placed it was circles turn
* Cause: Although circle_turn was set to false it was at the end of the startGame function and was getting overrided when circle won
  the game
* Resolution: Removed the line circleTurn = false; from the end of the function, and added it at the end of the function's main block, 
  just before the displayCurrentPlayer() function is called. This ensures that X will always start the game.
---
* Problem: When entering both names into the player name inputs and then pressing the "read instructions" button, the whole html       
  document showed when only the instructionsArea was meant to display. This only happens when both names were entered, if nothing was enetered or if only one name was entered this didn't happen.
* Cause: The "read instructions" button was inside the form element and itw was recognising it as a submit button even though it wasn't
* Resolution: Moved the button out of the form element and it worked as expected.

### **Known Bugs**
- As far as I'm aware there are no bugs left in the code, although the accessibility would benefit from being worked on more!

## Deployment

### **GitHub Pages**

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/rebeccoder?tab=repositories)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://rebeccoder.github.io/milestone-project-two/index.html) in the "GitHub Pages" section.

### **Forking the GitHub Repository**

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### **Making a Local Clone**

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/rebeccoder/milestone-project-two
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/rebeccoder/milestone-project-one
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.


## Credits 

- The functionality of the games board was built based on a youtube tutorial:
[Build Tic Tac Toe With JavaScript - Tutorial](https://www.youtube.com/watch?v=Y-GkMjUZsmM)
by Web Dev Simplified
- The winning message structure was from [Sweet Alerts](https://sweetalert2.github.io/#download)
- A big thankyou to my mentor Richard for getting me through this project!
- A big thankyou to te tutors at Code Institute, I don't know where I'd be without them!

