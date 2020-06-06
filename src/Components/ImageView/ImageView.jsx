import React from 'react'
import "./ImageView.scss";

const ImageView = (props) => {

    const { source } = props
    const { url, caption, id, customImage } = source || {}

    if (!url) return null
    return (
        <>
            <img loading="lazy" src={customImage ? url : `${process.env.PUBLIC_URL}/assets/images/${url}`} alt="" className="img" id={`img${id}`}
                onClick={props.openModal}
            />
            <div className="img-caption">{caption}</div>
        </>
    )
}

export default ImageView