import React, { Component } from 'react';
import {Avatar,Typography} from 'antd';
import { Row, Col,Card, Icon} from 'antd';
import ReactDOM from 'react-dom';
import './DashTable.css';
import SideDrawer from './SideDrawer';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import {Table} from 'react-bootstrap';
import Clock from 'react-live-clock';
import car_pic from './car_pic.png';
import xci_pic from './xci_pic.png';
import porter_man from './porter_man.png';
import parki from './parki.png';
import lounge_pic from './lounge_pic.png';
import neext from './neext.PNG';
import user from './user.png';
import leadership from './leadership.png';
import logo from './logo.jpg';
import entertainment from './entertainment.png';


const { Title } = Typography;

function searchingFor(searchText){
    return function(x){
        return ( x.name.nameId.toLowerCase().includes(searchText.toLowerCase()) || x.flightNo.toLowerCase().includes(searchText.toLowerCase()) || x.dest.toLowerCase().includes(searchText.toLowerCase()) || x.ETD.toLowerCase().includes(searchText.toLowerCase()) || x.cta.toLowerCase().includes(searchText.toLowerCase())  ) || !searchText;
    }
  }


function getDate() {
  var tempDate = new Date();
  var date = tempDate.getDate() + ' ' + (tempDate.getMonth()+1) + ' ' + tempDate.getFullYear();
  var formattedDate=date.toString();
  
    return (
    <p style={{float:'left',color:'white' ,marginLeft:'10px'}}> {formattedDate}</p>
  );
}

function getTime() {
    var tempDate = new Date();
     var time= tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ 'hrs';
      return (
      <p style={{float:'left',color:'white'}}> {time}</p>
    );
  }


class DashTable extends Component {

constructor(props){
    super(props);
    this.state={flightDes : [],
        searchText: '',
        sideDrawerOpen : false
    }
    this.searchHandler=this.searchHandler.bind(this);
}


drawerToggleClickHandler = () => {
    this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
};

searchHandler(event){
    this.setState({searchText:event.target.value})
    }

componentDidMount(){
    this.refreshList();
}

refreshList(){
    this.setState({

        flightDes:[

            {"name" :{"nameId":"Mr. Ben Gasly","status":"S"}, "flightNo":"EY2019","dest":"AUH","ETD":"13.10","cta":"Send Duty Free Offers","pasStatus":"green", "tierStatus":"2","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"Y","zone":"N"},
			{"name" :{"nameId":"Ms. Dana Cliff","status":"S"}, "flightNo":"LH761","dest":"FRA","ETD":"13.15","cta":"Resend Xpress Check-IN Details","pasStatus":"yellow", "tierStatus":"3","cabStatus":"N","xci":"Y","porter":"N","parking":"N","lounge":"N","zone":"N"},
			{"name" :{"nameId":"Mr. Jim  Hamilton","status":"G"}, "flightNo":"MU568","dest":"PVG","ETD":"13.20","cta":"Send SS Store Promo","pasStatus":"green", "tierStatus":"5","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"Y"},
			{"name" :{"nameId":"Ms. Linda Ross","status":"S"}, "flightNo":"EK515","dest":"DXB","ETD":"13.30","cta":"Send Flight Status","pasStatus":"red", "tierStatus":"1","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
			{"name" :{"nameId":"Mr. Elwin Norris","status":"S"}, "flightNo":"UK121","dest":"BKK","ETD":"13.40","cta":"Send Flight Status","pasStatus":"red", "tierStatus":"3","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
			{"name" :{"nameId":"Mr. Lewis Harold","status":"S"}, "flightNo":"SQ401","dest":"SIN","ETD":"13.45","cta":"Send Flight Status","pasStatus":"yellow", "tierStatus":"3","cabStatus":"Y","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
			{"name" :{"nameId":"Ms. Mercy Peters","status":"G"}, "flightNo":"6E1214","dest":"SIN","ETD":"13.50","cta":"Send Aries Restaurant Offer","pasStatus":"ARRIVED", "tierStatus":"4","cabStatus":"N","xci":"N","porter":"Y","parking":"N","lounge":"N","zone":"N"},
			{"name" :{"nameId":"Mr. Carl Andy","status":"S"}, "flightNo":"MH173","dest":"KUL","ETD":"13.55","cta":"Send Promocode For INTL Lounge ","pasStatus":"ARRIVED", "tierStatus":"3","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
			{"name" :{"nameId":"Mr. Ayrton Prost","status":"S"}, "flightNo":"CX698","dest":"HKG","ETD":"14.00","cta":"Send Max Store Promo","pasStatus":"green", "tierStatus":"5","cabStatus":"N","xci":"N","porter":"N","parking":"Y","lounge":"N","zone":"N"},
			{"name" :{"nameId":"Mr. Lando Sainz","status":"S"}, "flightNo":"AI342","dest":"SIN","ETD":"14.10","cta":"Resend Porter Details","pasStatus":"yellow", "tierStatus":"5","cabStatus":"N","xci":"N","xci":"N","porter":"Y","parking":"N","lounge":"N","zone":"N"},
			{"name" :{"nameId":"Mr. Pablo King","status":"S"}, "flightNo":"BA256","dest":"LHR","ETD":"14.15","cta":"Send Flight Status","pasStatus":"red", "tierStatus":"1","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
			{"name" :{"nameId":"Ms. Kristy Daniel","status":"G"}, "flightNo":"AI281","dest":"CMB","ETD":"14.20","cta":"Send Entertainment Zone Info","pasStatus":"green", "tierStatus":"5","cabStatus":"Y","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"},
			{"name" :{"nameId":"Ms. Judy William","status":"S"}, "flightNo":"OD206","dest":"KUL","ETD":"14.25","cta":"Send Promo Offer Of Duty Free","pasStatus":"green", "tierStatus":"5","cabStatus":"Y","xci":"N","porter":"Y","parking":"N","lounge":"N","zone":"N"},
			{"name" :{"nameId":"Mr. Kimi Cold","status":"S"}, "flightNo":"VJ972","dest":"HAN","ETD":"14.30","cta":"Send Flight Status","pasStatus":"yellow", "tierStatus":"3","cabStatus":"N","xci":"N","porter":"N","parking":"N","lounge":"N","zone":"N"}

    ]
    })
}
    render (){
        const {flightDes}=this.state;

        let sideDrawer;
       
        if(this.state.sideDrawerOpen){
            sideDrawer=<SideDrawer />;
        }
        const getPaxCOunt=(status)=>{
            if(status=="S"){
                return (
                  <div>
                <img src={user} width="20px" height="20px"/>
                  
                </div> 
                )}
                if(status=="G"){
                    return (
                        <div>
                        <img src={leadership} width="25px" height="25px"/>
                          
                        </div>
                      )}
        }

        const getCabStatus=(cabStatus)=>{
            if(cabStatus=="Y"){
                return (
                  <div>
                <img src={car_pic} width="20px" height="20px"/>
                  
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
                    <img src={xci_pic} width="25px" height="25px"/>
                      
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
                  <img src={porter_man} width="30px" height="30px"/>
                  
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
                  
                  <img src={lounge_pic} width="25px" height="25px"/>
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
                   <img src={entertainment} width="25px" height="25px"/>
                  
                </div> 
                )}
                if(zone=="N"){
                    return (
                      <div></div> 
                    )}
            
        }

        const getPassArrivalStatus = (pasStatus)=> {
            if(pasStatus=="ARRIVED"){
                return (
                  <div >
                      <div style={{fontSize:'11px',textAlign:'center',paddingLeft:'5px',borderRightColor:'white',fontFamily:'Roboto,Sans-serif',fontSize:'16px'}}><b> <i>ARRIVED </i></b></div>
                  
                </div> 
                )} else{
                    return(
                        <Card style={{backgroundColor:pasStatus,marginLeft: 10, width: 95, height: 15,borderColor:"black" }}></Card> 
                    )}
        }
       
        const getTierStatus = (tierStatus)=>{
            if(tierStatus=="1"){
              return (
                <div >
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
                        <div style={{width:'70px'}}>
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
            <div>
 <BrowserRouter>
                <div style={{width:'1265px', height:'60px'}}> 

                <div style={{width:'150px',height:'80px',color:'white',float:'left'}}>
                <table style={{marginTop:'1px',marginLeft:'5px',border:'none'}}> 
                    <tr>
                        <td style={{width:'150px', height:'50px',fontSize:'22px'}}>
                        <Clock  format={' DD MMM YYYY'} timezone={'UTC+05:30'} />
                        </td>
                        
                    </tr>
                    <tr>
                        <td style={{width:'100px', height:'10px',fontSize:'15px',paddingLeft:'5px'}}>
                        <Clock  format={'HH:mm:ss'} ticking={true} timezone={'UTC+05:30'} />
                        </td>
                    </tr>
                </table>

                </div>

                <div style={{float:'left',width:'450px' ,marginLeft:'250px'}}> 
                <div>
                <h1 style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:'25px'}}><u>Accelerate</u></h1>
                </div>
                <div>
                <h1 style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:'18px'}}>Airport Dashboard</h1>
                </div>
                    
                 </div>


                 <div style={{float:'right',width:'250px',marginTop:'10px'}}>
                     

                     <div style={{float:'left',width:'100px'}}>
                     <img src={logo} width='40px' height="60px" style={{float:'right'}}/>
                     </div>

                     <div style={{float:'right',width:'150px'}}> 
                     <div style={{marginTop:'2px',height:'10px'}}>
                <p style={{color:'white',textAlign:'left',paddingLeft:'10px'}}>ACCENT</p>
                </div>
                
                <div style={{marginTop:'10px',width:'50px',height:'10px'}}>
                <p style={{ color:'white',textAlign:'left',paddingLeft:'10px'}}>INTERNATIONAL</p>
                </div>
                <div style={{marginTop:'10px',width:'10px',height:'10px',paddingLeft:'10px'}}>
                <p style={{color:'white',textAlign:'left'}}>   AIRPORT</p> 
                   </div>
                     </div>

                 </div>
               
                </div>

               
                
            <div style={{marginLeft:'20px', height:'800px', marginRight:'20px',paddingTop:'15px'}}>

            <div style={{float:'right',marginTop:'5px',marginRight:'15px',paddingBottom:'10px'}}>
                 
                      <input type="text"  placeholder="Search..." value={this.searchText} onChange={this.searchHandler}/>
                     
                   </div>

                   <Table className="tableStyle" striped bordered hover style={{width:'1200px',marginLeft:'15px',height:'600px',marginTop:'30px',borderBottomColor:'white'}}>
                       
                       <tbody>
                           
                           <tr>
                               <th style={{borderBottomColor:'black',paddingTop:'5px'}}  colSpan="2">NAME</th>
                               <th style={{width:'70px',borderBottomColor:'black',paddingTop:'5px' }}>FLT. NO.</th>
                               <th style={{width:'50px',borderBottomColor:'black',paddingTop:'5px'}}>DEST.</th>
                               <th style={{width:'50px',borderBottomColor:'black',paddingTop:'5px'}}>ETD</th>
                               <th style={{width:'120px',borderBottomColor:'black',paddingTop:'5px'}}>PAX. STATUS</th>
                               <th style={{width:'80px',borderBottomColor:'black',paddingTop:'5px'}}> PAX. TIER</th>
                               <th style={{width:'800px',borderBottomColor:'black',paddingTop:'5px',height:'1px'}} colSpan="6">SERVICE AVAILED</th>
                               <th style={{width:'270px',borderBottomColor:'black',paddingTop:'5px'}}>CALL-TO-ACTION</th>           
                           </tr>

                           <tr >     
                                   <th style={{borderRightColor:'black'}} colSpan="1"></th> 
                                   <th ></th>
                                   <th ></th>
                                   <th ></th>
                                   <th ></th>
                                   <th ></th>
                                   <th ></th>
                                   <td style={{backgroundColor:'	#b9b7b6',width:'35px',textAlign:'center'}}> 
                                       <h5 style={{fontSize:'12px'}}><i><b>CAB</b></i></h5>
                                   </td>
                                   <td style={{backgroundColor:'	#b9b7b6',textAlign:'center',width:'70px'}}>
                                   <h5 style={{fontSize:'12px'}}><i><b>XPRESS CI</b></i></h5>
                                   </td>
                                   <td style={{backgroundColor:'	#b9b7b6',textAlign:'center',width:'50px'}}>
                                   <h5 style={{fontSize:'12px'}}><i><b>PORTER</b></i></h5>
                                   </td>
                                   <td style={{backgroundColor:'	#b9b7b6',textAlign:'center' ,width:'50px'}}>
                                    <h5 style={{fontSize:'12px'}}><i><b>PARKING</b></i></h5>
                                   </td>
                                   <td style={{backgroundColor:'	#b9b7b6',width:'40px',textAlign:'center'}}>
                                   <h5 style={{fontSize:'12px'}}><i><b>LOUNGE</b></i></h5>
                                   </td>
                                   <td colSpan="1" style={{backgroundColor:'	#b9b7b6',textAlign:'center',width:'70px'}}>
                                   <td style={{backgroundColor:'#b9b7b6',border:'none',width:'100px'}}><h5 style={{fontSize:'12px'}}><i><b>E ZONE </b></i></h5></td>
                                   <td style={{backgroundColor:'#b9b7b6',border:'none',width:'30px'}}> <input style={{float:'right',height:'15px',width:'15px'}} type="image" src={neext}></input></td>
                                   
                                  
                                   </td >
                                   
                                   
                                   <th colSpan="3" style={{backgroundColor:'black',borderRightColor:'white',borderLeftColor:'white'}}></th> 
                           </tr>
                       
                   

                       {flightDes.filter(searchingFor(this.state.searchText)).map(des=>
                       <tr>
                           
                           <td style={{width:'150px',fontSize:'11px',textAlign:'left',paddingLeft:'10px',borderLeftColor:'white',fontSize:'16px',fontFamily:'Roboto,Sans-serif'}}><b>{des.name.nameId}</b></td>
                           <td style={{width:'25px',fontSize:'11px',textAlign:'center',fontSize:'16px',fontFamily:'Roboto,Sans-serif'}}><b>{getPaxCOunt(des.name.status)}</b></td>
                           
                               <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'13px',fontSize:'16px',fontFamily:'Roboto,Sans-serif'}}><b>{des.flightNo}</b></td>
                               <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'13px',fontSize:'16px',fontFamily:'Roboto,Sans-serif'}}><b>{des.dest}</b></td>
                               <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'13px',fontSize:'16px',fontFamily:'Roboto,Sans-serif'}}><b>{des.ETD}</b></td>
                           
                           

                       <td>{getPassArrivalStatus(des.pasStatus)}</td>
                               
                       <td style={{paddingLeft:'10px'}}>{getTierStatus(des.tierStatus)}</td>                     
                                   
                               <td style={{width:'28px',textAlign:'center'}}>{getCabStatus(des.cabStatus)}</td>
                               <td style={{width:'40px',textAlign:'center'}}>{getXciStatus(des.xci)} </td>
                       <td style={{width:'32px',textAlign:'center'}}>{getPorterStatus(des.porter)}</td>
                       <td style={{width:'32px',textAlign:'center'}}>{getParkingStatus(des.parking)}</td>
                       <td style={{width:'32px',textAlign:'center'}}>{getLoungeStatus(des.lounge)}</td>
                       <td style={{width:'32px',textAlign:'center'}}>{getZonetatus(des.zone)}</td>
                              
                        <td style={{fontSize:'11px',textAlign:'left',paddingLeft:'5px',borderRightColor:'white',fontFamily:'Roboto,Sans-serif',fontSize:'16px'}}><b> {des.cta}</b></td>
                       </tr>
                           )}
                       
                       </tbody>
                   </Table>

                   <div style={{marginTop:'30px'}}>

<table className="colrtable" style={{borderBottomStyle:'none',borderColor:'white',width:'1200px',marginLeft:'15px',height:'50px'}}>
       <tr>
           <td style={{width:'40px'}}><Card style={{ width: '30px',height : '15px', backgroundColor:'red',borderColor:'black'}}></Card></td>
           <td style={{fontSize:'8px',width:'160px'}}>Arriving >30 minutes after closing time</td>
           <td style={{width:'40px'}}><Card style={{ width: '30px',height : '15px', backgroundColor:'yellow',fontSize:'10px',borderColor:'black'}}></Card></td>
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
           <td>
           <img src={user} width="15px" height="15px"/>
           </td>
           <td style={{fontSize:'10px'}}>
               One Passenger
           </td>
       </tr>

       <tr>
           <td style={{width:'40px'}}><Card style={{ width: '30px',height : '15px', backgroundColor:'green',fontSize:'10px',borderColor:'black'}}></Card></td>
           <td style={{fontSize:'8px',width:'10px'}}>Arriving >30 minutes before closing time</td>
           <td><Card style={{ width: '30px',height : '15px', backgroundColor:'white',fontSize:'10px',borderColor:'black'}}></Card></td>
           <td style={{fontSize:'8px',width:'10px'}}> Arrival status cannot be estimated</td>
           <td style={{fontSize:'8px',textAlign:'left',paddingLeft:'30px'}}> Tier 1</td>
           <td style={{fontSize:'8px',textAlign:'left',paddingLeft:'30px'}}>Tier 2</td>
           <td style={{fontSize:'8px',textAlign:'left',paddingLeft:'30px'}}>Tier 3</td>
           <td style={{fontSize:'8px',textAlign:'left',paddingLeft:'30px'}}> Tier 4</td>
           <td style={{fontSize:'8px',textAlign:'left',paddingLeft:'30px'}}>Tier 5</td>
           <td>
           <img src={leadership} width="15px" height="15px"/>
           </td>
           <td style={{fontSize:'10px'}}> More Than One Passenger</td>
       </tr>
</table>

</div>

            </div>

            </BrowserRouter>     
    </div>

    

        )
    }

}

export default DashTable;