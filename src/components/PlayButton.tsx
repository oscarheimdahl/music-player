import { Pause, Play } from 'lucide-react';
import { Button } from './Button';
import { audioRefAtom, playingAtom } from '../utils/store';
import { useAtom } from 'jotai';

export const PlayButton = () => {
  const [audioRef] = useAtom(audioRefAtom);
  const [audioPlaying] = useAtom(playingAtom);

  function handleClick() {
    if (!audioRef) return;
    audioPlaying ? audioRef.pause() : audioRef.play();
  }

  return (
    <Button onClick={handleClick} className='bg-blue-500'>
      {audioPlaying ? <Pause scale={2} /> : <Play />}
    </Button>
  );
};
