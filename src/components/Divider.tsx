import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface IDividerProps extends HTMLAttributes<HTMLSpanElement> {
    direction?: 'horizontal' | 'vertical'
}
export const Divider = ({className, direction = 'horizontal', ...spanProps} : IDividerProps) => {
    const [size, weight] = direction == 'horizontal' ? ['w-full', 'h-px'] : ['h-full', 'w-px']
    return (
        <span className={twMerge('block bg-gray-800', size, weight, className)} {...spanProps}></span>
    )
}