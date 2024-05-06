import { Image } from '@nextui-org/react';
import './styles.scss';
import { Carousel, CarouselContent, CarouselItem } from '../shadcn/carousel';
import { Card, CardContent } from '../shadcn/card';
import { CardTrack } from './CardTrack';

interface musicProps {
  id: string;
  image: string;
}
interface cardSliderTrackProps {
  data: musicProps[];
}

export const CardCarouselTrack = ({ data }: cardSliderTrackProps) => {
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4 md:-ml-4">
        {data.map((item) => (
          <CarouselItem
            className="pl-1 md:basis-1/2 lg:basis-1/3"
            key={item.id}
          >
            <div className="p-1">
              <CardTrack height={100} width={100} image={item.image} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
