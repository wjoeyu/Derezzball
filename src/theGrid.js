import * as THREE from 'three';
import { cube } from './gamecube';
import { ball, ballTracker, ballLose, ballWin, ballPhysics, launchBall } from './ball';
import { disc, discController, rinzler, rinzlerAI } from "./disc";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 1 , 0.1, 1000 );
const renderer = new THREE.WebGLRenderer( {alpha : true});

renderer.setSize( 700, 700 );
renderer.setClearColor( 0x000000, 0 );

scene.add( disc, cube, ball, ballTracker, rinzler );

disc.position.z = 0;
rinzler.position.z = -500;
rinzler.position.x = 0;
cube.position.z = -250;

ball.position.z = 0;
ball.position.y = 0;
camera.position.z = 500;

ballTracker.position.z = 0;
ballTracker.position.x = -333;
ballTracker.position.y = -333;

document.addEventListener("mousemove", discController, false);

function animate() {
	requestAnimationFrame( animate );

  rinzler.rotation.z += -0.24;
  disc.rotation.z += 0.24;

  ballPhysics();
  rinzlerAI();

  if (ball.position.z > 0) {
    ballLose.position.z = 0;
    ballLose.position.x = ball.position.x;
    ballLose.position.y = ball.position.y;
    scene.remove( ball );
    scene.add( ballLose);
    ballLose.rotation.y -= 0.02;
    ballLose.rotation.x -= 0.02;
  }
  else if (ball.position.z < -500 && (
    Math.sqrt((
      Math.pow((rinzler.position.x-ball.position.x),2) +
      Math.pow((rinzler.position.y-ball.position.y),2)
    )) >= 90
    )) {
    ballWin.position.z = -500;
    ballWin.position.x = ball.position.x;
    ballWin.position.y = ball.position.y;
    scene.remove( ball );
    scene.add( ballWin);
    ballWin.rotation.y += 0.02;
  	ballWin.rotation.x += 0.02;
  }
	renderer.render( scene, camera );
}

animate();

document.body.appendChild(renderer.domElement);
const screen = document.getElementsByTagName('canvas')[0];

screen.addEventListener("click", () => {
  document.getElementById('click-to-start').style.visibility = "hidden";
  scene.remove(ballLose);
  scene.remove(ballWin);
  scene.add(ball);
  launchBall();
});
const joey = document.createElement('div');
joey.classList.add('joey');
joey.innerHTML = "created by Joey Wu";
document.body.appendChild(joey);
