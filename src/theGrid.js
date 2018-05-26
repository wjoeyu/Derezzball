import * as THREE from 'three';
import { cube } from './gamecube';
import { ball } from './ball';
import { pointLight } from './light';
import { disc, discController } from "./disc";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 1 , 0.1, 1000 );
const renderer = new THREE.WebGLRenderer( {alpha : true});

// renderer.sortObjects = false;
renderer.setSize( 700, 700 );
renderer.setClearColor( 0x000000, 0 );

// scene.add( pointLight );

scene.add( disc );
scene.add( cube );
scene.add( ball );

cube.position.z = -250;
disc.position.z = 0;

ball.position.z = 0;
ball.position.x = 0;

//BALL MOVEMENT

let ballDirectionX = .5;
let ballDirectionY = 1;
let ballDirectionZ = 1;
let ballSpeed = 2.4;

// ball.position.x += ballDirectionX * ballSpeed;
// ball.position.y += ballDirectionY * ballSpeed;
// ball.position.z += ballDirectionZ * ballSpeed;

if (ballDirectionY > ballSpeed * 2.4) {
  ballDirectionY = ballSpeed * 2.4;
} else if (ballDirectionY < -ballSpeed * 2.4) {
  ballDirectionY = -ballSpeed * 2.4;
}

if (ballDirectionX > ballSpeed * 2.4) {
	ballDirectionX = ballSpeed * 2.4;
} else if (ballDirectionX < -ballSpeed * 2.4) {
	ballDirectionX = -ballSpeed * 2.4;
}

// collision

// if (ball.position.y <= -333){
//     ballDirectionY = -ballDirectionY;
// }
// if (ball.position.y >= 333){
//     ballDirectionY = -ballDirectionY;
// }
// if (ball.position.x <= -333){
//     ballDirectionX = -ballDirectionX;
// }
// if (ball.position.x >= 333){
//     ballDirectionX = -ballDirectionX;
// }
// if (ball.position.z <= 0){
//     ballDirectionZ = -ballDirectionZ;
// }
// if (ball.position.z >= -250){
//     ballDirectionZ = -ballDirectionZ;
// }






camera.position.z = 500 ;

document.addEventListener("mousemove", discController, false);

function animate() {
	requestAnimationFrame( animate );

  disc.rotation.z += 0.24;
  ball.rotation.y += 0.02;
	ball.rotation.x += 0.02;
	ball.position.x += ballDirectionX * ballSpeed;
	ball.position.y += ballDirectionY * ballSpeed;
	ball.position.z += -ballDirectionZ * ballSpeed;
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
	if (ball.position.z >= 34){
	    ballDirectionZ = -ballDirectionZ;
	}
	renderer.render( scene, camera );
}

animate();

document.body.appendChild(renderer.domElement);
