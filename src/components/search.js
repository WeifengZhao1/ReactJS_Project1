import React from "react";
import axios from 'axios';
import Search_Input from "./SearchInput";
import Images_List from "./ImageList";

class Search extends React.Component {
    // set a state to store the response images in an array
    state = { images: [] }

    onSearchSubmit = async (entry) => {
        console.log(entry);
        const API_KEY = 'WAelDESrr1DRceHR1IjaOolRvodD99FVj0vpLYEzUpf5l20YtUFVPWWP'; // Replace with your Pexels API key

        try {
            const response = await axios.get(`https://api.pexels.com/v1/search?query=${entry}`, {
                headers: {
                    Authorization: API_KEY
                }
            });
            // setState to collect and transfer images
            this.setState({ images: response.data.photos });
        } catch (error) {
            console.error('Error searching images:', error);
        }
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '2em' }}>
                <h1 style={{ textAlign: 'center', color: 'red' }}>Welcome to image search App</h1>
                <Search_Input onSearchSubmit={this.onSearchSubmit} />
                <p>There are {this.state.images.length} images</p>
                <Images_List images={this.state.images} />
            </div>
        );
    }
}

export default Search;
