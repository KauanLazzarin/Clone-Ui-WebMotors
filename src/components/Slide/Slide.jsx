import React from 'react';
import styles from './Slide.module.css';

export default function Slide ({slides}) {
    const [activeSlide, setActive] = React.useState(0);
    const [position, setPosition] = React.useState(0);
    const slideRef = React.useRef();

    React.useEffect(() => {
        const { width } = slideRef.current.getBoundingClientRect();
        setPosition(-(width * activeSlide));
    }, [activeSlide]);

    function slidePrev () {
        console.log(slides.length)
        console.log(activeSlide)

        if (activeSlide === 0) {
            setActive(0);
        } else {
            setActive(activeSlide - 1);
        }
    };

    function slideNext () {
        console.log(activeSlide)
        if (activeSlide < slides.length - 1) {
            setActive(activeSlide + 1);
        }
    };

    return (
        <section className={styles.slideContainer}>
            <div className={styles.slideItems} ref={slideRef} style={{transform: `translateX(${position}px)`}}>
                {
                    slides.map((slide) => {
                        return  <img key={slide.id} src={slide.src} alt="slide" className={styles.slideItem} />
                    })
                }
            </div>
            <nav className={styles.slideNavigation}>

                <button className={styles.navigationButton} onClick={slidePrev}>
                    <i className="material-icons">west</i>
                </button>

                <button className={styles.navigationButton} onClick={slideNext}>
                    <i className="material-icons">east</i>
                </button>
            </nav>
        </section>
    )
};