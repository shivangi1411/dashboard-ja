import React, { Component } from 'react';
import { Row, Col,Card, Icon} from 'antd';
import ReactDOM from 'react-dom';
import './DashTable.css';
import {Table} from 'react-bootstrap';
import { destroyFns } from 'antd/lib/modal/Modal';

class Test extends Component {

constructor(props){
    super(props);
    this.state={flightDes : []}
}

componentDidMount(){
    this.refreshList();
}

refreshList(){
    this.setState({

        flightDes:[
            {"name" :{"nameId":"Mr. Lewis Harold","status":"S"}, "flightNo":"SQ401","dest":"SIN","ETD":"9.55","cta":"","pasStatus":"yellow", "tierStatus":"3"},
            {"name" :{"nameId":"Ms. Dana Cliff","status":"S"}, "flightNo":"LH761","dest":"FRA","ETD":"3.35","cta":"","pasStatus":"yellow", "tierStatus":"3"},
            {"name" :{"nameId":"Mr. Pablo King","status":"S"}, "flightNo":"BA256","dest":"LHR","ETD":"12.05","cta":"Send Flight Status","pasStatus":"red", "tierStatus":"1"},
            {"name" :{"nameId":"Mr. Ayrton Prost","status":"S"}, "flightNo":"CX698","dest":"HKG","ETD":"10.35","cta":"Max Promo Store","pasStatus":"green", "tierStatus":"5"},
            {"name" :{"nameId":"Mr. Elwin Norris","status":"S"}, "flightNo":"UK121","dest":"BKK","ETD":"8.15","cta":"","pasStatus":"red", "tierStatus":"3"},
            {"name" :{"nameId":"Mr. Lando Sainz","status":"S"}, "flightNo":"AI342","dest":"SIN","ETD":"11.55","cta":"","pasStatus":"yellow", "tierStatus":"5"},
            {"name" :{"nameId":"Ms. Kristy Daniel","status":"G"}, "flightNo":"AI281","dest":"CMB","ETD":"12.55","cta":"","pasStatus":"green", "tierStatus":"5"},
            {"name" :{"nameId":"Mr. Carl Andy","status":"S"}, "flightNo":"MH173","dest":"KUL","ETD":"1.20","cta":"Intl. Lounge offer","pasStatus":"ARRIVED", "tierStatus":"1"},
            {"name" :{"nameId":"Mr. Ben Gasly","status":"S"}, "flightNo":"EY2019","dest":"AUH","ETD":"2.20","cta":"","pasStatus":"green", "tierStatus":"2"},
            {"name" :{"nameId":"Ms. Mercy Peters","status":"G"}, "flightNo":"6E1214","dest":"SIN","ETD":"6.55","cta":"Aries Rest. offer","pasStatus":"ARRIVED", "tierStatus":"4"},
            {"name" :{"nameId":"Mr. Jim  Hamilton","status":"G"}, "flightNo":"MU568","dest":"PVG","ETD":"4.20","cta":"Send Flight Status","pasStatus":"red", "tierStatus":"5"},
            {"name" :{"nameId":"Ms. Linda Ross","status":"S"}, "flightNo":"EK515","dest":"DXB","ETD":"7.10","cta":"Send Flight Status","pasStatus":"red", "tierStatus":"1"},
            {"name" :{"nameId":"Ms. Judy William","status":"S"}, "flightNo":"OD206","dest":"KUL","ETD":"16.45","cta":"","pasStatus":"green", "tierStatus":"5"},
            {"name" :{"nameId":"Mr. Kimi Cold","status":"S"}, "flightNo":"VJ972","dest":"HAN","ETD":"20.10","cta":"","pasStatus":"yellow", "tierStatus":"3"}
            
    ]
    })
}
    render (){
            const {flightDes}=this.state;
           
            
        return(
            <div>
            <Table className="table-style" striped bordered hover style={{marginTop:'10px', width:'800px'}}>
                
                <tbody>
                    
                    <tr>
                        <td style={{backgroundColor:'orangered', color:'white'}} colSpan="2">Name</td>
                        <td style={{backgroundColor:'orangered', color:'white', width:'70px'}}>FLT. No.</td>
                        <td style={{backgroundColor:'orangered', color:'white',width:'50px'}}>DEST.</td>
                        <td style={{backgroundColor:'orangered', color:'white',width:'50px'}}>ETD</td>
                        <td style={{backgroundColor:'orangered', color:'white',width:'60px'}}>Pax. Status</td>
                        <td style={{backgroundColor:'orangered', color:'white'}}> Pax. Tier</td>
                       
                            
                           
                                <td style={{backgroundColor:'orangered', color:'white',width:'1000px'}} colSpan="7">Service Availed</td>
                                <td style={{backgroundColor:'orangered', color:'white',width:'130px'}}>Call-to-Action</td>
                        </tr>
                        <tr>    
                             <td colSpan="7"></td>
                             <td style={{backgroundColor:'	#b9b7b6',width:'30px',textAlign:'center'}}> 
                                <h5>CAB</h5>
                            </td>
                            <td style={{backgroundColor:'	#b9b7b6',width:'10px',textAlign:'center',width:'500px'}}>
                               <h5> Xpress CI</h5>
                            </td>
                            <td style={{backgroundColor:'	#b9b7b6',width:'50px',textAlign:'center'}}>
                               <h5> Porter</h5>
                            </td>
                            <td style={{backgroundColor:'	#b9b7b6',width:'50px',textAlign:'center'}}>
                            <h5> Parking</h5>
                            </td>
                            <td style={{backgroundColor:'	#b9b7b6',width:'50px',textAlign:'center'}}>
                            <h5> Lounge</h5>
                            </td>
                            <td style={{backgroundColor:'	#b9b7b6',width:'50px',textAlign:'center'}}>
                            <h5> E Zone</h5>
                            </td >
                            <td style={{backgroundColor:'	#b9b7b6',width:'10px',textAlign:'center'}}>
                            <h5>   +</h5>
                            </td>
                            <td colspan="4" style={{backgroundColor: 'black'}}></td>
                              
                              
                            
                            
                            
                        
                    
                        
                    </tr>
                
               

                 {flightDes.map(des=>
                 <tr>
                     
                     <td style={{width:'150px',fontSize:'11px',textAlign:'left',paddingLeft:'13px'}}><b>{des.name.nameId}</b></td>
                     <td style={{width:'25px',fontSize:'11px',textAlign:'center'}}><b>{des.name.status}</b></td>
                       
                        <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'13px'}}><b>{des.flightNo}</b></td>
                        <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'13px'}}><b>{des.dest}</b></td>
                        <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'13px'}}><b>{des.ETD}</b></td>
                       
                       

                        <td><Card style={{backgroundColor:des.pasStatus,marginLeft: 10, width: 40, height: 15,borderColor:"black" }}></Card> </td>
                        <td>
                        <div style={{width:'70px'}}>
        <Icon type="star" theme="filled" style={{color:'red'}}/>
        <Icon type="star" />
        <Icon type="star" />
        <Icon type="star" />
        <Icon type="star" />
        
      </div>  

                        </td>
                        
                            
                        <td style={{width:'28px',textAlign:'center'}}></td>
                        <td style={{width:'40px',textAlign:'center'}}> </td>
                        <td style={{width:'32px',textAlign:'center'}}></td>
                        <td style={{width:'32px',textAlign:'center'}}></td>
                        <td style={{width:'32px',textAlign:'center'}}></td>
                        <td style={{width:'32px',textAlign:'center'}}></td>
                        <td style={{width:'32px',textAlign:'center'}}> </td>
                        
                        
                        
                        <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'13px'}}><b>{des.cta}</b></td>
                  </tr>
                    )}
                
                </tbody>
            </Table>
            
           
            
        <div style={{border:"none"}}>
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
                   

            </div>
        )
    }

}

export default Test;