import React from 'react'
import '../../tailwind.css';

interface CenterProps {
  children: React.ReactElement;
}

const Center:React.FC<CenterProps> = (props) => {
    const { children, ...rest } = props

    return (
        <div className="max-w-sm mx-auto flex justify-center items-center" {...rest }>
            {children}
        </div>
    )
}

export default Center;