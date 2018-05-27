import * as THREE from 'three';

const discWidth = 100;


const geometry = new THREE.TorusGeometry( discWidth/2 , 12, 8, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const wireframe_material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
const rinzler_material = new THREE.MeshBasicMaterial( { color: 0xff6922, wireframe: true } );

export const disc = new THREE.Mesh( geometry, wireframe_material );
export const rinzler = new THREE.Mesh( geometry, rinzler_material );


export const discController = (e) => {
  const canvas = document.getElementsByTagName("canvas")[0];

  let relativeX = e.clientX - canvas.offsetLeft-350;
  if(relativeX > -canvas.width/2 && relativeX < canvas.width/2) {
        disc.position.x = relativeX;
    }

  let relativeY = e.clientY-canvas.offsetTop-350;
  if(relativeY > -canvas.height/2 && relativeY < canvas.height/2) {
        disc.position.y = -(relativeY);
    }
};
