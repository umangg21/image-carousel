import React, { Component } from 'react'
import "./ImageUploader.scss"
import ImageModal from '../ImageModal/ImageModal'

class ImageUploader extends Component {
    state = {

    }
    onUploadImage = () => {
        const { imageUrl } = this.state
        this.props.addToImages(imageUrl)
        this.setState({
            openModal: false,
            imageUrl: ""
        }, this.clearImage)
    }

    manageUploadedFile = (file) => {
        this.setState({
            openModal: true,
            imageUrl: file
        })
    }

    getBinaryFromFileInput = (file) => {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { resolve(reader.result); };
            reader.onerror = reject;
        });
    }

    onSelectImage = (e) => {
        const [file] = e.target.files

        const fileType = file['type'];
        const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        if (validImageTypes.includes(fileType)) {
            this.getBinaryFromFileInput(file)
                .then((binary) => {
                    this.manageUploadedFile(binary);
                }).catch((reason) => {
                    console.log(`Error during upload ${reason}`);
                    e.target.value = '';
                });
        } else {
            e.target.value = '';
            alert("Only Image is Allowed")
        }
    }

    clearImage = () => {
        document.getElementById("image-input").value = ""
    }

    render() {
        const { openModal, imageUrl } = this.state
        return (
            <>
                {
                    openModal &&
                    <ImageModal
                        source={{
                            url: imageUrl,
                            customImage: true
                        }}
                        onClose={() => { this.setState({ openModal: false, imageUrl: "" }, this.clearImage) }}
                        hideNavigation
                    >
                        <div className="upload-button-container">
                            <button onClick={this.onUploadImage} className="upload-button">Upload</button>
                        </div>
                    </ImageModal>
                }
                <div className="uploader-container">
                    <p className="uploader-heading">Have an Image? Add to Carousel now!</p>

                    <div className="uploader">
                        <label htmlFor="image-input">
                            <div className="border">
                                <div className="text-section">
                                    <p>Click to upload your Image</p>
                                    <p>Accepted formats .jpg, .jpeg, .png</p>
                                </div>
                            </div>
                        </label>
                        <input accept=".jpg,.jpeg,.png"
                            type="file"
                            autoComplete="off"
                            id="image-input"
                            requires="true"
                            onChange={this.onSelectImage}
                            style={{ display: `none` }}>
                        </input>
                    </div>

                </div>
            </>
        )
    }
}

export default ImageUploader
