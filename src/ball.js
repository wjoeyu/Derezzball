import * as THREE from 'three';
import { disc, rinzler } from './disc';

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

let ballDirectionX = .5;
let ballDirectionY = 1;
let ballDirectionZ = 1;
let ballSpeed = 6;

if (ballDirectionY > ballSpeed * 6) {
  ballDirectionY = ballSpeed * 6;
} else if (ballDirectionY < -ballSpeed * 6) {
  ballDirectionY = -ballSpeed * 6;
}

if (ballDirectionX > ballSpeed * 6) {
	ballDirectionX = ballSpeed * 6;
} else if (ballDirectionX < -ballSpeed * 6) {
	ballDirectionX = -ballSpeed * 6;
}

export const ballPhysics = () => {
  ball.rotation.y += 0.02;
	ball.rotation.x += 0.02;
	ball.position.x += ballDirectionX * ballSpeed;
	ball.position.y += ballDirectionY * ballSpeed;
	ball.position.z += -ballDirectionZ * ballSpeed;

  ballTracker.position.z = ball.position.z;

	if (ball.position.y <= -333){
	    ballDirectionY = -ballDirectionY;
	}
	if (ball.position.y >= 333){
	    ballDirectionY = -ballDirectionY;
	}
	if (ball.position.x <= -333){
	    ballDirectionX = -ballDirectionX;
	}
	if (ball.position.x >= 333){
	    ballDirectionX = -ballDirectionX;
	}

	if (ball.position.z === 0 && (
      ball.position.y >= disc.position.y - 89
      && ball.position.y <= disc.position.y + 89
    ) && (
      ball.position.x >= disc.position.x - 89
      && ball.position.x <= disc.position.x + 89
    )) {
	    ballDirectionZ = -ballDirectionZ;
	}

	if (ball.position.z <= -500 && (
      ball.position.y >= rinzler.position.y - 89
      && ball.position.y <= rinzler.position.y + 89
    ) && (
      ball.position.x >= rinzler.position.x - 89
      && ball.position.x <= rinzler.position.x + 89
    )) {
	    ballDirectionZ = -ballDirectionZ;
	}

  if (ball.position.z > 0) {
    ballSpeed = 0;
    ballLose.position.z = 0;
    ballLose.position.x = ball.position.x;
    ballLose.position.y = ball.position.y;
  }

  if (ball.position.z < -504) {
    ballSpeed = 0;
    ballWin.position.z = -500;
    ballWin.position.x = ball.position.x;
    ballWin.position.y = ball.position.y;
  }

}
