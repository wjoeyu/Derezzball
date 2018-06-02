# Derezzball

This is a game inspired by the movie Tron and the game Pong. It will be played in a 3 dimensional cube with Rinzler, the AI opponent, on the opposite wall. The first player to successfully hit the ball on their opponent's wall wins. Game to 1. It's do or deresolution. This is Derezzball.

The app uses vanilla JavaScript DOM manipulation for game controls and game action prompts. 3-D objects were built using the
[three.js](https://threejs.org/) library.


[Derezzball Live Demo](http://www.joey-wu.com/Derezzball/) (best played on a desktop or laptop)

![images](https://github.com/wjoeyu/Derezzball/blob/master/images/derezzball.gif)

## How to Play
- Ther user controls the disc paddle with the mouse
- Click the game window to start the gameplay by launching the ball towards the opposite side of the cube
- If the user strikes the ball with the center of the disc, the ball speed increases
- If the user strikes the ball with the edge of the disc, the ball ricochets at a sharper angle
- If the user successfully clicks the mouse on strike of the ball, the ball launches back at the computer player at a random angle.
- Successfully hit the opponent's wall with the ball to win.

## Technical Implementations

### Different Ball Actions

With the simple geometric calculation of distance between the center of the ball and the user disc on impact, I was able to create different ball behaviors based on where the disc struck the ball. Here is the code for speeding up the ball when it hits the middle of the user's disc:

```JavaScript
// ball.js

if (ball.position.z === 0 && (
  Math.sqrt((
    Math.pow((disc.position.x-ball.position.x),2) +
    Math.pow((disc.position.y-ball.position.y),2)
  )) < 24) && (ballDirectionZ === 1 && ballSpeed !== 0))
  {
    ballSpeed += 1;

    ...
  }
```
The game action of launching the ball back at the AI at a sharper angle is implemented with similar logic seen above, but with different parameters for the where the ball strikes the disc.

### Ball Action Prompts

What fun is creating a unique and different ball action if the user doesn't know about it?! With the use of simple vanilla JS DOM manipulation, I selected pre-made HTML elements with the specific ball action text and made them visible at the position the user deflects the ball. The following code is within the same conditional block of code as above. Here I am popping up the in-game alert of "SPEED UP TO: (BALLSPEED)!" when the user successfully speeds up the ball.:

```JavaScript
// ball.js

  ...

  const speedUpText = document.getElementById('speedup');
  let y = canvas.offsetTop + canvas.height/2 - 50 - ball.position.y;
  let x = canvas.offsetLeft + canvas.width/2 + ball.position.x;

  speedUpText.style.top = `${y}px`;
  speedUpText.style.left= `${x}px`;

  while (speedUpText.firstChild) speedUpText.removeChild(speedUpText.firstChild);

  speedUpText.style.visibility = "visible";
  speedUpText.innerHTML=`SPEED UP TO: ${ballSpeed}!`;

  setTimeout(function(){
    speedUpText.style.visibility = "hidden";
    },888);

  ...

```
### AI logic

Rinzler, the opponent disc on the other side of the cube, follows the x and y positions of the ball with linear interpolation. I enfore a limit to the max speed of Rinzler in order to make it beatable:

```JavaScript
// disc.js

export const rinzlerAI = () => {
  let rinzlerDirectionX = 0, rinzlerDirectionY = 0;
  let rinzlerSpeed = 8.8;

  rinzlerDirectionY = (ball.position.y - rinzler.position.y);
  rinzlerDirectionX = (ball.position.x - rinzler.position.x);

	if (Math.abs(rinzlerDirectionX) <= rinzlerSpeed)
	{
		rinzler.position.x += rinzlerDirectionX;
	}
	else
	{
		if (rinzlerDirectionX > rinzlerSpeed)
		{
			rinzler.position.x += rinzlerSpeed;
		}
		else if (rinzlerDirectionX < -rinzlerSpeed)
		{
			rinzler.position.x -= rinzlerSpeed;
		}
	}

	if (Math.abs(rinzlerDirectionY) <= rinzlerSpeed)
	{
		rinzler.position.y += rinzlerDirectionY;
	}
	else
	{
		if (rinzlerDirectionY > rinzlerSpeed)
		{
			rinzler.position.y += rinzlerSpeed;
		}
		else if (rinzlerDirectionY < -rinzlerSpeed)
		{
			rinzler.position.y -= rinzlerSpeed;
		}
	}
};

```

### Rinzler (AI Player)

## Future Features

- I hope to add different difficulties for the AI and/or levels at which the AI difficulty increases.
- Introduce scoring and level progression.
- Utilize meshLambertMaterial on the 3d objects so that they can receive a light source and lighting effects.
