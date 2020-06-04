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

    render() {
        const { source } = this.props
        const { url, caption } = source || {}
        return (
            <div id="img-modal" className="modal">
                <span className="modal-close">&times;</span>
                <img className="modal-content" id="img01" src={`${process.env.PUBLIC_URL}/assets/images/${url}`} alt="" />
                <div className="modal-caption">{caption}</div>
            </div>
        )
    }
}

export default ImageModal
