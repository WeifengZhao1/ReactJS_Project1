import React from 'react';
import Hemisphere_Display from './HemisphereDisplay';
import './Location.css';

class Location extends React.Component{
/* first method
    constructor(props){
        super(props)
        this.state={latitude:''}
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {this.setState({latitude: position.coords.latitude})}
        )
    }
    */

    // another method
   state={latitude:''}
   componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        (position)=> {this.setState({latitude: position.coords.latitude})}
    )
    

   }
    render (){
        return(
            <div className='location-container'>
                <h1>Welcome to hemisphere app</h1>
                {/* <p> latitude=<span>{this.state.latitude}</span></p> */}
                <div>
                    <Hemisphere_Display latitude={this.state.latitude}/>
                </div>
            </div>
        ) 
}
}
export default Location;