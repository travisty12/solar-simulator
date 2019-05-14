import React from 'react';
import Model from './Model/Model';

function Home(props){
  console.log(props, "in home component")
  return(
    <div>
      <Model/>
    </div>
  );
}

export default Home;
