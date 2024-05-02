import { useAtom } from 'jotai';
import { audioRefAtom, progressAtom } from '../utils/store';

export const ProgressNumbers = () => {
  const [audioProgress] = useAtom(progressAtom);
  const [audioRef] = useAtom(audioRefAtom);

  let displayProgress = '00:00';
  let displayDuration = '00:00';
  if (audioRef) {
    const seconds = (audioProgress / 100) * audioRef.duration;
    displayProgress = secondsToFormattedMinutes(seconds);
    displayDuration = secondsToFormattedMinutes(audioRef.duration);
  }

  return (
    <div className='leading-3 flex gap-0.5'>
      <div className='w-10'>{displayProgress}</div> /
      <span>{displayDuration}</span>
    </div>
  );
};

function secondsToFormattedMinutes(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemainder = seconds % 60;
  const flooredSeconds = Math.floor(secondsRemainder);

  if (isNaN(minutes) || isNaN(flooredSeconds)) return '00:00';

  const displayTime = `${zeroPad(minutes)}:${zeroPad(flooredSeconds)}`;

  return displayTime;
}

function zeroPad(num: number) {
  return num.toString().padStart(2, '0');
}
