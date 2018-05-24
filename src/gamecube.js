import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const material = new THREE.MeshBasicMaterial( { color: 0x76f1ff } );


const wireframe_material = new THREE.MeshBasicMaterial( { color: 0xb9eaf6, wireframe: true, wireframe_linewidth: 20 } );

export const cube = new THREE.Mesh( geometry, wireframe_material );
// export const cube1 = new THREE.Mesh( new THREE.BoxGeometry( 2, 2, 2 ),
//   [ new THREE.MeshBasicMaterial( { color: 0x76f1ff } ), wireframe_material ] );
// export const cube2 = new THREE.Mesh( new THREE.BoxGeometry( 2, 2, 2 ),
//   [ new THREE.MeshBasicMaterial( { color: 0x76f1ff } ), wireframe_material ] );
// export const cube3 = new THREE.Mesh( new THREE.BoxGeometry( 2, 2, 2 ),
//   [ new THREE.MeshBasicMaterial( { color: 0x76f1ff } ), wireframe_material ] );
