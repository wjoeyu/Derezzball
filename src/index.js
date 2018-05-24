import * as THREE from 'three';
import { cube } from './gamecube';
import { ball } from './ball';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( {alpha : true});
renderer.setSize( window.innerWidth/1.5, window.innerHeight/1.5);
renderer.setClearColor( 0x000000, 0 );

//creating a shadow
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//
// const light = new THREE.PointLight( 0xd1f2ff, 1 , 100);
// l

scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

  cube.rotation.x += .02;
  // cube.rotation.y += .02;
  // ball.rotation.x += .02;
	renderer.render( scene, camera );
}

animate();


document.body.appendChild(renderer.domElement);
