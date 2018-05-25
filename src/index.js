import * as THREE from 'three';
import { cube } from './gamecube';
import { ball } from './ball';
import { pointLight } from './light';
import { paddle } from "./paddle"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 1 , 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( {alpha : true});

renderer.setSize( 700, 700 );
renderer.setClearColor( 0x000000, 0 );

//creating a shadow
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//
// const light = new THREE.PointLight( 0xd1f2ff, 1 , 100);
// l

// pointLight.position.x = 1000;
// pointLight.position.y = -400;
// pointLight.position.z = 1000;
// pointLight.intensity = 2;
// pointLight.distance = 10000;

// scene.add( pointLight );
scene.add( paddle );
scene.add( cube );
scene.add( ball );

paddle.position.x = 3;

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );


  // cube.rotation.y += .02;
  ball.rotation.y += .02;
	ball.rotation.x += .02;
	renderer.render( scene, camera );
}

animate();


document.body.appendChild(renderer.domElement);
