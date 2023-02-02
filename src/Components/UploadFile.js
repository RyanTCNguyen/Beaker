//source for upload file component: https://www.geeksforgeeks.org/file-uploading-in-react-js/

import React, { Component } from 'react'
import axios from 'axios'

class Uploadfile extends Component {
    state = {
        selectedFile: null,
    }

    onFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] })
    }

    onFileUpload = () => {
        
    }

    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                </div>
            )
        } else {
            return <div></div>
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>Upload</button>
                </div>
                {this.fileData()}
            </div>
        )
    }
}

export default Uploadfile
