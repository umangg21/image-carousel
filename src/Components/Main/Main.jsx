import React, { Component } from 'react'
import "./Main.scss";
import ImageSlider from '../ImageSlider/ImageSlider';

class Main extends Component {
    state = {
        images: [
            {
                url: "img_nature_wide.jpg",
                id: "1",
                caption: "Caption",
            },
            {
                url: "img_snow_wide.jpg",
                id: "2",
                caption: "Caption",
            },
            {
                url: "img_mountains_wide.jpg",
                id: "3",
                caption: "Caption",
            }
        ]
    }

    render() {
        return (
            <div className="container">
                <ImageSlider images={this.state.images} />

            </div>
        )
    }
}

export default Main
