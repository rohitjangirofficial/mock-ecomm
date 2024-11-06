import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel: React.FC<{ images: undefined | string[] }> = ({
  images,
}) => {
  return (
    <Carousel
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      thumbWidth={60}
      className="productCarousel"
    >
      {images?.map((img) => <img key={img} src={img} />)}
    </Carousel>
  );
};

export default ImageCarousel;
