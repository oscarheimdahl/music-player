import { useEffect, useRef } from 'react';
import { audioAtom } from '../utils/store';
import { useAtom } from 'jotai';

export function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audio, setAudio] = useAtom(audioAtom);

  useEffect(() => {}, []);

  useEffect(() => {
    if (!audioRef.current) return;
    setAudio({ ...audio, ref: audioRef.current });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioRef]);

  useEffect(() => {
    if (!audioRef.current) return;
    const currentRef = audioRef.current;

    const handleStateChangePlay = () => {
      setAudio({ ...audio, playing: true });
    };

    const handleStateChangePause = () => {
      setAudio({ ...audio, playing: false });
    };

    currentRef.addEventListener('play', handleStateChangePlay);
    currentRef.addEventListener('pause', handleStateChangePause);
    return () => {
      currentRef.removeEventListener('play', handleStateChangePlay);
      currentRef.removeEventListener('pause', handleStateChangePause);
    };
  }, [audio, audioRef, setAudio]);

  useEffect(() => {
    if (!audioRef.current) return;
    const currentRef = audioRef.current;

    const handleTimeUpdate = () => {
      const { currentTime, duration } = currentRef;
      setAudio({ ...audio, progress: (currentTime / duration) * 100 });
    };

    currentRef.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      currentRef.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audio, audioRef, setAudio]);

  return <audio ref={audioRef} src='/karamell.mp3' />;
}
