import * as THREE from 'three';

const discWidth = 99;


const geometry = new THREE.TorusGeometry( discWidth/2 , 12, 8, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );


const wireframe_material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );

export const disc = new THREE.Mesh( geometry, wireframe_material );
