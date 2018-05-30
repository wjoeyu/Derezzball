import * as THREE from 'three';
import { ball } from './ball';

const discWidth = 100;
// let discDirectionX = 0, discDirectionX = 0;

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

  let relativeY = e.clientY - canvas.offsetTop-350;
  if(relativeY > -canvas.height/2 && relativeY < canvas.height/2) {
        disc.position.y = -(relativeY);
    }
};

export const rinzlerAI = () => {
  let rinzlerDirectionX = 0, rinzlerDirectionY = 0;
  let rinzlerSpeed = 8;

  rinzlerDirectionY = (ball.position.y - rinzler.position.y);
  rinzlerDirectionX = (ball.position.x - rinzler.position.x);

  	if (Math.abs(rinzlerDirectionX) <= rinzlerSpeed)
  	{
  		rinzler.position.x += rinzlerDirectionX;
  	}
  	else
  	{
  		if (rinzlerDirectionX > rinzlerSpeed)
  		{
  			rinzler.position.x += rinzlerSpeed;
  		}
  		else if (rinzlerDirectionX < -rinzlerSpeed)
  		{
  			rinzler.position.x -= rinzlerSpeed;
  		}
  	}

  	if (Math.abs(rinzlerDirectionY) <= rinzlerSpeed)
  	{
  		rinzler.position.y += rinzlerDirectionY;
  	}
  	else
  	{
  		if (rinzlerDirectionY > rinzlerSpeed)
  		{
  			rinzler.position.y += rinzlerSpeed;
  		}
  		else if (rinzlerDirectionY < -rinzlerSpeed)
  		{
  			rinzler.position.y -= rinzlerSpeed;
  		}
  	}


};
