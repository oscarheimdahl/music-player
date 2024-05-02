import { atom } from 'jotai';

type AudioAtom = {
  playing: boolean;
  progress: number;
  ref: HTMLAudioElement | null;
};

export const audioAtom = atom<AudioAtom>({
  playing: false,
  progress: 0,
  ref: null,
});
