import { useAtom } from 'jotai';
import { useEffect, useState, MouseEvent } from 'react';
import { audioRefAtom, progressAtom } from '../utils/store';

export const ProgressBar = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [audioRef] = useAtom(audioRefAtom);
  const [audioProgress] = useAtom(progressAtom);

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  function handleClick(
    e: MouseEvent<HTMLDivElement>,
    dragging: boolean = false
  ) {
    if (!audioRef) return;
    if (isNaN(audioRef.duration)) return;
    if (dragging && !mouseDown) return;

    const { clientX, currentTarget } = e;
    const { width, left } = currentTarget.getBoundingClientRect();
    const clickX = clientX - left;
    const percentage = (clickX / width) * 100;
    audioRef.currentTime = (audioRef.duration * percentage) / 100;
  }
  let progress = audioProgress;
  if (progress < 0.5) progress = 0;
  if (progress > 99) progress = 100;

  return (
    <div
      onMouseDown={() => setMouseDown(true)}
      onMouseMove={(e) => handleClick(e, true)}
      onClick={handleClick}
      className='group border border-black border-1 w-full h-8 rounded-sm hover:cursor-pointer'
    >
      <div
        className={`bg-emerald-500 dotted h-full ring-1 ring-black rounded-sm  
        ${progress === 0 ? 'ring-transparent transition-none' : ''}
  
        `}
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};
