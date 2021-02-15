import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Typing from 'react-typing-animation';
import '../style/hero.css';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false,
            isMobile: false
        };
    }

    componentDidMount() {
        if (window.innerWidth > 769) {
            this.setState({ isDesktop: true})
            this.setState({ isMobile: false})
        } else {
            this.setState({ isDesktop: false})
            this.setState({ isMobile: true})
        }
    }

    render() {
        return (
            <section id="hero" className="jumbotron">
                <Container>
                    <Fade left={this.state.isDesktop} bottom={this.state.isMobile} duration={1000} delay={500} distance="30px">
                        <h1 className="hero-title">
                            {"Bonjour, je m'appelle"}{' '}
                            <span className="hero-color-main">{'Thibaut GRAVEY'}</span>
                            <br />
                            {"Et voici une présentation de "}{' '}
                            <span className="hero-color-main">{'mon PPH'}</span>
                        </h1>
                        <h2 className="hero-subtitle">
                            <Typing>
                                <Typing.Delay ms={500}/>
                                {"Ingénieur en informatique à l'INSA de Lyon,"}
                                <br/>
                                <Typing.Delay ms={400}/>
                                {"Sportif depuis très jeune,"}
                                <Typing.Delay ms={400}/>
                                <Typing.Backspace count={26} />
                                {"Coach depuis peu,"}
                                <Typing.Delay ms={400}/>
                                <Typing.Backspace count={17} />
                                {"Amoureux du Basket-Ball."}
                                <br/>
                                <br/>
                                <Typing.Delay ms={400}/>
                                <span className="hero-color-main">
                                    {"J'ai voulu m'interroger sur..."}
                                    <Typing.Delay ms={400}/>
                                    <Typing.Backspace count={30} />
                                    {"Le Machine Learning, un atout ou une autosuffisance pour le coaching sportif ?"}
                                </span>
                            </Typing>
                        </h2>
                    </Fade>
                </Container>
            </section>
        );
    }
}

export default Hero;