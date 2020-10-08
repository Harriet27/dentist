import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../Assets';

const Header = () => {
    return (
        <div style={styles.container}>
            <div style={styles.wrapper}>
                <div style={styles.menuWrapper}>
                    <div style={styles.logo}>
                        <img src={logo} alt='logo' height={25} />
                    </div>
                    <div style={styles.content}>
                        <Link to='/' style={styles.link}>
                            <p style={styles.text}>Home</p>
                        </Link>
                    </div>
                    <div style={styles.content}>
                        <Link to='/' style={styles.link}>
                            <p style={styles.text}>About</p>
                        </Link>
                    </div>
                    <div style={styles.content}>
                        <Link to='/' style={styles.link}>
                            <p style={styles.text}>Department</p>
                        </Link>
                    </div>
                    <div style={styles.content}>
                        <Link to='/' style={styles.link}>
                            <p style={styles.text}>FAQ</p>
                        </Link>
                    </div>
                    <div style={styles.content}>
                        <Link to='/' style={styles.link}>
                            <p style={styles.text}>Contact Us</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: '100vw',
        height: '13.5vh',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        boxShadow: '0 4px 15px -10px black',
        backgroundColor: '#FFF',
        zIndex: '1000',
    },
    wrapper: {
        display: 'flex',
        padding: '1.5rem 0rem',
    },
    logo: {
        marginRight: '30rem',
    },
    menuWrapper: {
        display: 'flex',
    },
    content: {
        height: '2.2rem',
        padding: '0rem 0.6rem',
        margin: '0rem 0.8rem',
    },
    text: {
        fontSize: '1rem',
        fontWeight: '600',
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    },
};

export default Header;
