import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 3.24, 3.24, 5 );
const material = new THREE.MeshBasicMaterial( { color: 0x76f1ff } );
const wireframe_material = new THREE.MeshBasicMaterial( { color: 0xb9eaf6, wireframe: true } );

export const cube = new THREE.Mesh( geometry, wireframe_material );
