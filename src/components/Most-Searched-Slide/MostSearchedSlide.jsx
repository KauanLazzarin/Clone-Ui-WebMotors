import React from 'react';
import styles from './MostSearchedSlide.module.css';
import civicImage from './../../assets/civic.jpg'
import corollaImage from './../../assets/corolla.jpg'
import hondaFitImage from './../../assets/fit.jpg'
import golImage from './../../assets/gol.jpg'
import hb20Image from './../../assets/hb20.jpg'
import palioImage from './../../assets/palio.jpg'
import hiluxImage from './../../assets/hilux.jpg'
import s10Image from './../../assets/s10.jpg'
import saveiroImage from './../../assets/saveiro.jpg'
import unoImage from './../../assets/uno.jpg'
import stradaImage from './../../assets/strada.jpg'

const slides = [
    {
        name: 'Civic',
        brand:'Honda',
        id: 'searchedSlide1',
        src: civicImage
    },

    {
        name: 'Fit',
        brand:'Honda',
        id: 'searchedSlide2',
        src: hondaFitImage
    },

    {
        name: 'Corolla',
        brand:'Toyota',
        id: 'searchedSlide3',
        src: corollaImage
    },

    {
        name: 'Gol',
        brand:'Volkswagen',
        id: 'searchedSlide4',
        src: golImage
    },

    {
        name: 'HB20',
        brand:'Hyundai',
        id: 'searchedSlide5',
        src: hb20Image
    },

    {
        name: 'Palio',
        brand:'Fiat',
        id: 'searchedSlide6',
        src: palioImage
    },

    {
        name: 'Hilux',
        brand:'Toyota',
        id: 'searchedSlide7',
        src: hiluxImage
    },

    {
        name: 'S10',
        brand:'Chevrolet',
        id: 'searchedSlide8',
        src: s10Image
    },

    {
        name: 'Saveiro',
        brand:'Volkwagen',
        id: 'searchedSlide9',
        src: saveiroImage
    },

    {
        name: 'Uno',
        brand:'Fiat',
        id: 'searchedSlide10',
        src: unoImage
    },

    {
        name: 'Strada',
        brand:'Fiat',
        id: 'searchedSlide11',
        src: stradaImage
    }
]

export default function MostSearchedSlide () {
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
        if (activeSlide < slides.length - 8) {
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
                                        backgroundSize:'16vw',
                                        backgroundPosition:'center 60px',
                                    }}
                                    className={styles.slideItem}
                                >
                                    <div>
                                        <small>{slide.brand}</small>
                                        <strong>{slide.name}</strong>
                                    </div>
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