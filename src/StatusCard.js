import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'antd';
import './StatusCard.css';
import { Row, Col} from 'antd';

function  StatusCard() {
    return (
      <div className="dib">
        <Row type="flex" justify="space-between">
      <Col span={4}><Card style={{ width: '100',height : '300'}}></Card></Col>
      <Col span={4}><Card style={{ width: '100',height : '300'}}></Card></Col>
      <Col span={4}><Card style={{ width: '100',height : '300'}}></Card></Col>
      <Col span={4}><Card style={{ width: '100',height : '300'}}></Card></Col>
    </Row>
          
      </div>
      
    );
  }
  
  export default Card;
  