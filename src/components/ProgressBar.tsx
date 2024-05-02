import { useAtom } from 'jotai';
import { useEffect, useState, MouseEvent } from 'react';
import { audioAtom } from '../utils/store';

const ProgressBar = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [audio] = useAtom(audioAtom);

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
    if (!audio.ref) return;
    if (dragging && !mouseDown) return;

    const { clientX, currentTarget } = e;
    const { width, left } = currentTarget.getBoundingClientRect();
    const clickX = clientX - left;
    const percentage = (clickX / width) * 100;
    audio.ref.currentTime = (audio.ref.duration * percentage) / 100;
  }

  return (
    <div
      onMouseDown={() => setMouseDown(true)}
      onMouseMove={(e) => handleClick(e, true)}
      onClick={handleClick}
      className='border border-black border-1 w-full h-8 rounded-sm overflow-hidden'
    >
      <div
        className={`bg-emerald-500 h-full border-r border-black
        ${audio.progress > 99.8 ? 'border-none' : 'border-1'}
        ${audio.progress < 0.2 ? 'border-none' : 'border-1'}
        `}
        style={{
          width: `${audio.progress}%`,
          animationPlayState: audio.playing ? 'running' : 'paused',
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
