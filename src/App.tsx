import { motion } from 'framer-motion';
import { FastForward, Rewind } from 'lucide-react';
import { Audio } from './components/Audio';
import { Button } from './components/Button';
import ProgressBar from './components/ProgressBar';
import PlayButton from './components/PlayButton';

function App() {
  return (
    <div className='font-fun size-full flex items-center justify-center'>
      <motion.div
        transition={{ delay: 0.5 }}
        initial={{ scale: 0, rotate: 45, translateX: 100, translateY: 100 }}
        animate={{ scale: 1, rotate: 0, translateX: 0, translateY: 0 }}
        className='flex flex-col gap-2 p-4 bg-orange-400 border rounded-sm border-black shadow-hard'
      >
        <Audio />
        <div>
          <h2 className='text-xl font-bold'>Music player</h2>
        </div>
        <ProgressBar />
        <div className='flex gap-2'>
          <Button className='bg-purple-500'>
            <Rewind />
          </Button>
          <PlayButton />
          <Button className='bg-purple-500'>
            <FastForward />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
