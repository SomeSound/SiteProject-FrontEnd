import { Image } from '@nextui-org/react';
import { Carousel, CarouselContent, CarouselItem } from '../shadcn/carousel';
import { Card, CardContent } from '../shadcn/card';
import Autoplay from 'embla-carousel-autoplay';

import './styles.scss';

interface imageProps {
  id: string;
  src: string;
}
interface bannerProps {
  data: imageProps[];
}

export const Banner = ({ data }: bannerProps) => {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {data.map((item) => (
          <CarouselItem
            className="pl-2 md:basis-1/2 lg:basis-1/3"
            key={item.id}
          >
            <div className="p-1">
              <Card className="border-none">
                <CardContent className="flex aspect-square items-center justify-center">
                  <Image height={1080} width={580} src={item.src} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
