import { HTMLAttributes } from 'react';

interface IDividerProps extends HTMLAttributes<HTMLSpanElement> {
    
}
export const Divider = ({className, ...spanProps} : IDividerProps) => {
    return (
        <span className={`w-full block border-b border-b-gray-800 ${className}`} {...spanProps}></span>
    )
}