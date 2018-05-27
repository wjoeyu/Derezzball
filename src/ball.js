import * as THREE from 'three';

const sphereGeometry = new THREE.SphereGeometry( 40, 16, 16 );
const material = new THREE.MeshLambertMaterial( {color: 0xb9eaf6} );
const wireframe_material = new THREE.MeshBasicMaterial( { color: 0xb9eaf6, wireframe: true } );
const win_material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
const lose_material = new THREE.MeshBasicMaterial( { color: 0xff6922, wireframe: true } );



export const ball = new THREE.Mesh( sphereGeometry, wireframe_material);
export const ballLose = new THREE.Mesh( sphereGeometry, lose_material);
export const ballWin = new THREE.Mesh( sphereGeometry, win_material);

const square = new THREE.Geometry();
square.vertices.push(new THREE.Vector3(0, 0, 0));
square.vertices.push(new THREE.Vector3(0, 666, 0));
square.vertices.push(new THREE.Vector3(666, 666, 0));
square.vertices.push(new THREE.Vector3(666, 0, 0));

square.vertices.push(new THREE.Vector3(0, 0, 0));

square.faces.push(new THREE.Face3(0, 1, 2));
square.faces.push(new THREE.Face3(0, 3, 2));

export const ballTracker = new THREE.Line(square, new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5 }));
