import { useAtom } from 'jotai';
import { audioRefAtom, volumeAtom } from '../utils/store';

export const VolumeControls = () => {
  const numSteps = Array.from({ length: 10 }, (_, i) => i + 1);
  const [audioRef] = useAtom(audioRefAtom);
  const [volume] = useAtom(volumeAtom);
  // const [volume, setVolume] = useState(audioRef?.volume ?? 0);

  function handleClick(newVolume: number) {
    if (!audioRef) return;
    audioRef.volume = newVolume / numSteps.length;
  }

  return (
    <div className='group flex items-end justify-end h-8'>
      {numSteps.map((i) => {
        const minHeight = 20;
        const height = (i / numSteps.length) * (100 - minHeight) + minHeight;
        const filled = i <= volume * 10;
        return (
          <button
            onClick={() => handleClick(i)}
            style={{ height: height + '%' }}
            key={i}
          >
            <div
              className={`w-[5px] h-full ml-[4px] ring-1 ring-black rounded-full shadow-hard-focus transition-shadow-transform
             ${filled ? 'bg-red-500' : ''}
             `}
            ></div>
          </button>
        );
      })}
    </div>
  );
};
