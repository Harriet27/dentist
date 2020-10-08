import React, { useEffect, useState } from 'react';
import { Button, Table, Input } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearFriday, createFriday, getFriday } from '../Redux/Actions/fridayAction';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const WednesdayTable = () => {
    const dispatch = useDispatch();

    const fridayList = useSelector((state) => state.friday.fridayList);

    const [update, setUpdate] = useState(false);
    const [toggle, setToggle] = useState(null);
    const [inputForm, setInputForm] = useState({
        name: '',
    });

    useEffect(() => {
        dispatch(getFriday());
        if (update) {
            setUpdate(false);
        }
    }, [dispatch, update]);

    const handleChange = (e) => {
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleCreate = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You can still edit this data later",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, create it!',
        }).then((res) => {
            if (res.value) {
                Swal.fire(
                    'Created!',
                    'Schedule has been created.',
                    'success',
                );
                dispatch(createFriday(id, inputForm));
                setUpdate(true);
                setToggle(null);
            }
        }).catch((err) => {
            console.log(err);
        })
    };

    const handleClear = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You can't revert this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, clear it!',
        }).then((res) => {
            if (res.value) {
                Swal.fire(
                    'Cleared!',
                    'Schedule has been cleared.',
                    'success',
                );
                dispatch(clearFriday(id));
                setUpdate(true);
            }
        }).catch((err) => {
            console.log(err);
        })
    };

    const renderTable = () => {
        return fridayList.map((val,index) => {
            if (toggle === val.id) {
                return (
                    <tr key={index}>
                        <td>{val.id}</td>
                        <td>{val.time}</td>
                        <td>
                            <Input type='text' name='name' defaultValue={val.name} onChange={handleChange} />
                        </td>
                        <td>
                            <Button outline color='secondary' onClick={() => setToggle(null)} style={styles.actButton}>
                                Cancel
                            </Button>
                        </td>
                        <td>
                            <Button outline color='success' onClick={() => handleCreate(val.id)} style={styles.actButton}>
                                Confirm
                            </Button>
                        </td>
                    </tr>
                );
            }
            else {
                return (
                    <tr key={index}>
                        <td>{val.id}</td>
                        <td>{val.time}</td>
                        <td>{val.name}</td>
                        <td>
                            <Button outline color='primary' onClick={() => setToggle(val.id)} style={styles.actButton}>
                                Create
                            </Button>
                        </td>
                        <td>
                            <Button outline color='danger' onClick={() => handleClear(val.id)} style={styles.actButton}>
                                Clear
                            </Button>
                        </td>
                    </tr>
                );
            }
        });
    };

    return (
        <div>
            <div style={styles.title}>
                Friday Time Table
            </div>
            <div style={styles.buttonWrap}>
                <Link to='/list'>
                    <Button color='info' style={styles.button}>
                        Back to Table List
                    </Button>
                </Link>
            </div>
            <div style={styles.table}>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Time</th>
                            <th>Name</th>
                            <th colSpan='2'>Button Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable()}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

const styles = {
    title: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2.5rem 0rem 0rem 0rem',
        fontSize: '2rem',
        fontWeight: '500',
    },
    buttonWrap: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1rem 0rem 1.5rem 0rem',
    },
    button: {
        borderRadius: '25px',
    },
    table: {
        margin: '0rem 8rem',
    },
    actButton: {
        borderRadius: '25px',
    },
};

export default WednesdayTable;
