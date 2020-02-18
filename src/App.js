import React, { Component } from 'react';
import Toolbar from './Toolbar';
import DashTable from './DashTable';
import Home from './Home';
import SideDrawer from './SideDrawer';
import {BrowserRouter, Route,Switch} from 'react-router-dom';


class App extends Component {
    state = {
        sideDrawerOpen : false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };
   
    render (){
        let sideDrawer;
       
        if(this.state.sideDrawerOpen){
            sideDrawer=<SideDrawer />;
        }
        return(
                <div style={{height:'100%'}}>
                     <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                    {sideDrawer}
                    <BrowserRouter>
                    <Switch>
            <Route path="/" component= {DashTable} exact />
            <Route path="/service" component= {Home} />
         </Switch>
                   
                    
                     </BrowserRouter>
                </div>
        )
    }


}

export default App;
