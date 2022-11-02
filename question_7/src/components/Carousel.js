import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://m.media-amazon.com/images/I/61kMZ0w6WOL._SX522_.jpg',
    altText: 'Slide 1',
    caption: 'Ear Phone',
    key: 1,
  },
  {
    src: 'https://m.media-amazon.com/images/I/51Q8DUDT2eL._SX522_.jpg',
    altText: 'Slide 2',
    caption: 'Head Phone',
    key: 2,
  },
  {
    src: 'https://m.media-amazon.com/images/I/61uHTQJbbIL._SX522_.jpg',
    altText: 'Slide 3',
    caption: 'Pen',
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className='carousel carousel-dark slide'> 
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </div>
  );
}

export default Example;