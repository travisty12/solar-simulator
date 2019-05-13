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
  let starGeometry  = new THREE.SphereGeometry(200, 32, 32);
  let starMaterial  = new THREE.MeshBasicMaterial();
  starMaterial.map   = new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/8k_stars_milky_way.jpg ');
  starMaterial.side  = THREE.BackSide;
  // create the mesh based on geometry and material
  let stars  = new THREE.Mesh(starGeometry, starMaterial);
  let issGeometry = new THREE.SphereBufferGeometry(0.0005, 30, 30 );
  let issMaterial = new THREE.MeshBasicMaterial( {wireframe: true, color: 0xffffff });
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
  let sunGeometry = new THREE.SphereBufferGeometry(20, 30, 30 );
  let sunMaterial = new THREE.MeshPhongMaterial();
  sunMaterial.map =  new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/8k_sun.jpg');
  sunMaterial.bumpMap= new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/9/99/Map_of_the_full_sun.jpg');
  sunMaterial.bumpScale = .005;
  let sunCloudGeometry   = new THREE.SphereGeometry(20, 32, 32);
  let sunCloudMaterial  = new THREE.MeshPhongMaterial({
    map     : new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/8k_sun.jpg'),
    side        : THREE.DoubleSide,
    opacity     : 0.3,
    transparent : true,
    depthWrite  : false,
  });

  //create mercury
  let mercuryGeometry = new THREE.SphereBufferGeometry(.3, 30, 30 );
  let mercuryMaterial = new THREE.MeshPhongMaterial();
  mercuryMaterial.map =  new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_venus_atmosphere.jpg');
  mercuryMaterial.bumpMap= new THREE.TextureLoader().load('https://astrogeology.usgs.gov/cache/images/5d2885caad2f1190994b2f1cd36c688d_Mars_MGS_MOLA_DEM_mosaic_global_1024.jpg');
  mercuryMaterial.bumpScale = .005;

  //create venus
  let venusGeometry = new THREE.SphereBufferGeometry(.8, 30, 30 );
  let venusMaterial = new THREE.MeshPhongMaterial();
  venusMaterial.map =  new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg');
  venusMaterial.bumpMap= new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg');
  venusMaterial.bumpScale = .05;

  //create jupiter
  let jupiterGeometry = new THREE.SphereBufferGeometry(12, 30, 30 );
  let jupiterMaterial = new THREE.MeshPhongMaterial();
  jupiterMaterial.map =  new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/8k_jupiter.jpg');
  jupiterMaterial.bumpMap= new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg');
  jupiterMaterial.bumpScale = .05;

  //create saturn
  let saturnGeometry = new THREE.SphereBufferGeometry(8, 30, 30 );
  let saturnMaterial = new THREE.MeshPhongMaterial();
  saturnMaterial.map =  new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/8k_saturn.jpg');
  saturnMaterial.bumpMap= new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg');
  saturnMaterial.bumpScale = .05;

  //create uranus
  let uranusGeometry = new THREE.SphereBufferGeometry(3, 30, 30 );
  let uranusMaterial = new THREE.MeshPhongMaterial();
  uranusMaterial.map =  new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_uranus.jpg');
  uranusMaterial.bumpMap= new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg');
  uranusMaterial.bumpScale = .05;

  //create neptune
  let neptuneGeometry = new THREE.SphereBufferGeometry(4, 30, 30 );
  let neptuneMaterial = new THREE.MeshPhongMaterial();
  neptuneMaterial.map =  new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_neptune.jpg');
  neptuneMaterial.bumpMap= new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg');
  neptuneMaterial.bumpScale = .05;

  //create pluto
  let plutoGeometry = new THREE.SphereBufferGeometry(.6, 30, 30 );
  let plutoMaterial = new THREE.MeshPhongMaterial();
  plutoMaterial.map =  new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/8k_saturn.jpg');
  plutoMaterial.bumpMap= new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg');
  plutoMaterial.bumpScale = .05;

  let moon = new THREE.Mesh(moonGeometry, moonMaterial);
  let mars = new THREE.Mesh(marsGeometry, marsMaterial);
  let cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
  let sphere = new THREE.Mesh(geometry, material );
  let sun =  new THREE.Mesh(sunGeometry, sunMaterial );
  let sunCloudMesh = new THREE.Mesh(sunCloudGeometry, sunCloudMaterial);
  let mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial );
  let venus = new THREE.Mesh(venusGeometry, venusMaterial );
  let jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial );
  let saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
  let uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
  let neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
  let pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
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
  scene.add(mercury);
  scene.add(venus);
  scene.add(jupiter);
  scene.add(saturn);
  scene.add(uranus);
  scene.add(neptune);

  function update() {
    sphere.rotation.y +=0.0005;
    cloudMesh.rotation.x += 0.0007;
    cloudMesh.rotation.y -= 0.0001;
    moon.rotation.y +=.0005;
    mars.rotation.y +=.005;
    sunCloudMesh.rotation.x += 0.07;
    sunCloudMesh.rotation.y -= 0.01;
    mercury.rotation.y +=0.0005;
    venus.rotation.y +=0.0005;
    jupiter.rotation.y +=0.0005;
    saturn.rotation.y +=0.0005;

    //overall positioning


    sun.position.x = 40 * Math.sin(Date.now() / 40400);
    sun.position.z = 40 * Math.cos(Date.now() / 40400);

    sunCloudMesh.position.z = 40 * Math.cos(Date.now() / 40400);
    sunCloudMesh.position.x = 40 * Math.sin(Date.now() / 40400);


    mercury.position.x = 23 * Math.sin(Date.now() / 40400) + 20 * Math.sin(Date.now() / 4040);
    mercury.position.z = 23 * Math.cos(Date.now() / 40400) + 20 * Math.cos(Date.now() / 4040);

    venus.position.x = 23 * Math.sin(Date.now() / 40400) + 30 * Math.sin(Date.now() / 4040);
    venus.position.z = 23 * Math.cos(Date.now() / 40400) + 30 * Math.cos(Date.now() / 4040);

    iss.position.x = 0.53125 * Math.sin(Date.now() / 2400);
    iss.position.z = 0.53125 * Math.cos(Date.now() / 2400);

    moon.position.x = 3 * Math.sin(Date.now() / 15400);
    moon.position.z = 3 * Math.cos(Date.now() / 15400);

    mars.position.x = 25 * Math.sin(Date.now() / 40400) + 40 * Math.sin(Date.now() / 8040);
    mars.position.z = 25 * Math.cos(Date.now() / 40400) + 40 * Math.cos(Date.now() / 8040);

    jupiter.position.x = 23 * Math.sin(Date.now() / 40400) + 60 * Math.sin(Date.now() / 7040);
    jupiter.position.z = 23 * Math.cos(Date.now() / 40400) + 60 * Math.cos(Date.now() / 7040);

    saturn.position.x = 23 * Math.sin(Date.now() / 40400) + 110 * Math.sin(Date.now() / 6040);
    saturn.position.z = 23 * Math.cos(Date.now() / 40400) + 110 * Math.cos(Date.now() / 6040);

    uranus.position.x = 23 * Math.sin(Date.now() / 40400) + 130 * Math.sin(Date.now() / 3040);
    uranus.position.z = 23 * Math.cos(Date.now() / 40400) + 130 * Math.cos(Date.now() / 3040);

    neptune.position.x = 23 * Math.sin(Date.now() / 40400) + 150 * Math.sin(Date.now() / 2040);
    neptune.position.z = 23 * Math.cos(Date.now() / 40400) + 150 * Math.cos(Date.now() / 2040);






  }

  return {
    update
  };
};
