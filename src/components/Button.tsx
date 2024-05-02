import { ReactNode } from 'react';
import { cn } from '../utils/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'normal' | 'destructive' | 'secondary';
}

export function Button({
  children,
  className,
  variant = 'normal',
  ...props
}: ButtonProps) {
  let bg = 'bg-green-600';
  let text = 'text-white';
  if (variant === 'destructive') bg = 'bg-rose-600';
  if (variant === 'secondary') {
    bg = 'bg-gray-100';
    text = 'text-black';
  }

  return (
    <button
      className={`group pr-[3px] pb-[3px]
                  focus: outline-none`}
      {...props}
    >
      <div
        className={cn(`${text} ${bg} rounded-sm transition-all px-4 py-2  border border-black shadow-hard
                group-hover:shadow-hard-focus group-hover:translate-x-[3px] group-hover:translate-y-[3px]
                group-focus-visible:shadow-hard-focus group-focus-visible:translate-x-[3px] group-focus-visible:translate-y-[3px]
                group-focus-visible::border-white
                group-active:shadow-hard-active group-active:brightness-95
                ${className}

      `)}
      >
        <div className='transition-transform group-active:translate-y-[1px] group-active:translate-x-[1px]'>
          {children}
        </div>
      </div>
    </button>
  );
}
