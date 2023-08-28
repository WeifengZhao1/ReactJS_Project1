import React from "react";
import southernImg from '../Image/southern_hemisphere.jpg'
import norhternimg from '../Image/Northern_Hemisphere.png'
import equator from '../Image/equator-featured.jpg'
import './Location.css';

const Hemisphere_Display = (props) => {
    const hemisphereResult = props.latitude
    let userLocation = ''
    let picture
    if (hemisphereResult > 0) {
        userLocation = 'Northern Hemisphere!'
        picture=norhternimg
    }
    else if (hemisphereResult < 0) {
        userLocation = 'Southern Hemisphere!'
        picture=southernImg
    }
    else {
        userLocation = 'You are at the Ecuadorian line!'
        picture=equator
    }

    return (
        <div className="ui raised very padded text container segment" style={{marginTop:'3em'}}>
            <p className="display_text">You are at <span className="display_text_color">{userLocation}</span></p>
            <img src={picture} alt="" style={{width:'50%'}}/>
        </div>
    )
}

export default Hemisphere_Display