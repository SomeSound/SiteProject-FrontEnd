import { Carousel, CarouselContent, CarouselItem } from '../shadcn/carousel';
import { CardTrack } from './CardTrack';
import { TrackDTO, TrackPageDTO } from '../../services/track/types';
import './styles.scss';

interface cardSliderTrackProps {
  data: TrackPageDTO;
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
        {data.tracks.map((item: TrackDTO) => (
          <CarouselItem
            className="pl-1 md:basis-1/2 lg:basis-1/3"
            key={item.id}
          >
            <div className="p-1">
              <CardTrack data={data} height={100} width={100} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
