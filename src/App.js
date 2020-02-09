import React, { Component } from 'react';
import {Button,Icon,Rate, Menu,Layout,Avatar,Breadcrumb,Typography,Table, Divider, Tag,CardGroup} from 'antd';
import './App.css';
import './DashTable.js';
import StatusCard from './StatusCard';
import { Row, Col,Card } from 'antd';
import 'tachyons';
import car_pic from './car_pic.png';
import xci_pic from './xci_pic.png';
import cart_pic from './cart_pic.jpg';
import parki from './parki.png';
import lounge_pic from './lounge_pic.png';
import Clock from 'react-live-clock';
import DashTable from './DashTable.js';
import SearchFilter from './SearchFilter';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

function searchingFor(searchText){
  return function(x){
      return ( x.name.nameId.toLowerCase().includes(searchText.toLowerCase()) || x.flightNo.toLowerCase().includes(searchText.toLowerCase()) || x.dest.toLowerCase().includes(searchText.toLowerCase()) || x.ETD.toLowerCase().includes(searchText.toLowerCase()) || x.cta.toLowerCase().includes(searchText.toLowerCase())  ) || !searchText;
  }
}



class App extends Component {
  constructor(props){
    super(props);
    this.state={flightDes : [],
        searchText: '',
    }
    this.searchHandler=this.searchHandler.bind(this);
}
searchHandler(event){
    this.setState({searchText:event.target.value})
    }

componentDidMount(){
    this.refreshList();
}

refreshList(){
    this.setState({

        flightDes:[
            {"name" :{"nameId":"Mr. Lewis Harold","status":"S"}, "flightNo":"SQ401","dest":"SIN","ETD":"9.55","cta":"","pasStatus":"yellow", "tierStatus":"3","cabStatus":"Y","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Ms. Dana Cliff","status":"S"}, "flightNo":"LH761","dest":"FRA","ETD":"3.35","cta":"","pasStatus":"yellow", "tierStatus":"3","cabStatus":"N","xci":"Y","porter":"N","parking":"N","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Mr. Pablo King","status":"S"}, "flightNo":"BA256","dest":"LHR","ETD":"12.05","cta":"Send Flight Status","pasStatus":"red", "tierStatus":"1","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Mr. Ayrton Prost","status":"S"}, "flightNo":"CX698","dest":"HKG","ETD":"10.35","cta":"Max Promo Store","pasStatus":"green", "tierStatus":"5","cabStatus":"N","xci":"N","porter":"N","parking":"Y","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Mr. Elwin Norris","status":"S"}, "flightNo":"UK121","dest":"BKK","ETD":"8.15","cta":"","pasStatus":"red", "tierStatus":"3","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Mr. Lando Sainz","status":"S"}, "flightNo":"AI342","dest":"SIN","ETD":"11.55","cta":"","pasStatus":"yellow", "tierStatus":"5","cabStatus":"N","xci":"N","xci":"N","porter":"Y","parking":"N","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Ms. Kristy Daniel","status":"G"}, "flightNo":"AI281","dest":"CMB","ETD":"12.55","cta":"","pasStatus":"green", "tierStatus":"5","cabStatus":"Y","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Mr. Carl Andy","status":"S"}, "flightNo":"MH173","dest":"KUL","ETD":"1.20","cta":"Intl. Lounge offer","pasStatus":"ARRIVED", "tierStatus":"1","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Mr. Ben Gasly","status":"S"}, "flightNo":"EY2019","dest":"AUH","ETD":"2.20","cta":"","pasStatus":"green", "tierStatus":"2","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"Y","zone":"N"},
            {"name" :{"nameId":"Ms. Mercy Peters","status":"G"}, "flightNo":"6E1214","dest":"SIN","ETD":"6.55","cta":"Aries Rest. offer","pasStatus":"ARRIVED", "tierStatus":"4","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Mr. Jim  Hamilton","status":"G"}, "flightNo":"MU568","dest":"PVG","ETD":"4.20","cta":"Send Flight Status","pasStatus":"red", "tierStatus":"5","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Ms. Linda Ross","status":"S"}, "flightNo":"EK515","dest":"DXB","ETD":"7.10","cta":"Send Flight Status","pasStatus":"red", "tierStatus":"1","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Ms. Judy William","status":"S"}, "flightNo":"OD206","dest":"KUL","ETD":"16.45","cta":"","pasStatus":"green", "tierStatus":"5","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
            {"name" :{"nameId":"Mr. Kimi Cold","status":"S"}, "flightNo":"VJ972","dest":"HAN","ETD":"20.10","cta":"","pasStatus":"yellow", "tierStatus":"3","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"}
            
    ]
    })
}
    render (){
            const {flightDes}=this.state;
            const getCabStatus=(cabStatus)=>{
                if(cabStatus=="Y"){
                    return (
                      <div>
                    <img src={car_pic} width="15px" height="15px"/>
                      
                    </div> 
                    )}
                    if(cabStatus=="N"){
                        return (
                            <div></div> 
                          )}
            }

            const getXciStatus=(xci)=>{
                if(xci=="Y"){
                    return (
                        <div>
                        <img src={xci_pic} width="20px" height="20px"/>
                          
                        </div> 
                    )}
                    if(xci=="N"){
                        return (
                            <div></div> 
                          )}
                
            }

            const getPorterStatus=(porter)=>{

                if(porter=="Y"){
                    return (
                      <div>
                      <img src={cart_pic} width="20px" height="20px"/>
                      
                    </div> 
                    )}
                    if(porter=="N"){
                        return (
                            <div></div> 
                          )}
                
            }
            const getParkingStatus=(parking)=>{

                if(parking=="Y"){
                    return (
                      <div >
                       <img src={parki} width="20px" height="20px"/>
                      
                    </div> 
                    )}
                    if(parking=="N"){
                        return (
                            <div></div> 
                          )}
                
            }
            const getLoungeStatus=(lounge)=>{
                if(lounge=="Y"){
                    return (
                      <div>
                      
                      <img src={lounge_pic} width="20px" height="20px"/>
                    </div> 
                    )}
                    if(lounge=="N"){
                        return (
                            <div></div> 
                          )}
                
            }
            const getZonetatus=(zone)=>{
                if(zone=="Y"){
                    return (
                      <div>
                      
                      
                    </div> 
                    )}
                    if(zone=="N"){
                        return (
                          <div></div> 
                        )}
                
            }
           
            const getTierStatus = (tierStatus)=>{
                if(tierStatus=="1"){
                  return (
                    <div style={{width:'70px'}}>
                    <Icon type="star" theme="filled" style={{color:'red'}}/>
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                    
                  </div> 
                  )} 
                  if(tierStatus=="2"){
                  return(
                    <div>
                    <Icon type="star" theme="filled" style={{color:'yellow'}}/>
                    <Icon type="star" theme="filled" style={{color:'yellow'}}/>
                    <Icon type="star" />
                    <Icon type="star" />
                    <Icon type="star" />
                    
                  </div>
                    ) }
                   if(tierStatus=="3"){
                        return(
                            <div>
        <Icon type="star" theme="filled" style={{color:'yellow'}}/>
        <Icon type="star" theme="filled" style={{color:'yellow'}}/>
        <Icon type="star" theme="filled" style={{color:'yellow'}}/>
        <Icon type="star" />
        <Icon type="star" />
        
      </div>
                        
                            )}
                    if(tierStatus=="4"){
                        return(
                            <div>
        <Icon type="star" theme="filled" style={{color:'green'}}/>
        <Icon type="star" theme="filled" style={{color:'green'}}/>
        <Icon type="star" theme="filled" style={{color:'green'}}/>
        <Icon type="star" theme="filled" style={{color:'green'}}/>
        <Icon type="star" />
        
      </div>
                        
                           

                        )}
                        if(tierStatus=="5"){
                            return(

                                <div>
        <Icon type="star" theme="filled" style={{color:'green'}}/>
        <Icon type="star" theme="filled" style={{color:'green'}}/>
        <Icon type="star" theme="filled" style={{color:'green'}}/>
        <Icon type="star" theme="filled" style={{color:'green'}}/>
        <Icon type="star" theme="filled" style={{color:'green'}}/>
        
      </div>
                            )
                    }
              }
           
        return(

        <div style={{backgroundColor:'black'}}>

             <div style={{backgroundColor:'#1b2a47', marginLeft:'20px',marginRight:'20px',marginTop:'20px'}}>

                    <div style={{float: 'left',fontSize:'25px',whiteSpace:'pre-line' ,color:'white'}}>
                    <Clock  format={'HH:mm:ss'} ticking={true} timezone={'UTC+05:30'} />
                    </div> 
                
                    <div style={{float: 'left',fontSize:'13px',color:''}}>
                    <Clock  format={' DD MMM YYYY'} ticking={true} timezone={'UTC+05:30'} />
                    </div> 
          
                    <Avatar style={{float:'right',marginTop:'15px'}} icon="user" />
                    <Title style={{color:'white',marginTop:'10px'}} level={3}>Airport Dashboard JA</Title> 

                    <div style={{float:'right'}}>
                   <form>
                       <input type="text" placeholder="Search here" value={this.searchText} onChange={this.searchHandler}/>
                       </form>
                    </div>


             </div>
             
             <div>

                    <Table className="tableStyle" striped bordered hover >
                        
                        <tbody>
                            
                            <tr>
                                <th  colSpan="2">Name</th>
                                <th style={{width:'70px'}}>FLT. No.</th>
                                <th style={{width:'50px'}}>DEST.</th>
                                <th style={{width:'50px'}}>ETD</th>
                                <th style={{width:'60px'}}>Pax. Status</th>
                                <th > Pax. Tier</th>
                                <th style={{width:'1000px'}} colSpan="7">Service Availed</th>
                                <th style={{width:'180px'}}>Call-to-Action</th>           
                            </tr>

                            <tr style={{height:'5px'}}>     
                                    <th colSpan="7"></th> 
                                    <td style={{backgroundColor:'	#b9b7b6',width:'30px',textAlign:'center'}}> 
                                        <h5>CAB</h5>
                                    </td>
                                    <td style={{backgroundColor:'	#b9b7b6',width:'10px',textAlign:'center',width:'80px'}}>
                                    <h5> Xpress CI</h5>
                                    </td>
                                    <td style={{backgroundColor:'	#b9b7b6',width:'50px',textAlign:'center',width:'50px'}}>
                                    <h5> Porter</h5>
                                    </td>
                                    <td style={{backgroundColor:'	#b9b7b6',width:'50px',textAlign:'center' ,width:'50px'}}>
                                    <h5> Parking</h5>
                                    </td>
                                    <td style={{backgroundColor:'	#b9b7b6',width:'50px',textAlign:'center'}}>
                                    <h5> Lounge</h5>
                                    </td>
                                    <td style={{backgroundColor:'	#b9b7b6',width:'50px',textAlign:'center',width:'50px'}}>
                                    <h5> E Zone</h5>
                                    </td >
                                    <td style={{backgroundColor:'	#b9b7b6',width:'10px',textAlign:'center'}}>
                                    <h5>   +</h5>
                                    </td>
                                    <th colSpan="4" style={{backgroundColor:'black'}}></th> 
                            </tr>
                        
                    

                        {flightDes.filter(searchingFor(this.state.searchText)).map(des=>
                        <tr>
                            
                            <td style={{width:'150px',fontSize:'11px',textAlign:'left',paddingLeft:'2px'}}><b>{des.name.nameId}</b></td>
                            <td style={{width:'25px',fontSize:'11px',textAlign:'center'}}><b>{des.name.status}</b></td>
                            
                                <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'13px'}}><b>{des.flightNo}</b></td>
                                <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'13px'}}><b>{des.dest}</b></td>
                                <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'13px'}}><b>{des.ETD}</b></td>
                            
                            

                                <td><Card style={{backgroundColor:des.pasStatus,marginLeft: 10, width: 40, height: 15,borderColor:"black" }}></Card> </td>
                                
                        <td>{getTierStatus(des.tierStatus)}</td>                     
                                    
                                <td style={{width:'28px',textAlign:'center'}}>{getCabStatus(des.cabStatus)}</td>
                                <td style={{width:'40px',textAlign:'center'}}>{getXciStatus(des.xci)} </td>
                        <td style={{width:'32px',textAlign:'center'}}>{getPorterStatus(des.porter)}</td>
                        <td style={{width:'32px',textAlign:'center'}}>{getParkingStatus(des.parking)}</td>
                        <td style={{width:'32px',textAlign:'center'}}>{getLoungeStatus(des.lounge)}</td>
                        <td style={{width:'32px',textAlign:'center'}}>{getZonetatus(des.zone)}</td>
                                <td style={{width:'32px',textAlign:'center'}}> </td>
                                <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'13px'}}><b>{des.cta}</b></td>
                        </tr>
                            )}
                        
                        </tbody>
                    </Table>

             </div>

             <div>

             <table className="colrtable" style={{borderBottomStyle:'none',borderColor:'white'}}>
                    <tr>
                        <td><Card style={{ width: '30px',height : '15px', backgroundColor:'red'}}></Card></td>
                        <td style={{fontSize:'8px',width:'160px'}}>Arriving >30 minutes after closing time</td>
                        <td><Card style={{ width: '30px',height : '15px', backgroundColor:'yellow',fontSize:'10px'}}></Card></td>
                        <td style={{fontSize:'8px',width:'160px'}}>Arriving +-10 minutes from closing time</td>
                        <td >
                            <div>
                                <Icon type="star" theme="filled" style={{color:'red'}}/>
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
                            </div>

                        </td>

                        <td>
                            <div>
                                <Icon type="star" theme="filled" style={{color:'yellow'}}/>
                                <Icon type="star" theme="filled" style={{color:'yellow'}}/>
                                <Icon type="star" />
                                <Icon type="star" />
                                <Icon type="star" />
        
                            </div>

                        </td>

                        <td>
                            <div>
                                <Icon type="star" theme="filled" style={{color:'yellow'}}/>
                                <Icon type="star" theme="filled" style={{color:'yellow'}}/>
                                <Icon type="star" theme="filled" style={{color:'yellow'}}/>
                                <Icon type="star" />
                                <Icon type="star" />
                            </div>
                            
                        </td>

                        <td>
                            <div>
                                <Icon type="star" theme="filled" style={{color:'green'}}/>
                                <Icon type="star" theme="filled" style={{color:'green'}}/>
                                <Icon type="star" theme="filled" style={{color:'green'}}/>
                                <Icon type="star" theme="filled" style={{color:'green'}}/>
                                <Icon type="star" />
                            </div>
                        </td>

                        <td>
                            <div>
                                <Icon type="star" theme="filled" style={{color:'green', height:'1px'}}/>
                                <Icon type="star" theme="filled" style={{color:'green'}}/>
                                <Icon type="star" theme="filled" style={{color:'green'}}/>
                                <Icon type="star" theme="filled" style={{color:'green'}}/>
                                <Icon type="star" theme="filled" style={{color:'green'}}/>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td><Card style={{ width: '30px',height : '15px', backgroundColor:'green',fontSize:'10px'}}></Card></td>
                        <td style={{fontSize:'8px',width:'10px'}}>Arriving >30 minutes before closing time</td>
                        <td><Card style={{ width: '30px',height : '15px', backgroundColor:'white',fontSize:'10px'}}></Card></td>
                        <td style={{fontSize:'8px',width:'10px'}}> Arrival status cannot be estimated</td>
                        <td style={{fontSize:'8px',textAlign:'center'}}> Tier 1</td>
                        <td style={{fontSize:'8px',textAlign:'center'}}>Tier 2</td>
                        <td style={{fontSize:'8px',textAlign:'center'}}>Tier 3</td>
                        <td style={{fontSize:'8px',textAlign:'center'}}> Tier 4</td>
                        <td style={{fontSize:'8px',textAlign:'center'}}>Tier 5</td>
                    </tr>
            </table>

         </div>
     </div>

        )
    }


}

export default App;
