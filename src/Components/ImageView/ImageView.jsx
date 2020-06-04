import React, { Component } from 'react'
import "./ImageView.scss";
import ImageModal from '../ImageModal/ImageModal';

class ImageView extends Component {

    state = {
        viewModal: false
    }

    render() {

        const { source } = this.props
        const { url, caption, id } = source || {}
        
        if(!url) return null
        const { viewModal } = this.state
        return (
            <>
                <div className="img-index">{id}</div>
                <img src={`${process.env.PUBLIC_URL}/assets/images/${url}`} alt="" className="img" onClick={() => { this.setState({ viewModal: true }) }} />
                <div className="img-caption">{caption}</div>

                {
                    viewModal &&
                    <ImageModal source={source} onClose={() => { this.setState({ viewModal: false }) }} />
                }
            </>
        )
    }
}

export default ImageView
