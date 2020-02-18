import React from 'react';
import {Button,Icon,Rate, Menu,Layout,Avatar,Breadcrumb,Typography,Table, Divider, Tag,CardGroup} from 'antd';
import './App.css';
import './DashTable.js';
import LineChartGraph from './LineChartGraph';
import SalesGraph from './SalesGraph';
import RevenueChart from './RevenueChart';
import StatusCard from './StatusCard';
import { Row, Col,Card } from 'antd';
import './canvasjs.min'
import CanvasJSReact from './canvasjs.react';
import 'tachyons';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import growth from './growth.png';
import downloads from './downloads.png';
import statisc from './statisc.png';
import upload from './upload.png';
import decrease from './decrease.png';
import smartphone from './smartphone.png'
import PieChart from 'react-minimal-pie-chart';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Home = () => {
  const options = {
    exportEnabled: true,
    animationEnabled: false,
    title: {
      text: ""
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 27, label: "Others" },
        { y: 36, label: "Xpress CI" },
        { y: 25, label: "Cab" },
        { y: 12, label: "Porter" }
      ]
    }]
  }
    return (
    
        <div >
            <Layout >
            <Header style={{backgroundColor:'#152036;'}}>
            <Avatar style={{float:'right',marginTop:'15px'}} icon="user" />
            <Title style={{color:'white',marginTop:'10px'}} level={3}>Accelerate</Title>
            </Header>
            <Layout style={{backgroundColor:'#152036;'}}>
              <Sider style={{backgroundColor:'#152036;'}}>
                <Menu defaultSelectedKeys={['Dashboard']}>
                  <Menu.Item key='Dashboard' style={{backgroundColor:'#fafafa'}}>
                    Dashboard
                    </Menu.Item>
                </Menu>
              </Sider>
              <Layout>
              <Content  style={{padding: '0 50px',backgroundColor:'#152036;'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Welcome John !</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{paddingBottom:'20px'}}>
            <Row type="flex" justify="space-between">
          <Col span={4}>
              <Card style={{ width: '250px',height : '250px', backgroundColor: '#8892d6'}}>
                  <div > 
                      <div>
                            <h3 style={{color:'white'}}>Total Revenue</h3>
                      </div>
                      <div style={{float:'right'}}>
                        <img src={growth} width="50px" height="50px"/>
                      </div>
                      <div>
                          <h1 style={{color:'white'}}>$17500</h1>
                      </div>
                     
                      <div>
                          <h4 style={{color:'white'}}>Xpress CI $7500</h4>
                          <h4 style={{color:'white'}}>Cab $3500</h4>
                          <h4 style={{color:'white'}}>Porter $4000</h4>
                          <h4 style={{color:'white'}}> Others $2500</h4>
                      </div>


                      
                  </div>
              
              
              
              </Card>
          </Col>
          <Col span={4}>
            <Card style={{ width: '250px',height : '250px',backgroundColor:'#45bbe0'}}>
            <div > 
                      <div>
                            <h3 style={{color:'white'}}>Total Sales</h3>
                      </div>
                      <div style={{float:'right',backgroundColor:'red'}}>
                        <img src={statisc} width="50px" height="50px" />
                      </div>
                      <div>
                          <h1 style={{color:'white'}}>750</h1>
                      </div>
                     
                      <div>
                          <h4 style={{color:'white'}}>Xpress CI 160</h4>
                          <h4 style={{color:'white'}}>Cab 240</h4>
                          <h4 style={{color:'white'}}>Porter 140</h4>
                          <h4 style={{color:'white'}}> Others 210</h4>
                      </div>


                      
                  </div>
              </Card>
              </Col>
          <Col span={4}><Card style={{ width: '250px',height : '250px', backgroundColor:'#f06292'}}>
          <div>
                            <h3 style={{color:'white'}}>Total Users</h3>
                      </div>
                      <div style={{float:'right'}}>
                        <img src={downloads} width="50px" height="50px"/>
                      </div>
                      <div>
                          <h1 style={{color:'white'}}>94722</h1>
                      </div>
                     
                      <div>
                          <h4 style={{color:'white'}}>No Of Users 55280  15% <img src={upload} width="20px" height="20px"/></h4>
                          <h4 style={{color:'white'}}>Active Users 39442  12% <img src={upload} width="20px" height="20px"/></h4>
                      </div>


                      
                  
            </Card>
            </Col>
          <Col span={5}>
            <Card style={{ width: '230px',height : '250px',backgroundColor:'#78c350'}}>
            <div > 
                      <div>
                            <h3 style={{color:'white'}}>Notifications</h3>
                      </div>
                      <div style={{float:'right'}}>
                        <img src={smartphone} width="50px" height="50px"/>
                      </div>
                      
                     
                      <div>
                          <h4 style={{color:'white'}}>Click Through Rate 48% <img src={decrease} width="20px" height="20px"/> </h4>
                          <h4 style={{color:'white'}}>View Rate 76% <img src={upload} width="20px" height="20px"/></h4>
                          <h4 style={{color:'white'}}> Conversion 24% </h4>
                      </div>


                      
                  </div>
              </Card>
              </Col>
       </Row>
        </div>
    
        <div style={{paddingBottom:'20px',paddingTop:'10px'}}>
            <Row type="flex" justify="space-between">
          <Col span={8}>
          <Card style={{ width: '450px',height : '350px',backgroundColor:'white'}}>
              <LineChartGraph />
              </Card>
          
            </Col>
          <Col span={12}>
          <Card style={{ width: '500px',height : '350px', backgroundColor:'white'}}>
          <div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
              </Card></Col>
          
         
        </Row>
        <Row type='flex' justify='space-around'>
        <Col span="50">
        <Card style={{ width: '800px',height : '350px',backgroundColor:'white', marginTop:'10px'}}>
              <SalesGraph />
              </Card>
        </Col>

        </Row>
            </div>
    
            
    
                 </Content>
                
              </Layout>
           </Layout>
        </Layout>
        </div>
    )
}

export default Home;