import React from 'react';
import styles from './UsedCars.module.css';
import civicSiImage from './../../assets/civic-si.jpg'
import golImage from './../../assets/gol2013.jpg'
import voyageImage from './../../assets/voyage.jpg'
import onixImage from './../../assets/onix.jpg'
import poloImage from './../../assets/polo.jpg'
import l200Image from './../../assets/l200.jpg'
import accordImage from './../../assets/accord.jpg'
import cobaltImage from './../../assets/cobalt.jpg'
import stradaImage from './../../assets/strada2013.jpg'

const slides = [
    {
        name: 'Civic Si',
        year: '2016',
        km: '120.000',
        description:' 16V Aspirado 206cv Manual',
        location: 'São Paulo - SP',
        price: '67.999',
        brand:'Honda',
        id: 'usedCar1',
        src: civicSiImage
    },

    {
        name: 'Voyage',
        year: '2012/2013',
        km: '55.000',
        description:'1.6 78cv Manual',
        location: 'São Paulo - SP',
        price: '37.999',
        brand:'Volkswangen',
        id: 'usedCar4',
        src: voyageImage
    },

    {
        name: 'Onix',
        year: '2020',
        km: '34.000',
        description:'1.0 Turbo 120cv Manual',
        location: 'Ribeirão Preto - SP',
        price: '87.999',
        brand:'Chevrolet',
        id: 'usedCar5',
        src: onixImage
    },

    {
        name: 'Gol Trend',
        year: '2013',
        km: '144.000',
        description:'1.0 Aspirado 81cv Manual',
        location: 'São Paulo - SP',
        price: '25.800',
        brand:'Volkswagen',
        id: 'usedCar6',
        src: golImage
    },

    {
        name: 'Polo Tsi',
        year: '2016',
        km: '40.000',
        description:'1.8 Aspirado 180cv Automático',
        location: 'São Paulo - SP',
        price: '67.299',
        brand:'Volkswagen',
        id: 'usedCar7',
        src: poloImage
    },

    {
        name: 'L200 Triton',
        year: '2015',
        km: '160.000',
        description:'3.2 270cv Automático 65kg torque',
        location: 'Ribeirão Preto - SP',
        price: '137.999',
        brand:'Mitsubishi',
        id: 'usedCar8',
        src: l200Image
    },

    {
        name: 'Honda Accord',
        year: '2015/2016',
        km: '87.000',
        description:'2.6 16V 266cv Automático',
        location: 'Rio de Janeiro - RJ',
        price: '167.999',
        brand:'Honda',
        id: 'usedCar9',
        src: accordImage
    },

    {
        name: 'Cobalt',
        year: '2016',
        km: '59.000',
        description:'1.6 150cv Manual',
        location: 'São Paulo - SP',
        price: '47.999',
        brand:'Chevrolet',
        id: 'usedCar10',
        src: cobaltImage
    },

    {
        name: 'Strada',
        year: '2013',
        km: '190.000',
        description:'1.4 110cv Aspirado Manual',
        location: 'São Paulo - SP',
        price: '37.999',
        brand:'Fiat',
        id: 'usedCar11',
        src: stradaImage
    }
]

export default function UsedCarsSlide () {
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
        if (activeSlide < slides.length - 7) {
            setActive(activeSlide + 1);
        }
    };

    return (
        <section className={styles.slideContainer}>
            <div className={styles.slideItems} style={{transform: `translateX(${position}px)`}}>
                {
                    slides.map((slide) => {
                        return  (
                            <div ref={slideRef} className={styles.slideItem}>
                                    <img src={slide.src} alt="headerimage"/>

                                    <h3>{slide.name}</h3>
                                    <p>{slide.description}</p>

                                    <strong>R$ {slide.price}</strong>
                                    <span>
                                        <small>{slide.year}</small>
                                        <small>{slide.km}</small>
                                    </span>

                                    <div className="location">
                                        <i className="material-icons">room</i>
                                        <small>{slide.location}</small>
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