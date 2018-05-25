import * as THREE from 'three';
import { cube, backPlane, leftPlane, rightPlane, topPlane, bottomPlane } from './gamecube';
import { ball } from './ball';
import { pointLight } from './light';
import { disc, discController } from "./disc";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 1 , 0.1, 1000 );
const renderer = new THREE.WebGLRenderer( {alpha : true});

// renderer.sortObjects = false;
renderer.setSize( 700, 700 );
renderer.setClearColor( 0x000000, 0 );

// pointLight.position.x = 1000;
// pointLight.position.y = -400;
// pointLight.position.z = 1000;
// pointLight.intensity = 2;
// pointLight.distance = 10000;
// scene.add( pointLight );

scene.add( disc );
scene.add( cube );
scene.add( ball );
scene.add( backPlane);

cube.position.z = -250;
disc.position.z = 0;

ball.position.z = 0;
ball.position.x = 0;

let ballDirectionX = 1;
let ballDirectionY = 1;
let ballDirectionZ = 1;
let ballSpeed = 2;

camera.position.z = 500 ;

document.addEventListener("mousemove", discController, false);

function animate() {
	requestAnimationFrame( animate );

  // ball.position.x += ballDirectionX * ballSpeed;
  // ball.position.y += ballDirectionY * ballSpeed;
  // ball.position.z += ballDirectionZ * ballSpeed;

  disc.rotation.z += 0.24;
  ball.rotation.y += 0.02;
	ball.rotation.x += 0.02;
  // ball.position.z += 2;
	renderer.render( scene, camera );
}

animate();

document.body.appendChild(renderer.domElement);
