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
        ]
    }

    bindChangeIndex = (func) => {
        this.chaneIndex = func
    }

    changeIndex = () => {
        const { images } = this.state
        this.chaneIndex(images.length - 1)
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
        }, this.changeIndex)
    }

    render() {
        return (
            <>
                <div className="header">
                    <p className="header-title">Image Carousel</p>
                </div>
                <div className="container">
                    <ImageSlider images={this.state.images} bindChangeIndex={this.bindChangeIndex} />
                    <ImageUploader addToImages={this.addImage} />
                </div>
            </>
        )
    }
}

export default Main
