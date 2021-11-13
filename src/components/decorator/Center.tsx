import React from 'react'
import '../index.css';

interface CenterProps {
  children: React.ReactElement;
}

const Center:React.FC<CenterProps> = (props) => {
    const { children, ...rest } = props

    return (
        <div className="max-w-lg mx-auto flex justify-center items-center" {...rest }>
            {children}
        </div>
    )
}

export default Center;