import { useStore } from '../../store/useStore';
import { Player as PlayerComponent } from '.';
import { getFileTrackById } from '../../services/track';
import { useEffect, useState } from 'react';
import './styles.scss';
import { TrackDTO } from '../../services/track/types';

export const Player = () => {
  const { playTrack, setPlayTrack } = useStore();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // async function getFirstTrackToPlay() {
  //   try {
  //     const response = await getFileTrackById(1);

  //     const data: TrackDTO = {
  //       artist: track.data.artist,
  //       duration: track.data.duration,
  //       genre: track.data.genre,
  //       image: track.data.image,
  //       name: track.data.name,
  //       path: url.data,
  //     };

  //     setPlayTrack(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log('Error play Track', error);
  //   }
  // }

  useEffect(() => {
    // getFirstTrackToPlay();
  }, []);

  return (
    <>
      <div className="player w-full flex">
        <PlayerComponent.Root>
          <PlayerComponent.Body>
            <div className="flex">
              <PlayerComponent.Image
                className="track_image"
                artistName="Artist Name"
                imageUrl="https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long"
                trackName="Track Name"
              />
              <PlayerComponent.HeartButton />

              <div className="w-full">
                <div className="flex flex-col">
                  {playTrack !== null && (
                    <div className="waveSurfer">
                      <PlayerComponent.Form
                        audioUrl={playTrack.path}
                        isPlaying={isPlaying}
                        onTogglePlay={handleTogglePlay}
                      />
                    </div>
                  )}
                </div>
                <div className="button_section">
                  <div className="flex w-full justify-center">
                    <PlayerComponent.RepeatButton />
                    <PlayerComponent.PreviousButton />
                    {isPlaying ? (
                      <PlayerComponent.PauseButton event={handleTogglePlay} />
                    ) : (
                      <PlayerComponent.ShuffleButton event={handleTogglePlay} />
                    )}
                    <PlayerComponent.NextButton />
                    <PlayerComponent.ShuffleButton event={() => {}} />
                  </div>
                </div>
              </div>
            </div>
          </PlayerComponent.Body>
        </PlayerComponent.Root>
      </div>
    </>
  );
};
