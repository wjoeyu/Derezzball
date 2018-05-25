import * as THREE from 'three';

const geometry = new THREE.BoxGeometry( 324, 324, 500 );
const material = new THREE.MeshBasicMaterial( { color: 0x76f1ff } );
const wireframeMaterial = new THREE.MeshBasicMaterial( { color: 0xb9eaf6, wireframe: true } );
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );

export const cube = new THREE.Mesh( geometry, wireframeMaterial );

const geometry1 = new THREE.PlaneGeometry( 3.24, 3.24, 1 );
export const backPlane = new THREE.Mesh( geometry1, planeMaterial );
//
// const geometry2 = new THREE.PlaneGeometry( 5, 3.24, 1 );
// export const leftPlane = new THREE.Mesh( geometry2, wireframeMaterial );
// leftPlane.position.x = -4.12;
//
// const geometry3 = new THREE.PlaneGeometry( 5, 3.24, 1 );
// export const rightPlane = new THREE.Mesh( geometry3, wireframeMaterial );
// rightPlane.position.x = 4.12;
//
// const geometry4 = new THREE.PlaneGeometry( 3.24, 5, 1 );
// export const topPlane = new THREE.Mesh( geometry4, wireframeMaterial );
// topPlane.position.y = 3.24;
//
// const geometry5 = new THREE.PlaneGeometry( 3.24, 5, 1 );
// export const bottomPlane = new THREE.Mesh( geometry5, wireframeMaterial );
// topPlane.position.y = -3.24;
