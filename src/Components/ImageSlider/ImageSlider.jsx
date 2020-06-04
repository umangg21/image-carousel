import React, { Component, Fragment } from 'react'
import "./ImageSlider.scss";
import ImageView from '../ImageView/ImageView'

class ImageSlider extends Component {

    constructor(props) {
        super(props)

        this.slideIndex = 1
    }

    plusSlides = (n) => {
        this.showSlides(this.slideIndex += n);
    }

    currentSlide = (n) => {
        this.showSlides(this.slideIndex = n);
    }

    showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName("my-slides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { this.slideIndex = 1 }
        if (n < 1) { this.slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if (slides.length) slides[this.slideIndex - 1].style.display = "block";
        if (dots.length) dots[this.slideIndex - 1].className += " active";
    }

    componentDidMount() {
        this.showSlides(this.slideIndex);
    }


    render() {
        const { images } = this.props
        return (
            <Fragment>
                <div className="slideshow-container">
                    {
                        Array.isArray(images) && images.map((img) =>
                            <div className="my-slides fade" key={img.id}>
                                <ImageView source={img} />
                            </div>
                        )
                    }

                    <div className="arrow-container">
                        <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                    </div>
                </div>
                <br />

                <div className="dot-container">
                    {
                        Array.isArray(images) && images.map((img, index) =>
                            <span key={img.id} className="dot" onClick={() => this.currentSlide(index + 1)}></span>
                        )
                    }
                </div>
            </Fragment>
        )
    }
}

export default ImageSlider
