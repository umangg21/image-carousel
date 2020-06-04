import React, { Component } from 'react'
import "./ImageModal.scss"

class ImageModal extends Component {

    componentDidMount() {

        const { source } = this.props
        const { url, caption, id } = source || {}


        var modal = document.getElementById("myModal");
        modal.style.display = "block";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = () => {
            modal.style.display = "none";
            this.props.onClose()
        }
    }

    render() {
        const { source } = this.props
        const { url, caption, id } = source || {}
        return (
            <div id="myModal" class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" id="img01" src={`${process.env.PUBLIC_URL}/assets/images/${url}`} alt="" />
                <div id="caption">{caption}</div>
            </div>
        )
    }
}

export default ImageModal
