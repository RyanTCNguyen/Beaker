//source for upload file component: https://www.geeksforgeeks.org/file-uploading-in-react-js/
import React, { Component } from 'react'

class Uploadfile extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        selectedFile: fetch(this.props.resume)
            .then((res) => res.blob())
            .then((data) => {
                console.log(data)
                return data
            }),
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
            console.log('Error: ', error)
        }
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.onFileChange} />
            </div>
        )
    }
}

export default Uploadfile
