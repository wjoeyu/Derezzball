import * as THREE from 'three';

const sphereGeometry = new THREE.SphereGeometry( 40, 16, 16 );
const material = new THREE.MeshLambertMaterial( {color: 0xb9eaf6} );
const wireframe_material = new THREE.MeshBasicMaterial( { color: 0xb9eaf6, wireframe: true } );

export const ball = new THREE.Mesh( sphereGeometry, wireframe_material);
