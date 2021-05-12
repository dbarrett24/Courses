import React from "react";

class ImageCard extends React.Component {
  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div>
        <img src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
