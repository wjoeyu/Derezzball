import * as THREE from 'three';

export const pointLight = new THREE.PointLight(0xF8D898);

pointLight.position.x = 1000;
pointLight.position.y = -400;
pointLight.position.z = 1000;
pointLight.intensity = 2;
pointLight.distance = 10000;
