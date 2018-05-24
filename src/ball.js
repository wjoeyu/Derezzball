import * as THREE from 'three';

const geometry = new THREE.SphereGeometry( 5, 32, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xb9eaf6} );
export const ball = new THREE.Mesh( geometry, material );
