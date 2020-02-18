import React from 'react';
import './SideDrawer.css';
import DashTable from './DashTable';
import Parking from './Parking';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

const sideDrawer = props => (
    
     <nav className="side-drawer">
        
            <li><a href="/">Dashboard</a></li>
            <li><a href="/service">Services</a></li>
        
    </nav>
    
   
);

export default sideDrawer;