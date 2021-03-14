import React from 'react';
import styles from './BodySlide.module.css';
import suvImage from './../../assets/nissan-kicks.jpg'
import sedanImage from './../../assets/nissan-versa.jpg'
import frontierImage from './../../assets/frontier.jpg'
import luxuryImage from './../../assets/luxo.jpg'
import familyImage from './../../assets/family.jpg'
import dieselImage from './../../assets/diesel.jpg'
import economyImage from './../../assets/economy.jpg'
import oldImage from './../../assets/old.jpg'
import convertibleImage from './../../assets/convertible.jpg'
import hybridImage from './../../assets/hybrid.jpg'

const slides = [
    {
        name: 'SUVs',
        id: 'bodySlide1',
        src: suvImage
    },

    {
        name: 'Sedans',
        id: 'bodySlide2',
        src: sedanImage
    },

    {
        name: 'Frontier 2021',
        id: 'bodySlide3',
        src: frontierImage
    },

    {
        name: 'Carros de luxo',
        id: 'bodySlide4',
        src: luxuryImage
    },

    {
        name:`Carros para família`,
        id: 'bodySlide5',
        src: familyImage
    },

    {
        name: 'Carros a diesel',
        id: 'bodySlide6',
        src: dieselImage
    },

    {
        name: 'Carros econômicos',
        id: 'bodySlide7',
        src: economyImage
    },

    {
        name:'Carros antigos',
        id: 'bodySlide8',
        src: oldImage
    },

    {
        name: 'Carros conversíveis',
        id: 'bodySlide9',
        src: convertibleImage
    },

    {
        name: 'Carros híbridos',
        id: 'bodySlide10',
        src: hybridImage
    }
]

export default function BodySlide () {
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
        if (activeSlide < slides.length - 4) {
            setActive(activeSlide + 1);
        }
    };

    return (
        <section className={styles.slideContainer}>
            <div className={styles.slideItems} style={{transform: `translateX(${position}px)`}}>
                {
                    slides.map((slide) => {
                        return  (
                                <div 
                                    key={slide.id} 
                                    ref={slideRef} 
                                    style={{
                                        background: `url(${slide.src})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize:'cover',
                                        backgroundPosition:'center',
                                    }}
                                    className={styles.slideItem}
                                >
                                    <strong>{slide.name}</strong>
                                </div>
                        )
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