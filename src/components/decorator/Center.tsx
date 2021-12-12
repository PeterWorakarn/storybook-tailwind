import React from 'react'
import '../../tailwind.css';
import '../../base.css';
import { initializeMoment } from '../../utils/moment';

interface CenterProps {
    children: React.ReactElement;
}

const Center: React.FC<CenterProps> = (props) => {
    initializeMoment()
    const { children, ...rest } = props

    return (
        <div className="center" {...rest}>
            <div className="center__item ">
                {children}
            </div>
        </div>
    )
}

export default Center;