import React, {Component } from 'react';
import * as THREE from 'three';
import starPic from '../../../assets/images/starMap.jpg';
import earthPic from '../../../assets/images/2k_earth_daymap.jpg';
import earthBump from '../../../assets/images/Earth.Bump.jpg';
import earthSpec from '../../../assets/images/earthSpec.jpg';
import earthCloud from '../../../assets/images/earthCloudMap.jpg';
import marsPic from '../../../assets/images/marsMap.jpg';
import marsBump from '../../../assets/images/marsBump.jpg';
import moonPic from '../../../assets/images/moonmap2k.jpg';
import moonBump from '../../../assets/images/moonbump2k.jpg';
import sunPic from '../../../assets/images/sunMapPic.jpg';
import sunCloud from '../../../assets/images/sunCloudMap.jpg';
import mercuryPic  from '../../../assets/images/mercurymap.jpg';
import mercuryBump  from '../../../assets/images/mercurybump.jpg';
import venusPic from '../../../assets/images/venusMap.jpg';
import venusBump from '../../../assets/images/venusBump.jpg';
import jupiterPic from '../../../assets/images/jupiterMap.jpg';
import saturnPic from '../../../assets/images/saturnmap.jpg';
import uranusPic from '../../../assets/images/uranusmap.jpg';
import uranusRing from '../../../assets/images/saturn-ring.png';
import neptunePic from '../../../assets/images/neptunemap.jpg';
import plutoPic from '../../../assets/images/plutomap2k.jpg';
import plutoBump from '../../../assets/images/plutobump2k.jpg';
import saturnRingPic from '../../../assets/images/saturnRinger.png';
import orbitRings from '../../../assets/images/ourPeachLane.png';

export default scene => {
  //earth
  let earthGeometry = new THREE.SphereBufferGeometry( 1, 30, 30 );
  let earthTexture = new THREE.TextureLoader().load ( earthPic );
  let earthMaterial = new THREE.MeshPhongMaterial( {map: earthTexture} );
  earthMaterial.bumpMap= new THREE.TextureLoader().load( earthBump );
  earthMaterial.bumpScale = .05;
  earthMaterial.specularMap = new THREE.TextureLoader().load( earthSpec );
  earthMaterial.specular  = new THREE.Color('grey');

  //city lights needs to be pushed in
  // earthMaterial.cityMap= new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg');

  let cloudGeometry   = new THREE.SphereGeometry(1.02, 32, 32);
  let cloudMaterial  = new THREE.MeshPhongMaterial({
    map     : new THREE.TextureLoader().load(earthCloud),
    side        : THREE.DoubleSide,
    opacity     : 0.3,
    transparent : true,
    depthWrite  : false,
  });
  //earth end
  // create the iss inital shape
  let starGeometry  = new THREE.SphereGeometry(3500, 32, 32);
  let starMaterial  = new THREE.MeshBasicMaterial();
  starMaterial.map   = new THREE.TextureLoader().load( starPic );
  starMaterial.side  = THREE.BackSide;
  // create the mesh based on geometry and material
  let stars  = new THREE.Mesh(starGeometry, starMaterial);
  let issGeometry = new THREE.SphereBufferGeometry(0.01, 10, 10 );
  let issMaterial = new THREE.MeshBasicMaterial( {wireframe: true, color: 0xff0000 });
  let iss = new THREE.Mesh(issGeometry, issMaterial);

  // create the moon

  let moonGeometry = new THREE.SphereBufferGeometry(.123, 30, 30 );
  let moonMaterial = new THREE.MeshPhongMaterial();
  moonMaterial.map =  new THREE.TextureLoader().load( moonPic );
  moonMaterial.bumpMap= new THREE.TextureLoader().load( moonBump );
  moonMaterial.bumpScale = .0005;

  //create mars

  let marsGeometry = new THREE.SphereBufferGeometry(.532, 30, 30 );
  let marsMaterial = new THREE.MeshPhongMaterial();
  marsMaterial.map =  new THREE.TextureLoader().load( marsPic );
  marsMaterial.bumpMap= new THREE.TextureLoader().load( marsBump );
  marsMaterial.bumpScale = .005;

  //create sun
  let sunGeometry = new THREE.SphereBufferGeometry(109, 30, 30 );
  let sunMaterial = new THREE.MeshPhongMaterial();
  sunMaterial.map =  new THREE.TextureLoader().load( sunPic );
  sunMaterial.bumpMap= new THREE.TextureLoader().load( venusBump );
  sunMaterial.bumpScale = .05;
  let sunCloudGeometry   = new THREE.SphereGeometry(109.1, 32, 32);
  let sunCloudMaterial  = new THREE.MeshPhongMaterial({
    map     : new THREE.TextureLoader().load(sunCloud),
    side        : THREE.DoubleSide,
    opacity     : 0.3,
    transparent : true,
    depthWrite  : false,
  });

  //create mercury
  let mercuryGeometry = new THREE.SphereBufferGeometry(.383, 30, 30 );
  let mercuryMaterial = new THREE.MeshPhongMaterial();
  mercuryMaterial.map =  new THREE.TextureLoader().load( mercuryPic );
  mercuryMaterial.bumpMap= new THREE.TextureLoader().load( mercuryBump );
  mercuryMaterial.bumpScale = .005;

  //create venus
  let venusGeometry = new THREE.SphereBufferGeometry(.949, 30, 30 );
  let venusMaterial = new THREE.MeshPhongMaterial();
  venusMaterial.map =  new THREE.TextureLoader().load( venusPic);
  venusMaterial.bumpMap= new THREE.TextureLoader().load( venusBump);
  venusMaterial.bumpScale = .05;

  //create jupiter
  let jupiterGeometry = new THREE.SphereBufferGeometry(11.21, 30, 30 );
  let jupiterMaterial = new THREE.MeshPhongMaterial();
  jupiterMaterial.map =  new THREE.TextureLoader().load( jupiterPic );
  jupiterMaterial.bumpMap= new THREE.TextureLoader().load( venusBump );
  jupiterMaterial.bumpScale = .05;

  //create Europe
  let europaGeometry = new THREE.SphereBufferGeometry(1, 30, 30 );
  let europaMaterial = new THREE.MeshPhongMaterial();
  europaMaterial.map =  new THREE.TextureLoader().load( moonPic );
  europaMaterial.bumpMap= new THREE.TextureLoader().load( moonBump );
  europaMaterial.bumpScale = .05;

  //create saturn
  let saturnGeometry = new THREE.SphereBufferGeometry(9.45, 30, 30 );
  let saturnMaterial = new THREE.MeshPhongMaterial();
  saturnMaterial.map =  new THREE.TextureLoader().load( saturnPic );
  saturnMaterial.bumpMap= new THREE.TextureLoader().load( venusBump );
  saturnMaterial.bumpScale = .05;

  //saturn rings
  let ringGeometry1 = new THREE.RingBufferGeometry( 9.5, 20, 15 );
  let ringMaterial1 =  new THREE.MeshPhongMaterial( {side: THREE.DoubleSide} );
  ringMaterial1.map =  new THREE.TextureLoader().load( saturnRingPic );
  ringMaterial1.opacity = 0.5;
  ringMaterial1.transparent = true;

// link to look at for reference
//
// threejs.org/docs/index.html#api/en/geometries/RingBufferGeometry


  //create uranus
  let uranusGeometry = new THREE.SphereBufferGeometry(4.01, 30, 30 );
  let uranusMaterial = new THREE.MeshPhongMaterial();
  uranusMaterial.map =  new THREE.TextureLoader().load( uranusPic );
  uranusMaterial.bumpMap= new THREE.TextureLoader().load( venusBump );
  uranusMaterial.bumpScale = .05;

  //uranus rings

  let ringGeometry2 = new THREE.RingBufferGeometry( 6, 10, 30 );
  let ringMaterial2 = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide} );
  ringMaterial2.map =  new THREE.TextureLoader().load( uranusRing );
  ringMaterial2.opacity = 0.6;
  ringMaterial2.transparent = true;

  let ringMesh2 = new THREE.Mesh( ringGeometry2, ringMaterial2 );


  //create neptune
  let neptuneGeometry = new THREE.SphereBufferGeometry(3.88, 30, 30 );
  let neptuneMaterial = new THREE.MeshPhongMaterial();
  neptuneMaterial.map =  new THREE.TextureLoader().load( neptunePic );
  neptuneMaterial.bumpMap= new THREE.TextureLoader().load( venusBump );
  neptuneMaterial.bumpScale = .05;

  //create pluto
  let plutoGeometry = new THREE.SphereBufferGeometry(0.186, 30, 30 );
  let plutoMaterial = new THREE.MeshPhongMaterial();
  plutoMaterial.map =  new THREE.TextureLoader().load( plutoPic );
  plutoMaterial.bumpMap= new THREE.TextureLoader().load( plutoBump);
  plutoMaterial.bumpScale = .05;

  let orbitGeo1 = new THREE.RingBufferGeometry( 295, 305, 300 );
  let orbitMat1 = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide} );
  orbitMat1.map = new THREE.TextureLoader().load( orbitRings );
  orbitMat1.opacity = 0.9;
  orbitMat1.transparent = true;


  let orbitGeo2 = new THREE.RingBufferGeometry( 445, 455, 300 );
  let orbitMat2 = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide} );
  orbitMat2.map = new THREE.TextureLoader().load( orbitRings );
  orbitMat2.opacity = 0.9;
  orbitMat2.transparent = true;

  let orbitGeo3 = new THREE.RingBufferGeometry( 595, 605, 300 );
  let orbitMat3 = new THREE.MeshPhongMaterial( { side: THREE.DoubleSide} );
  orbitMat3.map = new THREE.TextureLoader().load( orbitRings );
  orbitMat3.opacity = 0.9;
  orbitMat3.transparent = true;

  let orbitGeo4 = new THREE.RingBufferGeometry( 795, 805, 300 );
  let orbitMat4 = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide} );
  orbitMat4.map = new THREE.TextureLoader().load( orbitRings );
  orbitMat4.opacity = 0.9;
  orbitMat4.transparent = true;

  let orbitGeo5 = new THREE.RingBufferGeometry( 995, 1005, 300 );
  let orbitMat5 = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide} );
  orbitMat5.map = new THREE.TextureLoader().load( orbitRings );
  orbitMat5.opacity = 0.9;
  orbitMat5.transparent = true;

  let orbitGeo6 = new THREE.RingBufferGeometry( 1095, 1105, 300 );
  let orbitMat6 = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide} );
  orbitMat6.map = new THREE.TextureLoader().load( orbitRings );
  orbitMat6.opacity = 0.9;
  orbitMat6.transparent = true;

  let orbitGeo7 = new THREE.RingBufferGeometry( 1395, 1405, 300 );
  let orbitMat7 = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide} );
  orbitMat7.map = new THREE.TextureLoader().load( orbitRings );
  orbitMat7.opacity = 0.5;
  orbitMat7.transparent = true;

  let orbitGeo8 = new THREE.RingBufferGeometry( 1695, 1705, 300 );
  let orbitMat8 = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide} );
  orbitMat8.map = new THREE.TextureLoader().load( orbitRings );
  orbitMat8.opacity = 0.9;
  orbitMat8.transparent = true;

  let orbitGeo9 = new THREE.RingBufferGeometry( 1895, 1905, 300 );
  let orbitMat9 = new THREE.MeshPhongMaterial( {side: THREE.DoubleSide} );
  orbitMat9.map = new THREE.TextureLoader().load( orbitRings );
  orbitMat9.opacity = 0.9;
  orbitMat9.transparent = true;

  let moon = new THREE.Mesh(moonGeometry, moonMaterial);
  let mars = new THREE.Mesh(marsGeometry, marsMaterial);
  let cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
  let earth = new THREE.Mesh(earthGeometry, earthMaterial );
  let sun =  new THREE.Mesh(sunGeometry, sunMaterial );
  let sunCloudMesh = new THREE.Mesh(sunCloudGeometry, sunCloudMaterial);
  let mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial );
  let venus = new THREE.Mesh(venusGeometry, venusMaterial );
  let jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial );
  let europa = new THREE.Mesh(europaGeometry, europaMaterial );
  let saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
  let ring1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
  let ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
  let uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
  let neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
  let pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
  let orbit1 = new THREE.Mesh(orbitGeo1, orbitMat1);
  let orbit2 = new THREE.Mesh(orbitGeo2, orbitMat2);
  let orbit3 = new THREE.Mesh(orbitGeo3, orbitMat3);
  let orbit4 = new THREE.Mesh(orbitGeo4, orbitMat4);
  let orbit5 = new THREE.Mesh(orbitGeo5, orbitMat5);
  let orbit6 = new THREE.Mesh(orbitGeo6, orbitMat6);
  let orbit7 = new THREE.Mesh(orbitGeo7, orbitMat7);
  let orbit8 = new THREE.Mesh(orbitGeo8, orbitMat8);
  let orbit9 = new THREE.Mesh(orbitGeo9, orbitMat9);

  // better iss build plans
  //photo link
  // https://upload.wikimedia.org/wikipedia/commons/0/07/ISS_post-Nauka_installation_%283D_rendering%29.jpg

  //create a material, color or image texture
  scene.add(earth);
  scene.add(cloudMesh);
  scene.add(stars);
  scene.add(iss);
  scene.add(moon);
  scene.add(mars);
  scene.add(sun);
  scene.add(sunCloudMesh);
  scene.add(mercury);
  scene.add(venus);
  scene.add(jupiter);
  scene.add(europa)
  scene.add(saturn);
  scene.add(ring1);
  scene.add(ring2);
  scene.add(uranus);
  scene.add(neptune);
  scene.add(pluto);
  scene.add(orbit1);
  scene.add(orbit2);
  scene.add(orbit3);
  scene.add(orbit4);
  scene.add(orbit5);
  scene.add(orbit6);
  scene.add(orbit7);
  scene.add(orbit8);
  scene.add(orbit9);

  function getCoords() {
    fetch('https://api.wheretheiss.at/v1/satellites/25544?units=miles')
      .then(
        response => response.json(),
        error => console.log('An error occured.', error),
      ).then(function(json) {
        if (json) {
          iss.position.x = 600 * Math.sin(2 * Math.PI * Date.now() / 31536000000) + 1.0625 * Math.cos(Math.PI * (2 * (1 / 6 + Date.now() / 86400000) + json.longitude / 180)) * Math.cos(Math.PI * json.latitude / 180);
          iss.position.z = 600 * Math.cos(2 * Math.PI * Date.now() / 31536000000) - 1.0625 * Math.sin(Math.PI * (2 * (1 / 6 + Date.now() / 86400000) + json.longitude / 180)) * Math.cos(Math.PI * json.latitude / 180);
          iss.position.y = 1.0625 * Math.sin(Math.PI * json.latitude / 180);
        }
      });
  }
  ring2.rotation.x = Math.PI / 2;

  orbit1.rotation.x = Math.PI / 2;
  orbit2.rotation.x = Math.PI / 2;
  orbit3.rotation.x = Math.PI / 2;
  orbit4.rotation.x = Math.PI / 2;
  orbit5.rotation.x = Math.PI / 2;
  orbit6.rotation.x = Math.PI / 2;
  orbit7.rotation.x = Math.PI / 2;
  orbit8.rotation.x = Math.PI / 2;
  orbit9.rotation.x = Math.PI / 2;
  setInterval(function() {getCoords();}, 5000);
  function update() {
    ring1.rotation.x = Math.PI / 2 + Math.PI * Math.sin(Math.PI * Date.now() / 500000) / 6;
    ring1.rotation.z = Math.PI / 2 + Math.PI * Math.cos(Math.PI * Date.now() / 500000) / 6;
    ring2.rotation.x = Math.PI / 2 + Math.PI * Math.sin(Math.PI * Date.now() / 1200000 + 1/2) / 6;
    ring2.rotation.z = Math.PI / 2 + Math.PI * Math.cos(Math.PI * Date.now() / 1200000 + 1/2) / 6;
    earth.rotation.y = Math.PI * (2 * (Date.now() / 86400000 + 1 / 6));
    cloudMesh.rotation.x += 0.0007;
    cloudMesh.rotation.y -= 0.0001;
    moon.rotation.y +=.000000005879;
    mars.rotation.y +=.005;
    sunCloudMesh.rotation.x += 0.0007;
    sunCloudMesh.rotation.y -= 0.0001;
    mercury.rotation.y +=0.005;
    venus.rotation.y +=0.005;
    jupiter.rotation.y +=0.005;
    saturn.rotation.y +=0.005;
    neptune.rotation.y+=0.005;
    uranus.rotation.y+=0.005;
    pluto.rotation.y +=0.005;

    orbit1.rotation.z = Math.PI * (2 * (Date.now() / 5640));
    orbit2.rotation.z = Math.PI * (2 * (Date.now() / 5640) + 1/4);
    orbit3.rotation.z = Math.PI * (2 * (Date.now() / 5640) + 1/2);
    orbit4.rotation.z = Math.PI * (2 * (Date.now() / 5640) + 3/4);
    orbit5.rotation.z = Math.PI * (2 * (Date.now() / 5640) + 1);
    orbit6.rotation.z = Math.PI * (2 * (Date.now() / 5640) + 5/4);
    orbit7.rotation.z = Math.PI * (2 * (Date.now() / 5640) + 3/2);
    orbit8.rotation.z = Math.PI * (2 * (Date.now() / 5640) + 7/4);
    orbit9.rotation.z = Math.PI * (2 * (Date.now() / 5640));



    earth.position.x = 600 * Math.sin(2 * Math.PI * Date.now() / 31536000000);
    earth.position.z = 600 * Math.cos(2 * Math.PI * Date.now() / 31536000000);
    cloudMesh.position.x = 600 * Math.sin(2 * Math.PI * Date.now() / 31536000000);
    cloudMesh.position.z = 600 * Math.cos(2 * Math.PI * Date.now() / 31536000000);
    earth.name="earth";


    sun.position.x = 0;
    sun.position.z = 0;
    sun.name="sun";

    orbit1.position.x = 0;
    orbit1.position.z = 0;
    orbit1.position.y = -1;

    orbit2.position.x = 0;
    orbit2.position.y = -1;
    orbit2.position.z = 0;

    orbit3.position.x = 0;
    orbit3.position.y = -2;
    orbit3.position.z = 0;

    orbit4.position.x = 0;
    orbit4.position.y = -1;
    orbit4.position.z = 0;

    orbit5.position.x = 0;
    orbit5.position.y = -12;
    orbit5.position.z = 0;

    orbit6.position.x = 0;
    orbit6.position.y = -10;
    orbit6.position.z = 0;

    orbit7.position.x = 0;
    orbit7.position.y = -5;
    orbit7.position.z = 0;

    orbit8.position.x = 0;
    orbit8.position.y = -4;
    orbit8.position.z = 0;

    orbit9.position.x = 0;
    orbit9.position.y = -1;
    orbit9.position.z = 0;

    sunCloudMesh.position.x = 0;
    sunCloudMesh.position.z = 0;


    mercury.position.x =  300 * Math.sin(2 * Math.PI * (Date.now() / 7600176000 - 1/6));
    mercury.position.z =  300 * Math.cos(2 * Math.PI * (Date.now() / 7600176000 - 1/6));
    mercury.name="mercury";

    venus.position.x =  450 * Math.sin(2 * Math.PI * (Date.now() / 19394640000 + 3/8));
    venus.position.z =  450 * Math.cos(2 * Math.PI * (Date.now() / 19394640000 + 3/8));
    venus.name="venus";

    moon.position.x = 600 * Math.sin(2 * Math.PI * Date.now() / 31536000000) + 3 * Math.sin(2 * Math.PI * (Date.now() / 2551392000 + 1/2));
    moon.position.z = 600 * Math.cos(2 * Math.PI * Date.now() / 31536000000) + 3 * Math.cos(2 * Math.PI * (Date.now() / 2551392000 + 1/2));
    moon.name = "moon";

    mars.position.x =  800 * Math.sin(2 * Math.PI * (Date.now() / 59287680000 - 1/4));
    mars.position.z =  800 * Math.cos(2 * Math.PI * (Date.now() / 59287680000 - 1/4));
    mars.name="mars";

    jupiter.position.x =  1000 * Math.sin(2 * Math.PI * (Date.now() / 375278400000 + 1/4));
    jupiter.position.z =  1000 * Math.cos(2 * Math.PI * (Date.now() / 375278400000 + 1/4));
    jupiter.name="jupiter";

    europa.position.x =  1000 * Math.sin(2 * Math.PI * (Date.now() / 375278400000 + 1/4)) + 50 * Math.sin(2 * Math.PI * Date.now() / 10000000);
    europa.position.z =  1000 * Math.cos(2 * Math.PI * (Date.now() / 375278400000 + 1/4)) + 50 * Math.cos(2 * Math.PI * Date.now() / 10000000);
    europa.name = "europa";

    saturn.position.x =  1100 * Math.sin(2 * Math.PI * (Date.now() / 927158400000 - 1/8));
    saturn.position.z =  1100 * Math.cos(2 * Math.PI * (Date.now() / 927158400000 - 1/8));
    saturn.name="saturn";

    ring1.position.x =  1100 * Math.sin(2 * Math.PI * (Date.now() / 927158400000 - 1/8));
    ring1.position.z =  1100 * Math.cos(2 * Math.PI * (Date.now() / 927158400000 - 1/8));


    uranus.position.x =  1400 * Math.sin(2 * Math.PI * (Date.now() / 2639563200000 + 1/4));
    uranus.position.z =  1400 * Math.cos(2 * Math.PI * (Date.now() / 2639563200000 + 1/4));
    uranus.name="uranus";

    ring2.position.x =  1400 * Math.sin(2 * Math.PI * (Date.now() / 2639563200000 + 1/4));
    ring2.position.z =  1400 * Math.cos(2 * Math.PI * (Date.now() / 2639563200000 + 1/4));

    neptune.position.x =  1700 * Math.sin(2 * Math.PI * (Date.now() / 516244320000 - 1/4));
    neptune.position.z =  1700 * Math.cos(2 * Math.PI * (Date.now() / 516244320000 - 1/4));
    neptune.name="neptune";

    pluto.position.x =  1900 * Math.sin(2 * Math.PI * (Date.now() / 7817774400000 + 3/8));
    pluto.position.z =  1900 * Math.cos(2 * Math.PI * (Date.now() / 7817774400000 + 3/8));
    pluto.name="pluto";


  }

  return {
    update
  };
};
