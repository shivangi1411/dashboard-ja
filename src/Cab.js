import React from 'react';
import { Row, Col,Card } from 'antd';
import { Link } from 'react-router-dom';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import PieChart from 'react-minimal-pie-chart';

const Cab = () => {
    return(
 
         
<div style={{width:'100px',height:'100px'}}>
    <PieChart
  data={[
    { title: 'Xpress CI', value: 36, color: '#E38627' },
    { title: 'Porter', value: 12, color: '#C13C37' },
    { title: 'Cab', value: 25, color: '#6A2135' },
    { title: 'Others', value: 27, color: 'yellow' }
  ]}
/>;
</div>         
        
    )
}

export default Cab;