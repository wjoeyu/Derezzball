import * as THREE from 'three';

const sphereGeometry = new THREE.SphereGeometry( 40, 16, 16 );
const material = new THREE.MeshLambertMaterial( {color: 0xb9eaf6} );
const wireframe_material = new THREE.MeshBasicMaterial( { color: 0xb9eaf6, wireframe: true } );

export const ball = new THREE.Mesh( sphereGeometry, wireframe_material);

const square = new THREE.Geometry();
square.vertices.push(new THREE.Vector3(0, 0, 0));
square.vertices.push(new THREE.Vector3(0, 666, 0));
square.vertices.push(new THREE.Vector3(666, 666, 0));
square.vertices.push(new THREE.Vector3(666, 0, 0));

square.vertices.push(new THREE.Vector3(0, 0, 0));

square.faces.push(new THREE.Face3(0, 1, 2));
square.faces.push(new THREE.Face3(0, 3, 2));

export const ballTracker = new THREE.Line(square, new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5 }));
