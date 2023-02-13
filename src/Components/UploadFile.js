//source for upload file component: https://www.geeksforgeeks.org/file-uploading-in-react-js/
import React, { Component } from 'react'

class Uploadfile extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        selectedFile: fetch(this.props.resume).then(res=>res.blob()).then(data=>{console.log(data); return data}),
    }

    onFileChange = (event) => {
        let file = event.target.files[0]
        this.state.selectedFile = file
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            this.props.setResume(reader.result)
        }
        reader.onerror = (error) => {
        console.log('Error: ' , error)
        }
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
                </div>
                {this.fileData()}
            </div>
        )
    }
}

export default Uploadfile
