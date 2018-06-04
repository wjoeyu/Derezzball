import * as THREE from 'three';
import { disc, rinzler } from './disc';

const sphereGeometry = new THREE.SphereGeometry( 40, 16, 16 );
// const material = new THREE.MeshLambertMaterial( {color: 0xb9eaf6} );
const wireframe_material = new THREE.MeshBasicMaterial( { color: 0xb9eaf6, wireframe: true } );
const win_material = new THREE.MeshBasicMaterial( { color: 0x00d424, wireframe: true } );
const lose_material = new THREE.MeshBasicMaterial( { color: 0xff0d00, wireframe: true } );



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

export const ballTracker = new THREE.Line(square, new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 2, opacity: 1 }));

let ballDirectionX = 0;
let ballDirectionY = 0;
let ballDirectionZ = 0;
let ballSpeed = 0;

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

export const launchBall = () => {
  const canvas = document.getElementsByTagName("canvas")[0];
  if (ball.position.z === 0 &&
    ball.position.x === 0 &&
    ball.position.y === 0) {
     ballDirectionX = Math.random() * (2.1) - 1;
     ballDirectionY = Math.random() * (2.1) - 1;
     ballDirectionZ = 1;
     ballSpeed = 6;
   } else if (ball.position.z > 0 || ball.position.z <= -500) {

     ball.position.x = 0;
     ball.position.y = 0;
     ball.position.z = 0;

   } else if (ball.position.z <= -2 && ball.position.z > -30) {
     ballDirectionX = Math.random() * (4.01) - 2;
     ballDirectionY = Math.random() * (4.01) - 2;
     ballDirectionZ = 1;

  //if the player clicks the mouse when the ball hits the disc, a derezzball,
  //a ball with a random direction is created.

     const derezzb = document.getElementById('derezzball');
     let y = canvas.offsetTop + 276 - ball.position.y;
     let x = canvas.offsetLeft + 350 + ball.position.x;

     derezzb.style.top = `${y}px`;
     derezzb.style.left= `${x}px`;
     derezzb.style.visibility = "visible";
     setTimeout(function(){
       derezzb.style.visibility = "hidden";
     },888);

   }
};

export const ballPhysics = () => {
  const canvas = document.getElementsByTagName("canvas")[0];
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
    Math.sqrt((
      Math.pow((disc.position.x-ball.position.x),2) +
      Math.pow((disc.position.y-ball.position.y),2)
    )) < 90 && (
      ballSpeed !== 0
    )
    )) {
	    ballDirectionZ = -ballDirectionZ;
	}

// If the ball hits the center of disc, speed increases by 1.
  let DistanceFromDiscCenter = 24;
  if (ball.position.z === 0 && (
    Math.sqrt((
      Math.pow((disc.position.x-ball.position.x),2) +
      Math.pow((disc.position.y-ball.position.y),2)
    )) < DistanceFromDiscCenter
    ) && (
      ballDirectionZ === 1 && ballSpeed !== 0
    )) {
      ballSpeed += 1;

      // const speedUpText = document.createElement('div');
      // speedUpText.setAttribute("id", "speedup");
      // document.body.appendChild(speedUpText);

      const speedUpText = document.getElementById('speedup');
      let y = canvas.offsetTop + canvas.height/2 - 95 - ball.position.y;
      let x = canvas.offsetLeft + canvas.width/2 + ball.position.x;

      speedUpText.style.top = `${y}px`;
      speedUpText.style.left= `${x}px`;
      while (speedUpText.firstChild) speedUpText.removeChild(speedUpText.firstChild);
      speedUpText.style.visibility = "visible";
      speedUpText.innerHTML=`SPEED UP TO: ${ballSpeed}!`;
      setTimeout(function(){
        speedUpText.style.visibility = "hidden";
      },888);
  }

// rinzler ball bounce back

	if (ball.position.z <= -500 && (
    Math.sqrt((
      Math.pow((rinzler.position.x-ball.position.x),2) +
      Math.pow((rinzler.position.y-ball.position.y),2)
    )) < 90
    )) {
	    ballDirectionZ = -ballDirectionZ;
	}

  if (ball.position.z > 0) {
    ballSpeed = 0;
    ballLose.position.z = 0;
    ballLose.position.x = ball.position.x;
    ballLose.position.y = ball.position.y;
    document.getElementById('click-to-reset').style.visibility = "visible";
  }

  if (ball.position.z < -500 && (
    Math.sqrt((
      Math.pow((rinzler.position.x-ball.position.x),2) +
      Math.pow((rinzler.position.y-ball.position.y),2)
    )) >= 90
    )) {
    ballSpeed = 0;
    ballWin.position.z = -500;
    ballWin.position.x = ball.position.x;
    ballWin.position.y = ball.position.y;
    document.getElementById('click-to-reset').style.visibility = "visible";
  }

  // Ball sharp-angle-hit logic

  if (ball.position.z === 0 && ballSpeed !== 0 &&
    (Math.sqrt((
      Math.pow((disc.position.x-ball.position.x),2) +
      Math.pow((disc.position.y-ball.position.y),2)
      )) < 90 &&
    (Math.sqrt((
      Math.pow((disc.position.x-ball.position.x),2) +
      Math.pow((disc.position.y-ball.position.y),2)
      )) >= 66))
    ){
    if (ball.position.x > disc.position.x && ball.position.y > disc.position.y) {
      if (ballDirectionX < 0) {
        ballDirectionX = -ballDirectionX * 2.2;
      } else {
        ballDirectionX = ballDirectionX * 2.2;
      }
      if (ballDirectionY < 0) {
        ballDirectionY = -ballDirectionY * 2.2;
      } else {
        ballDirectionY = ballDirectionY * 2.2;
      }
    }

    if (ball.position.x > disc.position.x && ball.position.y < disc.position.y) {
      if (ballDirectionX < 0) {
        ballDirectionX = -ballDirectionX * 2.2;
      } else {
        ballDirectionX = ballDirectionX * 2.2;
      }
      if (ballDirectionY < 0) {
        ballDirectionY = ballDirectionY * 2.2;
      } else {
        ballDirectionY = -ballDirectionY * 2.2;
      }
    }

    if (ball.position.x < disc.position.x && ball.position.y > disc.position.y) {
      if (ballDirectionX < 0) {
        ballDirectionX = ballDirectionX * 2.2;
      } else {
        ballDirectionX = -ballDirectionX * 2.2;
      }
      if (ballDirectionY < 0) {
        ballDirectionY = -ballDirectionY * 2.2;
      } else {
        ballDirectionY = ballDirectionY * 2.2;
      }
    }

    if (ball.position.x < disc.position.x && ball.position.y < disc.position.y) {
      if (ballDirectionX < 0) {
        ballDirectionX = ballDirectionX * 2.2;
      } else {
        ballDirectionX = -ballDirectionX * 2.2;
      }
      if (ballDirectionY < 0) {
        ballDirectionY = ballDirectionY * 2.2;
      } else {
        ballDirectionY = -ballDirectionY * 2.2;
      }
    }

    const sharpAf = document.getElementById('sharp');
    let y = canvas.offsetTop + 324 - ball.position.y;
    let x = canvas.offsetLeft + 350 + ball.position.x;

    sharpAf.style.top = `${y}px`;
    sharpAf.style.left= `${x}px`;
    sharpAf.style.visibility = "visible";
    setTimeout(function(){
      sharpAf.style.visibility = "hidden";
    },888);

    disc.scale.set(1.4,1.4,1);
    setTimeout(function(){
      disc.scale.set(1,1,1);
    },248);
  }

  if (ballSpeed === 10) {
    ballSpeed = 0;
    const crazyAf = document.getElementById('crazy');

    setTimeout(function(){
      crazyAf.style.visibility = "visible";
    },888);

    setTimeout(function(){
      crazyAf.style.visibility = "hidden";
    },3600);

    setTimeout(function(){
      ballSpeed = 11;
    },4000);
  }
};
