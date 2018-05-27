import * as THREE from 'three';
import { cube } from './gamecube';
import { ball, ballTracker, ballLose } from './ball';
import { pointLight } from './light';
import { disc, discController } from "./disc";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 1 , 0.1, 1000 );
const renderer = new THREE.WebGLRenderer( {alpha : true});

// renderer.sortObjects = false;
renderer.setSize( 700, 700 );
renderer.setClearColor( 0x000000, 0 );

// scene.add( pointLight );

scene.add( disc, cube, ball, ballTracker );

cube.position.z = -250;
disc.position.z = 0;

ball.position.z = 0;
ball.position.x = 0;
camera.position.z = 500 ;

ballTracker.position.z = 0;
ballTracker.position.x = -333;
ballTracker.position.y = -333;

//BALL MOVEMENT

let ballDirectionX = .5;
let ballDirectionY = 1;
let ballDirectionZ = 1;
let ballSpeed = 4;

// ball.position.x += ballDirectionX * ballSpeed;
// ball.position.y += ballDirectionY * ballSpeed;
// ball.position.z += ballDirectionZ * ballSpeed;

if (ballDirectionY > ballSpeed * 4) {
  ballDirectionY = ballSpeed * 4;
} else if (ballDirectionY < -ballSpeed * 4) {
  ballDirectionY = -ballSpeed * 4;
}

if (ballDirectionX > ballSpeed * 4) {
	ballDirectionX = ballSpeed * 4;
} else if (ballDirectionX < -ballSpeed * 4) {
	ballDirectionX = -ballSpeed * 4;
}

document.addEventListener("mousemove", discController, false);

function animate() {
	requestAnimationFrame( animate );

  disc.rotation.z += 0.24;
  ball.rotation.y += 0.02;
	ball.rotation.x += 0.02;
	ball.position.x += ballDirectionX * ballSpeed;
	ball.position.y += ballDirectionY * ballSpeed;
	ball.position.z += -ballDirectionZ * ballSpeed;

  ballTracker.position.z = ball.position.z;

	if (ball.position.y <= -333){
	    ballDirectionY = -ballDirectionY;
	}
	if (ball.position.y >= 333){
	    ballDirectionY = -ballDirectionY;
	}
	if (ball.position.x <= -333){
	    ballDirectionX = -ballDirectionX;
	}
	if (ball.position.x >= 333){
	    ballDirectionX = -ballDirectionX;
	}
	if (ball.position.z <= -500){
	    ballDirectionZ = -ballDirectionZ;
	}
	if (ball.position.z >= 0 && (
      ball.position.y >= disc.position.y - 89
      && ball.position.y <= disc.position.y + 89
    ) && (
      ball.position.x >= disc.position.x - 89
      && ball.position.x <= disc.position.x + 89
    )) {
	    ballDirectionZ = -ballDirectionZ;
	}

  if (ball.position.z > 0) {
    ballSpeed = 0;
    ballLose.position.z = 0;
    ballLose.position.x = ball.position.x;
    ballLose.position.y = ball.position.y;
    scene.remove( ball );
    scene.add( ballLose);
    ballLose.rotation.y -= 0.02;
  	ballLose.rotation.x -= 0.02;

  }

	renderer.render( scene, camera );
}

animate();

document.body.appendChild(renderer.domElement);
