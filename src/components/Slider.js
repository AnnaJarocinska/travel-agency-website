import React from 'react';
import { Component } from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import '../styles/slider.css';

const slides = [
    {
        id: 0,
        image: image1,
        h1: 'Kanada',
        h2: 'Przelot, noclegi i samochód już od',
        span: '4500zł',
        class: 'squere',
    },
    {
        id: 1,
        image: image2,
        h1: 'Japonia',
        h2: '3 tygodnie w Kraju Kwitnącej Wiśni',
        span: '15000zł',
        class: 'squere',
    },
    {
        id: 2,
        image: image3,
        h1: 'Wietnam',
        h2: 'Przelot, hotel i skuter - 3 tygodnie za ',
        span: '10000zł',
        class: 'squere',
    },
    {
        id: 3,
        image: image4,
        h1: 'Grecja',
        h2: 'Idealne wakacje już od ',
        span: '800zł',
        class: 'squere',
    },
    {
        id: 4,
        image: image5,
        h1: 'Islandia',
        h2: 'Zorza polarna i gorące źródła! 2 tygodnie za',
        span: '8000zł',
        class: 'squere',
    }
]

class Slider extends Component {
    state = {
        changeSlideTime: 2000,
        activeSlideIndex: 0,
    }


    changeSlide = () => {
        if (this.state.activeSlideIndex === 0) {
            slides[0].class = "squere active";
            slides[slides.length - 1].class = "squere";
        }

        else {
            slides[this.state.activeSlideIndex].class = "squere active";
            slides[this.state.activeSlideIndex - 1].class = "squere"
        }


        if (this.state.activeSlideIndex === slides.length - 1) {
            this.setState({
                activeSlideIndex: 0,
            });
        }

        else {
            this.setState(prevState => {
                return {
                    activeSlideIndex: prevState.activeSlideIndex + 1,
                };
            });
        } 
    }


    handleSquereClick = (id) => {
        window.clearInterval(this.sliderIntervalId);

        this.setState(prevState => {
            return {
                activeSlideIndex: id,
            };
        });

        this.sliderIntervalId = window.setInterval(this.changeSlide.bind(this), this.state.changeSlideTime)

        this.setState(prevState => {
            return {
                classActive: !prevState.classActive,
            };
        })
    }

    componentDidMount() {
        this.sliderIntervalId = window.setInterval(this.changeSlide.bind(this), this.state.changeSlideTime)
    }

    componentWillUnmount() {
        window.clearInterval(this.sliderIntervalId);
    }

    render() {
        return (

            <div className="slider">
                <img className="slider__img" src={slides[this.state.activeSlideIndex].image} alt="slide"></img>
                <div className="slider__title">
                <h1 className="slider__h1">{slides[this.state.activeSlideIndex].h1}</h1>
                <h2 className="slider__h2">{slides[this.state.activeSlideIndex].h2} <span>{slides[this.state.activeSlideIndex].span} </span> </h2>
               </div>
                <div className="slider__squeres"> {slides.map((squere, id) => (
                    <div className=
                    {this.state.activeSlideIndex === id ? "squere active" : "squere"}
                     key={squere.h1} id={id} onClick={(e) => this.handleSquereClick(id, e)}>
                    </div>))} </div>
            </div>
        );
    }
}


export default Slider;