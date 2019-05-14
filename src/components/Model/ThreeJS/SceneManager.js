import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import OrbitControls from 'three-orbitcontrols'

export default canvas =>{
  let scene = new THREE.Scene ( );
  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 7000 );
  camera.position.z =1;
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

  let controls = new OrbitControls( camera, renderer.domElement );


  const sceneSubjects = createSceneSubjects(scene);
  console.log(sceneSubjects);
  function createSceneSubjects(scene) {
    const sceneSubjects = [
      GeneralLights(scene),
      SceneSubject(scene)
    ];

    return sceneSubjects;
  }
  console.log(scene)
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
    for(let i=0; i<sceneSubjects.length; i++) {
      sceneSubjects[i].update();
    }
    // scene.position.x = scene.children[8].position.x
    // scene.position.y = scene.children[8].position.y
    // scene.position.z = scene.children[8].position.z +5
    // camera.position.x = scene.children[8].position.x
    // camera.position.y = scene.children[8].position.y
    // camera.position.z = scene.children[8].position.z
    // camera.lookAt(scene.children[8].position)
    // controls.target = scene.children[8].position;
    // controls.update();
    renderer.render(scene, camera);
  }

  return {
    update
  };

};
