import React from 'react';
import {
    about,
    topService,
    banner1,
    banner2,
    banner3,
} from '../Assets';

const About = () => {
    return (
        <div style={styles.container}>
            <img src={about} alt='about' style={styles.aboutImg} />
            <img src={topService} alt='about' style={styles.serviceImg} />
            <div style={styles.aboutWrapper}>
                <div style={styles.title}>
                    About Us
                </div>
                <div style={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra maecenas accumsan lacus vel
                </div>
                <div style={styles.bannerWrapper}>
                    <div style={styles.banner1}>
                        <img src={banner1} alt='banner1' height={50} />
                        <div style={styles.caption}>
                            Emergency
                        </div>
                    </div>
                    <div style={styles.banner2}>
                        <img src={banner2} alt='banner2' height={50} />
                        <div style={styles.caption}>
                            Appointment
                        </div>
                    </div>
                    <div style={styles.banner3}>
                        <img src={banner3} alt='banner3' height={50} />
                        <div style={styles.caption}>
                            Qualified
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'inline-flex',
        height: '90vh',
        // marginBottom: '5rem',
    },
    aboutImg: {
        imageRendering: 'pixelated',
        display: 'flex',
        position: 'absolute',
        width: '50vw',
        top: '65rem',
    },
    serviceImg: {
        imageRendering: 'pixelated',
        display: 'flex',
        position: 'absolute',
        width: '40vw',
        top: '69rem',
        left: '5rem',
    },
    aboutWrapper: {
        position: 'absolute',
        width: '30vw',
        top: '75rem',
        left: '50rem',
    },
    title: {
        fontSize: '3rem',
        fontWeight: '500',
        marginBottom: '1rem',
    },
    subtitle: {
        fontSize: '1rem',
    },
    bannerWrapper: {
        imageRendering: 'pixelated',
        position: 'absolute',
        display: 'flex',
        top: '14rem',
        left: '-3rem',
    },
    banner1: {
        padding: '1.2rem 3rem 1.2rem 3rem',
        borderRight: '0.1px solid grey',
        textAlign: 'center',
    },
    banner2: {
        padding: '1.2rem 3rem 1.2rem 3rem',
        borderRight: '0.1px solid grey',
        textAlign: 'center',
    },
    banner3: {
        padding: '1.2rem 3rem 1.2rem 3rem',
        textAlign: 'center',
    },
    caption: {
        marginTop: '1rem',
        fontSize: '0.9rem',
    },
};

export default About;
