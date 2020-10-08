import React from 'react';
import {
    service,
    feature1,
    feature2,
} from '../Assets';

const Service = () => {
    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                <div style={styles.title}>
                    Our Services
                </div>
                <div style={styles.serviceWrapper}>
                    <div style={styles.imgWrap}>
                        <img src={service} alt='service' style={styles.serviceImg} />
                    </div>

                    {/* service 1 */}
                    <div style={styles.service1}>
                        <div style={{display:'flex'}}>
                            <div style={styles.icon1}>
                                <img src={feature1} alt='feature 1' height={35} />
                            </div>
                            <div>
                                Better Future
                            </div>
                        </div>
                        <div>
                            Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        paddingTop: '10rem',
        height: '120vh',
        // border: '1px solid black',
    },
    wrapper: {
        justifyContent: 'center',
        width: '100vw',
        marginTop: '-5rem',
        // border: '1px solid black',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        fontSize: '3rem',
        fontWeight: '600',
        height: '5rem',
        // border: '1px solid black',
    },
    serviceWrapper: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100vw',
        border: '1px solid black',
    },
    imgWrap: {
        marginTop: '10rem',
        display: 'flex',
        justifyContent: 'center',
    },
    serviceImg: {
        imageRendering: 'pixelated',
        display: 'flex',
        height: '400px',
        width: '400px',
        border: '1px solid black',
    },
    service1: {
        width: '20vw',
        height: '25vh',
        position: 'absolute',
        left: '5rem',
        // top: '0rem',
        border: '1px solid black',
    },
};

export default Service;
