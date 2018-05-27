import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 666, 666, 500 );
const material = new THREE.MeshBasicMaterial( { color: 0x76f1ff } );
const wireframeMaterial = new THREE.MeshBasicMaterial( { color: 0xb9eaf6, wireframe: true } );
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );

export const cube = new THREE.Mesh( geometry, wireframeMaterial );
