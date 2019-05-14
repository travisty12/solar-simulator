import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import OrbitControls from 'three-orbitcontrols'

let planet = 'earth';
let controls;
export function updateCamera(arg){
  planet = arg;
  console.log(controls)
}

export default canvas => {

  let scene = new THREE.Scene ( );
  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 7000 );
  camera.position.z =5;
  let renderer = new THREE.WebGLRenderer( );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild ( renderer.domElement );

  window.addEventListener( 'resize', function(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height );
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  } );

  controls = new OrbitControls( camera, renderer.domElement );
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
  // setTimeout(function() {
  // }, 10000);
  function updateCamera(arg){
    if(arg === "earth"){
      console.log("earth")
      camera.lookAt(scene.children[8].position)
    } else {
      console.log("no");
    }
  }
  function update() {
    let position;
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
