import * as THREE from 'three';

export default scene => {

  var ambient = new THREE.AmbientLight(0xffffff, 0.5);
  var light = new THREE.PointLight( 0xffffff, 1, 0, 2 );
  // light.position.set( 0, 1, 1 ).normalize();
  scene.add(light);
  scene.add(ambient);

  function update(time) {

    light.position.x = 40 * Math.sin(Date.now() / 31536000000);
    light.position.z = 40 * Math.cos(Date.now() / 31536000000);
  }

  return {
    update
  };
};
