import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 666, 666, 500 );
const wireframeMaterial = new THREE.MeshBasicMaterial( { color: 0xb9eaf6, wireframe: true } );

export const cube = new THREE.Mesh( geometry, wireframeMaterial );
