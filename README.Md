## Derezzball

This is game inspired by the movie Tron and the game Pong. It will be played in a 3 dimensional cube with the AI opponent on the opposite wall. The first player to successfully hit the ball on their opponents wall wins a point. Game to 1. It's do or deresolution. This is Derezzball.

### Functionality and MVP

- [ ] Users will be able to control their paddle through their mouse movements.
- [ ] Play an AI player
- [ ] Choose their paddle color.

In addition, this project will include:
- [ ] A production README
- [ ] My personal links.

### Wireframes

This app will consist of a single screen. Their are no on screen controls besides a a button to start the game. It should be intuitive enough where a player will see they control the digital paddle on mouseover that their paddle will be controlled with their mouse movements.

![wireframes](https://github.com/wjoeyu/Derezzball/blob/master/Derezzball.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `Javascript` for game logic
- `Canvas` for rendering
- `Three.js` for 3d-rendering

In addition to the entry file, there will be three scripts involved in the project:

`Ball_Cube.js`: This script will handle the rendering of the board and the game ball
`Rinzler.js`: This script will handle the logic of the AI player

### Implementation Timeline

** Day 1:
Set up all necessary Node modules, including getting webpack up and running. Goals for the day:
- Learn Three.js
- Render a cube on the page.

** Day 2-3:
Dedicate this day fully to Three.js.
- Render a ball with physics in the 3d cube.

** Day 3-4:
Create the players
- Create AI player logic in `Rinzler.js`.
- Create User paddle.

** Day 5 ** : Style the game in the style of the playing field in Tron.


### Bonus features

- [ ] Variable AI player difficulty
