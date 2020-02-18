import React, { Component } from 'react';
import './Toolbar.css';
import DrawerToggleButton from './DrawerToggleButton';
import drawerToggleButton from './DrawerToggleButton';

const toolbar = props => (

    <nav className="toolbar_navigation">
        <div>
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
    </nav>

);

export default toolbar;