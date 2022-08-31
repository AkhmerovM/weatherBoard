import React, { memo } from 'react';
import { getCityImgUrl } from '@/modules/city/utils';
import { CITIES } from '@/modules/city/types';
import styles from './style.less';

type TProps = {
    name: keyof typeof CITIES
}
export const Slider: React.FC<TProps> = memo(({ name }) => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout () {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    const delay = Math.random() * 20000 + 10000;

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === 2 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className={styles.slideshow}>
            <div
                className={styles.slideshowSlider}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                <img src={getCityImgUrl(`${name}1`)} className={styles.slide} alt={'cityName1'}/>
                <img src={getCityImgUrl(`${name}2`)} className={styles.slide} alt={'cityName2'}/>
                <img src={getCityImgUrl(`${name}3`)} className={styles.slide} alt={'cityName3'}/>
            </div>
        </div>
    );
});
