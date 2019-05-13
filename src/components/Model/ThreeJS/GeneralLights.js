import * as THREE from 'three';

export default scene => {

  var ambient = new THREE.AmbientLight(0xffffff, 0.25);
  var light = new THREE.DirectionalLight( 0xffffff, 0.75 );
  // light.position.set( 0, 1, 1 ).normalize();
  scene.add(light);
  scene.add(ambient);

  function update(time) {

    light.position.x = 25 * Math.sin(Date.now() / 31536000000);
    light.position.z = 25 * Math.cos(Date.now() / 31536000000);
  }

  return {
    update
  };
};
