import React from 'react';
import Card from '../card/Card';

interface CarouselProps {
  cardsData: Array<{
    imageUrl: string;
    name: string;
    passion: string;
  }>;
}

const Carousel: React.FC<CarouselProps> = ({ cardsData }) => {
  return (
    <div className="overflow-hidden w-full carrousel-container">
      <div className="flex w-[850%] md:w-[500%] lg:w-[400%] xl:w-[300%] 2xl:w-[250%] gap-8 animate-scroll">
        {[...cardsData, ...cardsData].map((card, index) => {
          const originalIndex = index % cardsData.length;
          return (
            <Card
              key={`${card.name}-${index}`}
              imageUrl={card.imageUrl}
              name={card.name}
              passion={card.passion}
              index={originalIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;