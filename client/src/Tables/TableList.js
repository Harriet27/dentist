import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const TableList = () => {
    return (
        <div>
            <div style={styles.title}>
                Time Table List :)
            </div>
            <div style={styles.buttonWrapper}>
                <div style={styles.buttons}>
                    <Link to='/monday'>
                        <Button color='primary' style={styles.dayButton}>
                            Monday
                        </Button>
                    </Link>
                </div>
                <div style={styles.buttons}>
                    <Link to='/tuesday'>
                        <Button color='primary' style={styles.dayButton}>
                            Tuesday
                        </Button>
                    </Link>
                </div>
                <div style={styles.buttons}>
                    <Link to='/wednesday'>
                        <Button color='primary' style={styles.dayButton}>
                            Wednesday
                        </Button>
                    </Link>
                </div>
                <div style={styles.buttons}>
                    <Link to='/thursday'>
                        <Button color='primary' style={styles.dayButton}>
                            Thursday
                        </Button>
                    </Link>
                </div>
                <div style={styles.buttons}>
                    <Link to='/friday'>
                        <Button color='primary' style={styles.dayButton}>
                            Friday
                        </Button>
                    </Link>
                </div>
                <div style={styles.buttons}>
                    <Link to='/saturday'>
                        <Button color='primary' style={styles.dayButton}>
                            Saturday
                        </Button>
                    </Link>
                </div>
                <div style={styles.buttons}>
                    <Link to='/sunday'>
                        <Button color='primary' style={styles.dayButton}>
                            Sunday
                        </Button>
                    </Link>
                </div>
            </div>
            <div style={styles.buttonWrapper}>
                <div style={styles.buttons}>
                    <Link to='/welcome'>
                        <Button color='secondary' style={styles.homeButton}>
                            Back to Welcome Page
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
        marginTop: '5vh',
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
    homeButton: {
        width: '8rem',
        borderRadius: '25px',
    },
};

export default TableList;
