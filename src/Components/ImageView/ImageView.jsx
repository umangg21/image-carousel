import React from 'react'
import "./ImageView.scss";

const ImageView = (props) => {

    const { source } = props
    const { url, caption, id } = source || {}

    if (!url) return null
    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/assets/images/${url}`} alt="" className="img" id={`img${id}`}
                onClick={props.openModal}
            />
            <div className="img-caption">{caption}</div>


        </>
    )
}

export default ImageView