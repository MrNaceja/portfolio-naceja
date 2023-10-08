'use client'

import { motion } from 'framer-motion';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface IDividerProps extends ComponentProps< typeof motion.span> {
    direction?: 'horizontal' | 'vertical'
}
export const Divider = ({className, direction = 'horizontal', ...motionSpanProps} : IDividerProps) => {
    const [size, weight] = direction == 'horizontal' ? ['w-full', 'h-px'] : ['h-full', 'w-px']
    return (
        <motion.span className={twMerge('block bg-gray-800', size, weight, className)} {...motionSpanProps}></motion.span>
    )
}