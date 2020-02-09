import React, { Component } from 'react';


class SearchFilter extends Component {

    constructor(props){
        super(props);
        this.state={
            searchText: '',
        }
        this.searchHandler=this.searchHandler.bind(this);
    }
    searchHandler(event){
        this.setState({searchText:event.target.value})
        }
    
        render (){
                
            return(
                <div style={{float:'right'}}>
                <form>
                    <input type="text" placeholder="Search here" value={this.searchText} onChange={this.searchHandler}/>
                    </form>
             </div>
            )
        }
    
    }
    
    
  export default SearchFilter;
  