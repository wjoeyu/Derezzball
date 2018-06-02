# Derezzball

This is a game inspired by the movie Tron and the game Pong. It will be played in a 3 dimensional cube with Rinzler, the AI opponent, on the opposite wall. The first player to successfully hit the ball on their opponent's wall wins. Game to 1. It's do or deresolution. This is Derezzball.

The app uses vanilla JavaScript DOM manipulation for game controls and game action prompts. 3-D objects were built using the
[three.js](https://threejs.org/) library.


[Derezzball Live Demo](http://www.joey-wu.com/Derezzball/)

![images](https://github.com/wjoeyu/Derezzball/blob/master/images/derezzball.gif)

## How to Play
- User control their paddle through their mouse movement
- Click the game window to start the gameplay by launching the ball towards the opposite side of the cube
- If the user strikes the ball with the center of the disc, the ball speed increases
- If the user strikes the ball with the edge of the disc, the ball ricochets at a sharper angle
- If the user successfully clicks the mouse on strike of the ball, the ball launches back at the computer player at a random angle.

In addition, this project will include:
- [ ] A production README
- [ ] My personal links.

## Technical Implementations

This app will consist of a single screen. Their are no on screen controls besides a a button to start the game. It should be intuitive enough where a player will see they control the digital paddle on mouseover that their paddle will be controlled with their mouse movements.

![wireframes](https://github.com/wjoeyu/Derezzball/blob/master/wireframes/Derezzball.png)

## Future Features

- I hope to add different difficulties for the AI and/or levels at which the AI difficulty increases.
- Introduce scoring and level progression.
- Utilize meshLambertMaterial on the 3d objects so that they can receive a light source and lighting effects.
