import React from 'react';
import { Link } from 'react-router-dom';
import { banner_bg, banner_img } from '../Assets';

const Jumbotron = () => {
    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                <img src={banner_bg} alt='banner background' style={styles.bannerbg} />
                <img src={banner_img} alt='banner img' height={500} style={styles.bannerimg} />
                <div style={styles.textWrapper}>
                    <div style={styles.header}>
                        Klinik Mata Serpong
                    </div>
                    <div style={styles.subheader}>
                        We Are Here For Your Care
                    </div>
                    <div style={styles.view}>
                        <Link to='/welcome' style={styles.link}>
                            View Schedule &#10140;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'inline-flex',
    },
    wrapper: {
        display: 'flex',
    },
    bannerbg: {
        display: 'flex',
        imageRendering: 'pixelated',
        width: '100vw',
        height: '180%',
    },
    bannerimg: {
        display: 'flex',
        imageRendering: 'pixelated',
        position: 'absolute',
        top: '15rem',
        left: '35rem',
    },
    textWrapper: {
        position: 'absolute',
        top: '18rem',
        left: '8rem',
    },
    header: {
        fontSize: '2.5rem',
        fontWeight: '700',
    },
    subheader: {
        fontSize: '1rem',
    },
    view: {
        fontSize: '1.7rem',
        fontWeight: '600',
    },
    link: {
        textDecoration: 'none',
    },
};

export default Jumbotron;
