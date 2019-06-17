import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor';

class ImageEditor extends Component {
    render() {
        return (
            <AvatarEditor
                image={this.props.image}
                width={250}
                height={250}
                border={10}
                color={[255, 255, 255, 0.5]}
                scale={1}
                rotate={0}
            />
        )
    }
}

export default ImageEditor