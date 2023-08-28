import React from "react";
import './home.css';
import search from '../Image/search.svg';
import geolocation from '../Image/geolocation.svg'
import contactus from '../Image/contactus.svg'
import facebook from '../Image/facebook.png'
import instagram from '../Image/instagram.png'
import youtube from '../Image/youtube.png'

const Home = function () {
    return (
        <div className="container">
            <div className="card">
                <img src={search} alt="search picture"></img>
                <h2>Image Seacher</h2>
                <div className="description">
                    <p>This ReactJS app search images in Pexels website. The application is done using AJAX and API technology</p>
                </div>
                <a href="/search" className="link">Visit the App</a>
            </div>

            <div className="card">
                <img src={geolocation} alt="geolocation picture"></img>
                <h2>Geolocation</h2>
                <div className="description">
                    <p>Geolocaiton display the image of the Northern or Southern hemisphere according to user latitude location. The application uses the geolocation API</p>
                </div>
                <a href="/location" className="link">Visit the App</a>
            </div>

            <div className="card">
                <img src={contactus} alt="contactus picture"></img>
                <h2>Contact Us</h2>
                <div className="description">
                    <p>Where am I? Contact Us!</p>
                </div>
                <a href="/contact-us" className="link">Visit the App</a>
            </div>

            <div class="footer">
                <div class="media-links">
                    <h4>ReactJS project by Weifeng </h4>
                    <div class="social-icon">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook Icon" />
                        </a>

                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="instagram Icon" />
                        </a>

                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="youtube Icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home