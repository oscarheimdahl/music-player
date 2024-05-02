import { motion } from 'framer-motion';
import { FastForward, Rewind } from 'lucide-react';
import { Audio } from './components/Audio';
import { Button } from './components/Button';
import { ProgressBar } from './components/ProgressBar';
import { PlayButton } from './components/PlayButton';
import { VolumeControls } from './components/VolumeControls';
import { ProgressNumbers } from './components/ProgressNumbers';

function App() {
  return (
    <>
      <Audio />
      <div className='font-fun size-full flex items-center justify-center'>
        <motion.div
          transition={{ delay: 0.5 }}
          initial={{ scale: 0, rotate: 45, translateX: 100, translateY: 100 }}
          animate={{ scale: 1, rotate: 0, translateX: 0, translateY: 0 }}
          className='relative pt-8 flex flex-col gap-4 p-4 bg-orange-400 border rounded-sm border-black shadow-hard'
        >
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-end'>
              <ProgressNumbers />
              <VolumeControls />
            </div>
            <ProgressBar />
          </div>
          <div className='flex gap-2'>
            <Button className='bg-purple-500'>
              <Rewind />
            </Button>
            <PlayButton />
            <Button className='bg-purple-500'>
              <FastForward />
            </Button>
          </div>
          <div className='absolute top-0 left-0 translate-x-2 -translate-y-1/2 px-3 rounded-sm bg-neutral-100  w-fit border border-black'>
            <h2 className='text-xl font-bold'>Music player</h2>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
