import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import OrbitControls from 'three-orbitcontrols'

let planet = 'earth';
let scene = new THREE.Scene ( );
let renderer = new THREE.WebGLRenderer( );
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 7000 );
let controls = new OrbitControls( camera, renderer.domElement );
let position;
export function updateCamera(arg, sceneInit = scene, cameraInit = camera, control = controls){
  planet = arg;
  for(let i=0; i<sceneInit.children.length; i++){
    if (planet === sceneInit.children[i].name){
      position = sceneInit.children[i].position
      cameraInit.lookAt(position)
      control.target = position;
      if (control && camera) {
        cameraInit.position.x = control.target.x;
        cameraInit.position.y = control.target.y;
        cameraInit.position.z = control.target.z + 3 * sceneInit.children[i].geometry.boundingSphere.radius;
      }
      break;
    }
  }
  console.log(control);
}

export default canvas => {

  camera.position.z =5;
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild ( renderer.domElement );

  window.addEventListener( 'resize', function(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height );
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  } );

  controls.enablePan = false;

  const sceneSubjects = createSceneSubjects(scene);
  console.log(sceneSubjects);
  function createSceneSubjects(scene) {
    const sceneSubjects = [
      GeneralLights(scene),
      SceneSubject(scene)
    ];

    return sceneSubjects;
  }
  console.log(camera);
  console.log(controls);
  console.log(scene);
  // setTimeout(function() {
  // }, 10000);

  function update() {
    let position = scene.children[2].position;
    for(let i=0; i<sceneSubjects.length; i++) {
      sceneSubjects[i].update();
    }
    for(let i=0; i<scene.children.length; i++){
      if (planet === scene.children[i].name){
        position = scene.children[i].position
      }
    }
    camera.lookAt(position)
    controls.target = position;
    // controls.update();
    renderer.render(scene, camera);
  }

  return {
    update,
    updateCamera
  };

};
