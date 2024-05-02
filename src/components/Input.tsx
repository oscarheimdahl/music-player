interface InputProps {
  className?: string;
  label: string;
}

export function Input({ label }: InputProps) {
  return (
    // <div className='bg-red-400 w-fit'>
    <div className='relative w-full bg-green-400 mt-4'>
      <input
        aria-label={label}
        placeholder=' '
        className='peer rounded-sm px-2 w-full border border-1 border-black py-1 focus:outline-none'
      />
      <span
        className={`pointer-events-none select-none
                    absolute transition-all
                    text-sm left-0 top-0 -translate-y-full text-black
                    peer-placeholder-shown:left-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-black/50 peer-placeholder-shown:text-base
        `}
      >
        {label}
      </span>
    </div>
    // </div>
  );
}
