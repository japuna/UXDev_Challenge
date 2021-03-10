/******************************************************************************************************* 
This component draws the chart inside the modal.
*******************************************************************************************************/

import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// Recharts draws the chart.  

/*
variable data sets the info in the chart. Name: is in X, followers in Y. 
*/
const data = [
    {
        name: '',
        followers: 4,
      },
  {
    name: '4',
    followers: 3,
  },
  {
    name: '5',
    followers: 2,
  },
  {
    name: '6',
    followers: 6,
  },
  {
    name: '7',
    followers: 8,
  },
  {
    name: '8',
    followers: 9,
  },
  {
    name: '9',
    followers: 10,
  },
  {
    name: '10',
    followers: 9,
  },
  {
    name: '11',
    followers: 10,
  },

  {
    name: '12',
    followers: 12,
  },

  {
    name: '13',
    followers: 12,
  },

];
/*
This styled component costumizes the Chart's ToopTip 
*/
export const CustomTooltip = styled.div`
  
  background-color: ${({ theme }) => theme.body};
  border: 1px solid hsl(243, 51%, 70%);
  border-radius: 2px;
  width:120px;
  padding: 3% 1%;
  text-align: center;
  p{
    color: hsl(243, 51%, 70%);
    font-size: 0.8rem;
  }
`;

/*
  this function uploads the information inside the Tooltip, when the users is over a dot in the line. payload[0] is the value in y 
*/
const RenderTooltip = ({ active, payload, label }) =>{
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
