import React from 'react';

function PlanetInformation(props){
  console.log(props)
  let planetInformation = false;
  if (props.planet === "earth"){
    planetInformation =
    <div>
      <h1>Earth</h1>
    </div>
  }
  return(
    <div className="planetInformation">
      {planetInformation}
    </div>
  )
}

export default PlanetInformation
