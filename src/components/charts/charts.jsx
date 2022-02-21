/******************************************************************************************************* 
This component draws the chart inside the modal.
*******************************************************************************************************/

import React from 'react';
import {CustomTooltip } from './styles'
import { data } from './charts.variable'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// Recharts draws the chart.  


/*
  this function uploads the information inside the Tooltip, when the users is over a dot in the line. payload[0] is the value in y 
*/
const RenderTooltip = ({ active, payload }) =>{
  if(active){
  return (
    <CustomTooltip>
      <p className="label">{`New followers: ${payload[0].value}`}</p>
    </CustomTooltip>
  );
  }
  return null;
}


const Charts = () => {
    return (
      
      <ResponsiveContainer width="100%" height="95%">{/* container responsive where is placed the chart */}
        <LineChart
          width={800}
          height={80}
          data={data}
        >
          <CartesianGrid strokeDasharray= "3 3" stroke = "hsla(243, 51%, 70%, 0.2)" />
         
          <XAxis dataKey="name" style={{fontSize:"0.7em"}}/>
           {/* name form data is palced in x axis. */}
          <YAxis  ticks={[0, 2, 4, 6, 8, 10, 12]} domain={[0, 13]} style={{fontSize:"0.7em"}}/>
          {/* define the steps to put inside the y axis */}
          <Tooltip content={ <RenderTooltip /> } width={"auto"}/>  
          {/* Defines the element that is shoed when the mouse is over a dot */}        
          <Line type="monotone" dataKey="followers" stroke="hsl(243, 51%, 70%)" activeDot={{ r: 7 }} dot={{ r: 4, fill: 'none'}}/>
          {/* the line in the chart. it defines the radio of the dot and its color when the mouse is 
          over (active) or when is not */}        
        </LineChart>
      </ResponsiveContainer>
    );
}

export default Charts;
