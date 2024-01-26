import { Image } from '@nextui-org/react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../shadcn/carousel';

import './styles.scss';
import { Card, CardContent } from '../shadcn/card';

interface imageProps {
  id: string;
  src: string;
}
interface bannerProps {
  data: imageProps[];
}

export const Banner = ({ data }: bannerProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <Image src={item.src} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
