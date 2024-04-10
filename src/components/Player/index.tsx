import { PlayerBody } from './PlayerBody';
import { PlayerForm } from './PlayerForm';
import { PlayerHeartButton } from './PlayerHeartButton';
import { PlayerImage } from './PlayerImage';
import { PlayerNextButton } from './PlayerNextButton';
import { PlayerPauseButton } from './PlayerPauseButton';
import { PlayerPreviousButton } from './PlayerPreviousButton';
import { PlayerRepeatButton } from './PlayerRepeatButton';
import { PlayerRoot } from './PlayerRoot';
import { PlayerShuffleButton } from './PlayerShuffleButton';
import { PlayerSlider } from './PlayerSlider';

export const Player = {
  Root: PlayerRoot,
  Body: PlayerBody,
  Image: PlayerImage,
  Slider: PlayerSlider,
  NextButton: PlayerNextButton,
  PauseButton: PlayerPauseButton,
  PreviousButton: PlayerPreviousButton,
  RepeatButton: PlayerRepeatButton,
  ShuffleButton: PlayerShuffleButton,
  HeartButton: PlayerHeartButton,
  Form: PlayerForm,
};
