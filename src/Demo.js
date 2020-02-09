import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

const Demo = ({name}) => {
    return  <div>
         <table>
                        <tr>
                         <td colSpan="2">Name</td>
                            
                         <td>FLT. No.</td>
                         <td>DEST.</td>
                         <td>ETD</td>
                         <td>Pax. Status</td>
                         <td>Pax. Tier</td>
                         <td colSpan="7">
                             <tr>
                                 <td colSpan="7">Service</td>
                             </tr>
                             <tr>
                             <td>cab</td>
                             <td>parking</td>   
                             <td>loungr</td>
                             <td>ezone</td>
                             <td>checkin</td>
                             <td>+</td>
                             </tr>
                             

                         </td>
                             
                             
                             <td>call to action</td>
                             
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>s</td>
                            <td>asu23</td>
                            <td>sin</td>
                            <td>9.50</td>
                            <td>arrived</td>
                            <td>ok</td>
                            <td>yyyy</td>
                            <td>yyyyyyy</td>
                            <td>yyyy</td>
                            <td>yyyy</td>
                            <td>yyyy</td>
                            <td>yyyy</td>
                            
                            <td>Send flight status</td>


                        </tr>
                        
                    </table>

           </div>
    
}


export default Demo;