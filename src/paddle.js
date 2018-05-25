import * as THREE from 'three';

const geometry = new THREE.TorusGeometry( .5, .2, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );


const wireframe_material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );

export const paddle = new THREE.Mesh( geometry, wireframe_material );
