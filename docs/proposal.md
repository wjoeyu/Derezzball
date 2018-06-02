## Derezzball

This is game inspired by the movie Tron and the game Pong. It will be played in a 3 dimensional cube with the AI opponent on the opposite wall. The first player to successfully hit the ball on their opponent's wall wins a point. Game to 1. It's do or deresolution. This is Derezzball.

### Functionality and MVP

- [ ] Users will be able to control their paddle through their mouse movements.
- [ ] Play an AI player

In addition, this project will include:
- [ ] A production README
- [ ] My personal links.

### Wireframes

This app will consist of a single screen. Their are no on screen controls, but will have prompts to start and reset game with mouse clicks. It should be intuitive enough where a player will see they control the digital paddle on mouseover that their paddle will be controlled with their mouse movements.

![wireframes](https://github.com/wjoeyu/Derezzball/blob/master/wireframes/Derezzball.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `Javascript` for game logic
- `Three.js` for 3d-rendering an calculations

In addition to the entry file, there will be three scripts involved in the project:

- `ball.js`: This script will handle the collision logic and special moves of the ball object.
- `gamecube.js`: This script will handle the rendering of the board.
- `disk.js`: This script will handle the logic of the AI player and the game controls for the user.
- `light.js`: This file will create a light source for the game if 3d objects with lambertMaterials (textures that can receive lighting effects).

### Implementation Timeline

**Day 1**: Set up all necessary Node modules, including getting webpack up and running. Goals for the day:
- Learn Three.js
- Render a cube on the page.

**Day 2-3**:
Dedicate this day fully to Three.js.
- Render a ball with physics in the 3d cube.

**Day 3-4**:
Create the players
- Create AI player logic in `Rinzler.js`.
- Create User paddle.

**Day 5**: Style the game in the style of the playing field in Tron.


### Bonus features

- [ ] Variable AI player difficulty
