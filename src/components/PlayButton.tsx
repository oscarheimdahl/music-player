import { Pause, Play } from 'lucide-react';
import { Button } from './Button';
import { audioAtom } from '../utils/store';
import { useAtom } from 'jotai';

const PlayButton = () => {
  const [audio] = useAtom(audioAtom);

  function handleClick() {
    if (!audio.ref) return;
    audio.playing ? audio.ref.pause() : audio.ref.play();
  }

  return (
    <Button onClick={handleClick} className='bg-blue-500'>
      {audio.playing ? <Pause /> : <Play />}
    </Button>
  );
};

export default PlayButton;
