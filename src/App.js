import React, { useState,useEffect } from "react";
import Contacts from "./Component/Contacts";


const App=()=> {

  return (
    <>
      <div className="row">
          <div className="col-md-7 offset-md-1">
            <Contacts/>
          </div>
          
      </div>
    </>
  );
}

export default App;
