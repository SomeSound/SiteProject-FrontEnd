import { useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface PlayerFormProps {
  audioUrl: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

let wavesurfer: any;

export const PlayerForm = ({
  audioUrl,
  isPlaying,
  onTogglePlay,
}: PlayerFormProps) => {
  const waveformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!waveformRef.current) return;

    wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#C0C0C0',
      progressColor: '#FF0000',
      cursorColor: 'transparent',
      barWidth: 3,
      barRadius: 3,
      height: 50,
      normalize: true,
    });

    wavesurfer.load(audioUrl);

    return () => {
      if (wavesurfer) {
        wavesurfer.destroy();
      }
    };
  }, [audioUrl]);

  useEffect(() => {
    if (wavesurfer && isPlaying) {
      wavesurfer.play();
    } else if (wavesurfer && !isPlaying) {
      wavesurfer.pause();
    }
  }, [isPlaying, wavesurfer]);

  return <div ref={waveformRef} />;
};
