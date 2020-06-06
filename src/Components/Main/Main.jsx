import React, { Component } from 'react'
import "./Main.scss";
import ImageSlider from '../ImageSlider/ImageSlider';
import ImageUploader from '../ImageUploader/ImageUploader';

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
            // {
            //     url: "dp.png",
            //     id: "4",
            //     caption: "Caption",
            // },
            // {
            //     url: "2.png",
            //     id: "5",
            //     caption: "Caption",
            // },
            // {
            //     url: "3.png",
            //     id: "6",
            //     caption: "Caption",
            // }
        ]
    }

    addImage = (newImage, caption) => {

        const { images } = this.state

        const newImageObject = {
            url: newImage,
            id: images[images.length - 1].id + 1,
            caption: "",
            customImage: true
        }

        this.setState({
            images: [...images, newImageObject]
        })
    }

    render() {
        return (
            <>
                <div className="header">
                    <p className="header-title">Image Carousel</p>
                </div>
                <div className="container">
                    <ImageSlider images={this.state.images} />
                    <ImageUploader addToImages={this.addImage} />
                </div>
            </>
        )
    }
}

export default Main
