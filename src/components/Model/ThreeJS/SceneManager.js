import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import OrbitControls from 'three-orbitcontrols'
import {store} from '../../../index';
import {updatePlanet} from '../../../actions';

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
}


export default canvas => {
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2();
  camera.position.x = 600 * Math.sin(2 * Math.PI * Date.now() / 31536000000)
  camera.position.z = 600 * Math.cos(2 * Math.PI * Date.now() / 31536000000) + 3;
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
  function createSceneSubjects(scene) {
    const sceneSubjects = [
      GeneralLights(scene),
      SceneSubject(scene)
    ];

    return sceneSubjects;
  }
  controls.maxDistance = 1750;
  let index = 2;
  function update() {
    let position = scene.children[2].position;
    for(let i=0; i<sceneSubjects.length; i++) {
      sceneSubjects[i].update();
    }
    for(let i=0; i<scene.children.length; i++){
      if (planet === scene.children[i].name){
        index = i;
        position = scene.children[i].position
      }
    }
    camera.lookAt(position)
    controls.target = position;
    renderer.render(scene, camera);
  }

  document.addEventListener( 'mousedown', onDocumentMouseDown, false );
  function onDocumentMouseDown( event ) {
    mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, camera );

    let intersects = raycaster.intersectObjects( scene.children );
    for (let i = 0; i < intersects.length; i++ ) {
      if (intersects[i].object.name) {
        if (intersects[i].object.name !== scene.children[index].name) {
          updateCamera(intersects[i].object.name);
          store.dispatch(updatePlanet(intersects[i].object.name))
        }
        break;
      }
    }
  }

  return {
    update,
    updateCamera
  };

};
