import React, { Component } from 'react'
import "./ImageModal.scss"

class ImageModal extends Component {

    componentDidMount() {

        const modal = document.getElementById("img-modal");
        modal.style.display = "block";

        // Get the <span> element that closes the modal
        const closeIcon = document.getElementsByClassName("modal-close")[0];

        // When the user clicks on <span> (x), close the modal
        closeIcon.onclick = () => {
            modal.style.display = "none";
            this.props.onClose()
        }
    }

    nextSlide = (n) => {
        this.props.nextSlide(n)
    }

    render() {
        const { source, children, hideNavigation } = this.props
        const { url, caption, customImage } = source || {}
        return (
            <div id="img-modal" className="modal">
                <span className="modal-close">&times;</span>
                <img loading="lazy" className="modal-content" id="img01" src={customImage ? url : `${process.env.PUBLIC_URL}/assets/images/${url}`} alt="" />
                {children}
                
                {
                    !!caption &&  <div className="modal-caption">{caption}</div>
                }
               
                {
                    !hideNavigation &&
                    <div className="arrow-container">
                        <div className="prev" onClick={() => this.nextSlide(-1)}>&#10094;</div>
                        <div className="next" onClick={() => this.nextSlide(1)}>&#10095;</div>
                    </div>
                }

            </div>
        )
    }
}

export default ImageModal
