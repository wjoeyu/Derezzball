import * as THREE from 'three';
import { cube, backPlane, leftPlane, rightPlane, topPlane, bottomPlane } from './gamecube';
import { ball } from './ball';
import { pointLight } from './light';
import { disc } from "./disc";

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

let ballDirX = 1;
let ballDirY = 1;
let ballDirZ = 1;
let ballSpeed = 2;

scene.add( disc );
scene.add( cube );
scene.add( ball );
scene.add( backPlane);

cube.position.z = 0;
// paddle.position.y=
// paddle.position.x = 1.38;
// paddle.position.y = 1.38;
disc.position.z = 0;

ball.position.z = 0;
ball.position.x = 0;
camera.position.z = 500 ;

document.addEventListener("mousemove", discController, false);

function animate() {
	requestAnimationFrame( animate );

  disc.rotation.z +=.24;
  // cube.rotation.y += .02;
  ball.rotation.y += .02;
	ball.rotation.x += .02;
  // ball.position.z += -.001;
	renderer.render( scene, camera );
}

function discController (e) {
  const canvas = document.getElementsByTagName("canvas")[0];
  let relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > -canvas.width/2 && relativeX < canvas.width/2) {
        disc.position.x = relativeX;
    }
  let relativeY = e.clientY-200;
  if(relativeY > -canvas.height/2 && relativeY < canvas.height) {
        disc.position.y = -(relativeY);
    }
}

animate();


document.body.appendChild(renderer.domElement);
