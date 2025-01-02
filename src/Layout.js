import React from "react";
import { Outlet } from "react-router-dom";

function Route() {
  return (
    <div>
      < a href="/home"></a>
          <a href="/login"> </a> 
           <a href="/register"></a> 
           <a href="/details"></a>
           <a href="/app"></a>
     
     
        <Outlet />
     
    </div>
  );
}
export default Route;
