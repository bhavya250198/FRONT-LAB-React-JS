import React, { useEffect,useRef } from 'react';

const {tableau} = window;
function TableauVisualization (){
    // const ref = useRef(null);
    // const url="https://public.tableau.com/views/RegionalSampleWorkbook/Storms";
    // const options={
    //     device:"desktop"
    // }
    function initViz() {
        var containerDiv = document.getElementById("vizContainer");
       const  url = "https://public.tableau.com/views/RegionalSampleWorkbook/Storms";
    
        var viz = new tableau.Viz(containerDiv, url);
    }
 useEffect(()=>{
    initViz();
 },[])


  return(
    <div>
        <div id="vizContainer" ></div>
    </div>
  )
};

export default TableauVisualization;
