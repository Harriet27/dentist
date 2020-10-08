import React, { useEffect } from 'react';
import {
    Header,
    Jumbotron,
    About,
    Service,
} from '../Components';
import { topBtn } from '../Assets';

const Home = () => {
    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        document.title = "Klinik Mata Serpong";
    });

    return (
        <div>
            <Header />
            <Jumbotron />
            <About />
            <Service />
            {/* <img src={topBtn} alt='top button' height={50} style={styles.button} onClick={handleScroll} /> */}
        </div>
    );
};

const styles = {
    button: {
        position: 'fixed',
        left: '93.5vw',
        top: '90vh',
        cursor: 'pointer',
    },
};

export default Home;
