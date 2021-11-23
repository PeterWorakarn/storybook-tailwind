import React from 'react'
import '../../tailwind.css';

interface CenterProps {
    children: React.ReactElement;
}

const Center: React.FC<CenterProps> = (props) => {
    const { children, ...rest } = props

    return (
        <div className="max-w-sm mx-auto flex justify-center items-center" {...rest}>
            <div className="w-full flex justify-center items-center px-12 p-12 rounded-md shadow-sm bg-gray-50">
                {children}
            </div>
        </div>
    )
}

export default Center;