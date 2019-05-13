import * as THREE from 'three';


export default scene => {

  let geometry = new THREE.SphereBufferGeometry( 0.5, 30, 30 );
  let texture = new THREE.TextureLoader( ).load('https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg');
  let material = new THREE.MeshPhongMaterial( {map: texture} );
  material.bumpMap= new THREE.TextureLoader().load('https://richardandersson.net/wp-content/uploads/2016/08/Earth.Bump_21600x10800.jpg');
  material.bumpScale = .05;
  material.specularMap = new THREE.TextureLoader().load('http://blog.apoapsys.com/assets/melted-ice/melted-ice-specular-8192x4096.jpg');
  material.specular  = new THREE.Color('grey');

  //city lights needs to be pushed in
  material.cityMap= new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg');


  let cloudGeometry   = new THREE.SphereGeometry(0.51, 32, 32);
  let cloudMaterial  = new THREE.MeshPhongMaterial({
    map     : new THREE.TextureLoader().load('https://a.disquscdn.com/uploads/mediaembed/images/625/3633/original.jpg'),
    side        : THREE.DoubleSide,
    opacity     : 0.3,
    transparent : true,
    depthWrite  : false,
  });

  // create the iss inital shape
  let starGeometry  = new THREE.SphereGeometry(90, 32, 32);
  let starMaterial  = new THREE.MeshBasicMaterial();
  starMaterial.map   = new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/8k_stars_milky_way.jpg ');
  starMaterial.side  = THREE.BackSide;
  // create the mesh based on geometry and material
  let stars  = new THREE.Mesh(starGeometry, starMaterial);
  let issGeometry = new THREE.SphereBufferGeometry(0.005, 10, 10 );
  let issMaterial = new THREE.MeshBasicMaterial( {wireframe: true, color: 0xff0000 });
  let iss = new THREE.Mesh(issGeometry, issMaterial);

  // create the moon

  let moonGeometry = new THREE.SphereBufferGeometry(.05, 30, 30 );
  let moonMaterial = new THREE.MeshPhongMaterial();
  moonMaterial.map =  new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_moon.jpg');
  moonMaterial.bumpMap= new THREE.TextureLoader().load('https://photojournal.jpl.nasa.gov/jpegMod/PIA08448_modest.jpg');
  moonMaterial.bumpScale = .0005;

  //create mars

  let marsGeometry = new THREE.SphereBufferGeometry(.3, 30, 30 );
  let marsMaterial = new THREE.MeshPhongMaterial();
  marsMaterial.map =  new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_mars.jpg');
  marsMaterial.bumpMap= new THREE.TextureLoader().load('https://astrogeology.usgs.gov/cache/images/5d2885caad2f1190994b2f1cd36c688d_Mars_MGS_MOLA_DEM_mosaic_global_1024.jpg');
  marsMaterial.bumpScale = .005;

  //create sun
  let sunGeometry = new THREE.SphereBufferGeometry(1, 30, 30 );
  let sunMaterial = new THREE.MeshPhongMaterial();
  sunMaterial.map =  new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/8k_sun.jpg');
  sunMaterial.bumpMap= new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/9/99/Map_of_the_full_sun.jpg');
  sunMaterial.bumpScale = .005;
  let sunCloudGeometry   = new THREE.SphereGeometry(1, 32, 32);
  let sunCloudMaterial  = new THREE.MeshPhongMaterial({
    map     : new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/8k_sun.jpg'),
    side        : THREE.DoubleSide,
    opacity     : 0.3,
    transparent : true,
    depthWrite  : false,
  });


  let moon = new THREE.Mesh(moonGeometry, moonMaterial);
  let mars = new THREE.Mesh(marsGeometry, marsMaterial);
  let cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
  let sphere = new THREE.Mesh(geometry, material );
  let sun =  new THREE.Mesh(sunGeometry, sunMaterial );
  let sunCloudMesh = new THREE.Mesh(sunCloudGeometry, sunCloudMaterial);

  // better iss build plans
  //photo link
  // https://upload.wikimedia.org/wikipedia/commons/0/07/ISS_post-Nauka_installation_%283D_rendering%29.jpg

  //create a material, color or image texture
  scene.add( sphere );
  scene.add( cloudMesh );
  scene.add( stars );
  scene.add( iss );
  scene.add(moon);
  scene.add(mars);
  scene.add(sun);
  scene.add(sunCloudMesh);

  function getCoords() {
    fetch('https://api.wheretheiss.at/v1/satellites/25544?units=miles')
      .then(
        response => response.json(),
        error => console.log('An error occured.', error),
      ).then(function(json) {
        if (json) {
          iss.position.x = 0.53125 * Math.cos(Math.PI * json.longitude / 180) * Math.cos(Math.PI * json.latitude / 360);
          iss.position.z = -0.53125 * Math.sin(Math.PI * json.longitude / 180) * Math.cos(Math.PI * json.latitude / 360);
          iss.position.y = 0.53125 * Math.sin(Math.PI * json.latitude / 360);
        }
      });
  }
  setInterval(function() {getCoords();}, 5000);
  function update() {
    // sphere.rotation.y +=0.0000001736;
    cloudMesh.rotation.x += 0.0007;
    cloudMesh.rotation.y -= 0.0001;
    moon.rotation.y +=.000000005879;
    mars.rotation.y +=.005;
    sunCloudMesh.rotation.x += 0.07;
    sunCloudMesh.rotation.y -= 0.01;

    //overall positioning
    // iss.position.x = 0.53125 * Math.sin(Date.now() / 2400);
    // iss.position.z = 0.53125 * Math.cos(Date.now() / 2400);
    // iss.position.x = -0.53125;
    // iss.position.z = 0;

    moon.position.x = 3 * Math.sin(Date.now() / 2551392000);
    moon.position.z = 3 * Math.cos(Date.now() / 2551392000);

    mars.position.x = 25 * Math.sin(Date.now() / 31536000000) + 5 * Math.sin(Date.now() / 1000);
    mars.position.z = 25 * Math.cos(Date.now() / 31536000000) + 5 * Math.cos(Date.now() / 1000);

    sun.position.x = 25 * Math.sin(Date.now() / 31536000000);
    sun.position.z = 25 * Math.cos(Date.now() / 31536000000);
    sunCloudMesh.position.z = 25 * Math.cos(Date.now() / 31536000000);
    sunCloudMesh.position.x = 25 * Math.sin(Date.now() / 31536000000);
  }

  return {
    update
  };
};
