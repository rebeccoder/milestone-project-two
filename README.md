# TIC TAC TOE 

## Overview
This app was created for my second milestone project with The Code Institute where I demonstrate what I have learnt so far on their web development course. It is a interactive front end website using HTML, CSS and JavaScript. The websites goal is to be intuitive, user friendly, simple to use and fun. The game is suitable for anyone but it's minimalist design is to be more appealing to adults, to keep give them something to do either on their breaks at works or on the commute or just winding down in the evening. The idea is that it is a super simple, calm game that is familiar and the design is uncluttered and not over stimulating to help rest the mind.

LIVE LINK | 

## Wireframes

The website was designed on a wireframe software called Balsamiq.

### The main page of the webpage:

<p><img src= "assets/images/wireframe-1.jpg"></p>

### The winning message page:

<p><img src= "assets/images/wireframe-2.jpg"></p>



## Features


- The website is a black and white theme with a white background and black text
- There is a table in the centre of the screen with 9 cells, 3 across and 3 down.
<p><img src= "assets/images/empty-grid.jpg"></p>

- When you hover over the cells in the grid there is a hover effect showing a grey X when it's X's turn and a grey 0 when its 0's turn.

 <p><img src= "assets/images/hovering-grey-x.jpg"></p>

- The X or 0 then becomes black once the user clicks the chosen cell

<p><img src= "assets/images/black-x-and-0.jpg"></p>

- A 'blocked' cursor appears over the cells which are already in use when they're hovered over to make it clear that these cells can not be used
- When somebody wins a black background covers the screen and a message appears saying either "X's Win!" / "0's Win!" / "Draw!"

 <p><img src= "assets/images/x-wins.jpg"></p>

- There is a restart button under the winning message that takes you to the start of a new game

## Responsivity
This app has been trialled and tested on many devices and is fully responsive. No code was required to make the website responsive as it already worked on all devices so nothing needed to be rearranged or made compatible.It is fully responsive on all the following devices manually:
  - 24 inch screen for windows 10 PC
  - 17 inch screen for windows 10 PC
  - Macbook Air
  - Iphone 7
  - ASUS TUF-FX516PE-HN055T 15.6inch screen

The responsivity was also responsive to the following devices using Google Development tools
 - iPhone SE
 - iPhone XR
 - iPhone 12 Pro
 - Pixel 5
 - Samsung Galaxy S8+
 - Samsung Galaxy S20 Ultra
 - iPad Air
 - iPad Mini
 - Surface Pro 7
 - Surface Duo
 - Galaxy Fold  
 - Samsung Galazy A51/71
 - Nest Hub 
 - Nest Hub Max

## The Process
 
 Initially the html is almost completely invisible to the webpage, the only thing appearing is the restart button

 <p><img src= "assets/images/initial-html.jpg"></p>

 <p><img src= "assets/images/initial-webpage.jpg"></p>

So I then started adding some CSS styling to the webpage to begin making it look like the wireframe I made.

The first thing I did was set up some basic box sizing. I did this by adding the everything selector and everything that is going to be before and after. This essentially selects absolutely everything and makes styling the widths and heights a lot easier. 

 <p><img src= "assets/images/everything-code.jpg"></p>

I then removed the margins so that the black background in the winning message would be easier to put in place

 <p><img src= "assets/images/margin-code.jpg"></p>

The next thing I worked on was the actual board which is the element that wraps all of the cells. The settings allow the board to be easily centred in the middle of the screen in a 3x3 grid.

 <p><img src= "assets/images/board-cell-code.jpg"></p>
 <p><img src= "assets/images/black-grid.jpg"></p>
 
 To easily modify things with the width and height and make sure that everything is automatic I created some root variables. The first variable I created was the cell width. I then created a mark size which to modify the size of the x's and 0's. I decided to make the mark size 90% of the cell size so that the x's and 0's are slightly smaller than the the cells

 <p><img src= "assets/images/root-code.jpg"></p>

I then changed the colour of the cells as I didn't want them to be black, I changed the cell colour to white and the boarder colour to black and removed the borders from around the grid.

 <p><img src= "assets/images/no-grid-border-code.jpg"></p>

so now the board itself looks how I want it to look for the completed project.


I then began styling in an X. So instead of just typing an X into the cell and worrying about what style to use and it looking different on different devices and being hard to centre, instead I used just CSS and pseudo elements to create the X shape. Although upon reflection now I don't think I wouold use this method again which I will explain later in the README in the debugging section.

To  make the X I  firstly created this shape in the cell

 <p><img src= "assets/images/one-line-x-board.jpg"></p>

using the code.

 <p><img src= "assets/images/making-x-board-1.jpg"></p>


Because there is two of the lines one on top of the other to create the X shape I just rotated each line 45 degrees in opposite directions.

 <p><img src= "assets/images/making-x-board-2.jpg"></p>

Next, I made the circle element. I started with this code:

 <p><img src= "assets/images/circle-code-1.jpg"></p>

 which created this square in the boards cell

  <p><img src= "assets/images/initial-square-for-circle.jpg"></p>

and then the following code:

  <p><img src= "assets/images/circle-code-2.jpg"></p>

which creates the perfect circle.

  <p><img src= "assets/images/completed-circle.jpg"></p>

Next I added the 'not allowed' cursor for when the user hovers over the cells which were already filled:

  <p><img src= "assets/images/not-allowed-cursor.jpg"></p>
  <p><img src= "assets/images/not-allowed-cursor-view.jpg"></p>

I then added the grey X and 0 hover effect to the cells that are not in use:
  <p><img src= "assets/images/grey-hover-x.jpg"></p>
In order to do this I added a hover effect to the cells. Firstly I selected the board when it has the X class applied to it and got the cells inside of that board and add the hover effect to them . I basically just needed the same code that I used to create the X's and just changed the background color. So I added the hover::before and hover::after elements to the exact same code. 
  <p><img src= "assets/images/x-hover-code.jpg"></p>
Although as you can see this causes it to happen on all of them, even the ones that are already filled in:

  <p><img src= "assets/images/hovering-bug.jpg"></p>

What I want it to do is make sure it only works when I hover over an empty cell that doesn't have an X or an 0 in it. This is where I used the "not" selector.

  <p><img src= "assets/images/not-selector-code.jpg"></p>

Now when I hover over the X or 0 it's not overriding what I've already done. It's not doing the hover effect because it's checking the "not" selector first.


All I have to do then is change the hover color to grey:
  <p><img src= "assets/images/code-light-grey.jpg"></p>

This didn't actually work because I already had black being defined below it and overriding it so I removed that and defined this code above the other selector.

  <p><img src= "assets/images/code-black-x.jpg"></p>

So now I have a grey X that hovers over the empty cells when using the X board. I then repeated the whole process for the circle board for the same outcome with a grey circle hovering effect.


## Debugging

59 warnings
- 12	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 12	Missing semicolon.
- 13	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
13	Missing semicolon.
- 14	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 23	Missing semicolon.
- 24	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 24	Missing semicolon.
- 25	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 25	Missing semicolon.
- 26	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 26	Missing semicolon.
- 27	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 27	Missing semicolon.
- 28	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 28	Missing semicolon.
- 29	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 29	Missing semicolon.
- 31	Missing semicolon.
- 33	Missing semicolon.
- 37	Missing semicolon.
- 39	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
- 40	Missing semicolon.
- 41	Missing semicolon.
- 42	Missing semicolon.
- 43	Missing semicolon.
- 44	Missing semicolon.
- 45	Missing semicolon.
- 46	Missing semicolon.
- 50	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 50	Missing semicolon.
- 52	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
- 52	Missing semicolon.
- 53	Missing semicolon.
- 55	Missing semicolon.
- 57	Missing semicolon.
- 59	Missing semicolon.
- 60	Missing semicolon.
- 68	Missing semicolon.
- 70	'template literal syntax' is only available in ES6 (use 'esversion: 6').
- 70	Missing semicolon.
- 72	Missing semicolon.
- 77	'spread operator' is only available in ES6 (use 'esversion: 6').
- 77	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
- 79	Missing semicolon.
- 80	Missing semicolon.
- 84	Missing semicolon.
- 86	Missing semicolon.
- 87	Missing semicolon.
- 93	Missing semicolon.
- 98	Missing semicolon.
- 99	Missing semicolon.
- 101	Missing semicolon.
- 103	Missing semicolon.
- 109	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
- 110	'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
- 111	Missing semicolon.
- 112	Missing semicolon.
- 113	Missing semicolon.


