import { atom } from 'jotai';

export const audioRefAtom = atom<HTMLAudioElement | null>(null);
export const playingAtom = atom(false);
export const progressAtom = atom(0);
export const volumeAtom = atom(0.5);
