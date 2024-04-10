import { useStore } from '../../store/useStore';
import { Player as PlayerComponent } from '.';
import { useEffect, useState } from 'react';
import './styles.scss';

export const Player = () => {
  const { playTrack, setPlayTrack } = useStore();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  //PLAY NA TRACK ASSIM QUE CARREGAR - ESTÁ COM MUITO DELAY
  // useEffect(() => {
  //   setIsPlaying(true);
  // }, [playTrack]);

  return (
    <>
      <div className="player w-full flex">
        <PlayerComponent.Root>
          <PlayerComponent.Body>
            <div className="flex">
              <PlayerComponent.Image
                className="track_image"
                artistName={playTrack === null ? '' : playTrack.artist.username}
                imageUrl="https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long"
                trackName={playTrack === null ? '' : playTrack.name}
              />
              {playTrack !== null ? (
                <PlayerComponent.HeartButton />
              ) : (
                'Selecione uma track'
              )}

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
