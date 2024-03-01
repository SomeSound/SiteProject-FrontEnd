import React from 'react';
import { Player } from '.';

import './styles.scss';

export const PlayerComponent = () => {
  return (
    <div className="player w-full">
      <Player.Root>
        <Player.Body>
          <Player.Image
            className="track_image"
            artistName="Artist Name"
            imageUrl="https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long"
            trackName="Track Name"
          />
          <Player.HeartButton />

          <div className="w-full">
            <div className="flex flex-col">
              <Player.Slider />
            </div>
            <div className="button_section">
              <div className="flex w-full justify-center">
                <Player.RepeatButton />
                <Player.PreviousButton />
                <Player.PauseButton />
                <Player.NextButton />
                <Player.ShuffleButton />
              </div>
            </div>
          </div>
        </Player.Body>
      </Player.Root>
    </div>
  );
};
