import React from 'react';
import { Row, Col,Card } from 'antd';
import { Link } from 'react-router-dom';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

const Parking = () => {
    return(
        <div >
        <Row type="flex" justify="space-between">
  
  <Col span={4}><Card style={{ width: '170px',height : '150px',backgroundColor:'yellow'}}>Parking</Card></Col>

  
</Row>
       
    </div>
    )
}

export default Parking;