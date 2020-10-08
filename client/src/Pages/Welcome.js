import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const TableList = () => {
    return (
        <div>
            <div style={styles.title}>
                Welcome :)
            </div>
            <div style={styles.buttonWrapper}>
                <div style={styles.buttons}>
                    <Link to='/list'>
                        <Button color='primary' style={styles.dayButton}>
                            Table List
                        </Button>
                    </Link>
                </div>
                <div style={styles.buttons}>
                    <Link to='/Carousel'>
                        <Button color='primary' style={styles.dayButton}>
                            Carousel
                        </Button>
                    </Link>
                </div>
                <div style={styles.buttons}>
                    <Link to='/'>
                        <Button color='secondary' style={styles.dayButton}>
                            Back to Landing Page
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const styles = {
    title: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '8vh',
        fontSize: '4.5rem',
        fontWeight: '500',
    },
    buttonWrapper: {
        display: 'column',
        justifyContent: 'center',
    },
    buttons: {
        marginTop: '0.8rem',
        display: 'flex',
        justifyContent: 'center',
    },
    dayButton: {
        width: '12rem',
        borderRadius: '25px',
    },
};

export default TableList;
