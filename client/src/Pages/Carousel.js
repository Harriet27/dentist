import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import {
    MondayTable,
    TuesdayTable,
    WednesdayTable,
    ThursdayTable,
    FridayTable,
    SaturdayTable,
    SundayTable,
} from '../Tables';

const CarouselPage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={styles.container}>
            <div style={styles.buttonDiv}>
                <Link to='/welcome'>
                    <Button>Back to Home</Button>
                </Link>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <MondayTable />
                </Carousel.Item>
                <Carousel.Item>
                    <TuesdayTable />
                </Carousel.Item>
                <Carousel.Item>
                    <WednesdayTable />
                </Carousel.Item>
                <Carousel.Item>
                    <ThursdayTable />
                </Carousel.Item>
                <Carousel.Item>
                    <FridayTable />
                </Carousel.Item>
                <Carousel.Item>
                    <SaturdayTable />
                </Carousel.Item>
                <Carousel.Item>
                    <SundayTable />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: 'white',
    },
    buttonDiv: {
        padding: '1rem 0rem 0rem 0rem',
        display: 'flex',
        justifyContent: 'center',
    },
};

export default CarouselPage;
