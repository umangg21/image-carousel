import React, { Component, Fragment } from 'react'
import "./ImageSlider.scss";
import ImageView from '../ImageView/ImageView'
import ImageModal from '../ImageModal/ImageModal';

class ImageSlider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            viewModal: false,
            activeIndex: 0
        }
        this.props.bindChangeIndex(this.showSlides)
    }

    nextSlide = (n) => {
        this.showSlides(this.state.activeIndex + n);
    }

    showSlides = (n) => {
        const { images } = this.props
        let activeIndex = n;
        if (n >= images.length) { activeIndex = 0 }
        if (n < 0) { activeIndex = images.length - 1 }
        this.setState({ activeIndex })
    }

    componentDidMount() {
        this.showSlides(this.state.activeIndex);
    }

    render() {
        const { viewModal, activeIndex } = this.state
        const { images } = this.props
        return (
            <Fragment>

                {
                    viewModal &&
                    <ImageModal
                        source={images[activeIndex]}
                        onClose={() => { this.setState({ viewModal: false }) }}
                        nextSlide={this.nextSlide}
                    >
                    </ImageModal>
                }

                <div className="slideshow-container">
                    {
                        Array.isArray(images) && images.map((img, index) =>
                            <div className="my-slides fade"
                                style={activeIndex === index ? { display: "block" } : { display: "none" }}
                                key={img.id}>
                                <ImageView source={img} openModal={() => { this.setState({ viewModal: true }) }} />
                            </div>
                        )
                    }

                    <div className="arrow-container">
                        <div className="prev" onClick={() => this.nextSlide(-1)}>&#10094;</div>
                        <div className="next" onClick={() => this.nextSlide(+1)}>&#10095;</div>
                    </div>
                </div>
                <br />

                <div className="dot-container">
                    {
                        Array.isArray(images) && images.map((img, index) =>
                            <span key={img.id} className={`${activeIndex === index ? "active" : ""} dot`} onClick={() => this.showSlides(index)}></span>
                        )
                    }
                </div>

            </Fragment>
        )
    }
}

export default ImageSlider
