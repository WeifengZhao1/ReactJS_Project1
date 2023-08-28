import React from "react";
import './ImageList.css'

const Images_List = function(props) {
    const imageItems = props.images.map((image) => (
        <img
            src={image.src.original}
            alt="images"
            key={image.id}
            className="image-item"
        />
    ));

    return (
        <div className="image-grid">
            {imageItems}
        </div>
    );
};

export default Images_List;
