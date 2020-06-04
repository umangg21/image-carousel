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
            },
            {
                url: "dp.png",
                id: "4",
                caption: "Caption",
            },
            {
                url: "2.png",
                id: "5",
                caption: "Caption",
            },
            {
                url: "3.png",
                id: "6",
                caption: "Caption",
            }
        ]
    }

    render() {
        return (
            <>
                <div className="header">

                </div>
                <div className="container">
                    <ImageSlider images={this.state.images} />

                </div>
            </>
        )
    }
}

export default Main
