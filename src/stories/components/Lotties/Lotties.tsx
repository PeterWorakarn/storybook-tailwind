import Lottie from 'lottie-web';
import React, { FC, LegacyRef, useEffect, useRef } from 'react';
import '../../../base.css';


type LottiesTypes = {
}

export const Lotties: FC<LottiesTypes> = (props) => {
    const object = useRef<HTMLDivElement>(null);

    useEffect(() => {
        Lottie.loadAnimation({
            container: object.current as Element,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../assets/polar-bear.json')
        })
    }, [])

    return (
        <div className="container" ref={object}></div>
    );
};