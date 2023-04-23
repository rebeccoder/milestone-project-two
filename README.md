<p><img src= "assets/images/multi-device-mockup.jpg"></p>

# TIC TAC TOE 

## Overview
This app was created for my second milestone project with The Code Institute where I demonstrate what I have learnt so far on their web development course. It is a interactive front end website using HTML, CSS and JavaScript. The websites goal is to be intuitive, user friendly, simple to use and fun. 

LIVE LINK : https://rebeccoder.github.io/milestone-project-two/index.html

## Table of contents

1. [UX](#ux)
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


## Design

The design was simple, I didn't need to use any external pictures. The whole web page was styled with CSS. The design was to keep it as simple yet effective as possible. the colour theme is black white and re

## User Experience (UX)

### Visitor Goals

The main target audience for the website are as follows:

- Groups of two to compete against eachother, couples or friends.
- The apps appearance is more suited for adults.


The main user goals are:


## Wireframes

The website was designed on a wireframe software called Balsamiq.



## Features



## Technologies Used

 [HTML Formatter:](https://webformatter.com/html)
    -  HTML Formatter was used to beautify the code.


### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JAVA SCRIPT](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks and Programs Used

- [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
-  [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
-  [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.



## Testing      

### Testing User Stories from UX Section

` 1. As a user, I want to easily understand the main purpose of the app so that I can be sure it's what I was looking for.`
- Upon landing on the application the user will see that the title is Tic Tac Toe in the tabs, the grid is then obvious in the centre of the page and when hover over the grid they will see naughts and crosses.

`2.  As a user who is an adult and not necessarily very techy, I want to be able to navigate the game easily and intuitively, so that the game is fun and easy and not overcomplicated.`
- The game is very simply done. The hover elements allows the user to see who's turn it is, the 'not allowed' cursor over the cells that are already filled shows that they are not able to use those cells. Once someone has won the winning message screen appears showing that there is nothing more that can be done in the game unless they press the restart game which will refresh the game for them. 

`3. As a user who is using the app on my lunch break, I want the design to be simple, so that it's a calm game that's not overstimulating.`
- The design of the game is very simple, it is black and white with nothing too fancy or colourful or distracting. I wanted to keep it very simple and very neutral so that it's not overstimulating, just relaxing.

### Validating Code

I ran the HTML code through the [W3C validator](https://validator.w3.org/) and had no errors.

And the CSS code ran through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) with no errors.

The Javascript code ran through the [Jshint validator](https://jshint.com/) without any major issues although there was 59 warnings.

The only errors coming back were that I missed a lot of semi-colons on the following lines of code:

12, 13, 23, 24, 25, 26, 27, 28, 29, 31, 33, 37, 40, 41, 42, 43, 44, 45, 46, 50, 52, 53, 55, 57, 59, 60, 68, 70, 72, 79, 80, 84, 86, 87, 93, 98, 99, 101, 103, 111, 112, 113.

So I added semi-colons to all these lines detected.
The other error that came up was "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)." which to my understanding is just an issue with the version of Jshint I was using not a bug in the code itself.

### Known Bugs
As far as I'm aware there are no bugs left in the code, although the accessibility would benefit from being worked on more!

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/rebeccoder?tab=repositories)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://rebeccoder.github.io/milestone-project-two/index.html) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

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


## External Sources of Code

The tic tac toe game was built based on a youtube tutorial:

[Build Tic Tac Toe With JavaScript - Tutorial](https://www.youtube.com/watch?v=Y-GkMjUZsmM)
by Web Dev Simplified
