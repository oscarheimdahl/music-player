import { useEffect, useRef } from 'react';
import {
  audioRefAtom,
  playingAtom,
  progressAtom,
  volumeAtom,
} from '../utils/store';
import { useAtom } from 'jotai';

export function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [, setStoreAudioRef] = useAtom(audioRefAtom);
  const [, setProgress] = useAtom(progressAtom);
  const [, setPlaying] = useAtom(playingAtom);
  const [volume, setVolume] = useAtom(volumeAtom);

  useEffect(() => {}, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
    setStoreAudioRef(audioRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioRef]);

  useEffect(() => {
    if (!audioRef.current) return;
    const currentRef = audioRef.current;

    const handleStateChangePlay = () => {
      setPlaying(true);
    };

    const handleStateChangePause = () => {
      setPlaying(false);
    };

    currentRef.addEventListener('play', handleStateChangePlay);
    currentRef.addEventListener('pause', handleStateChangePause);
    return () => {
      currentRef.removeEventListener('play', handleStateChangePlay);
      currentRef.removeEventListener('pause', handleStateChangePause);
    };
  }, [audioRef, setPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;
    const currentRef = audioRef.current;

    const handleTimeUpdate = () => {
      const { currentTime, duration } = currentRef;
      setProgress((currentTime / duration) * 100);
    };

    currentRef.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      currentRef.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [audioRef, setProgress]);

  useEffect(() => {
    if (!audioRef.current) return;
    const currentRef = audioRef.current;

    const handleVolumeChange = () => {
      const { volume } = currentRef;
      setVolume(volume);
    };

    currentRef.addEventListener('volumechange', handleVolumeChange);
    return () => {
      currentRef.removeEventListener('volumechange', handleVolumeChange);
    };
  }, [audioRef, setProgress, setVolume]);

  return <audio ref={audioRef} src='/karamell.mp3' />;
}
