import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ViewRest.css'
import Modal from 'react-bootstrap/Modal';
import { Button, Collapse } from 'react-bootstrap';
function ViewRest() {

    const params = useParams()
    const [allrestaurant, setAllrestaurant] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = useState(false);

    // Function to api call for datas inside json file
    const getrestaurantdata = async () => {
        await fetch('/restaurants.json').then(data => data.json()).then(result => {
            // console.log(result);
            setAllrestaurant(result.restaurants)
        })

    }

    const restData = allrestaurant.find(item => item.id == params.id)
    console.log(restData);

    useEffect(() => {
        getrestaurantdata()
    }, [])

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);



    return (
        <>
            {
                restData ? (

                    <div className="restaurant-details">
                        <img src={restData.photograph} />
                        <div className="restaurant-info text-center">
                            <h1>{restData.name}</h1>
                            <p>Address: {restData.address}</p>
                            <p>Cuisine: {restData.cuisine_type}</p>

                            <Button variant="primary" onClick={handleShow}>
                                Operating Hours
                            </Button>
                            <Modal show={showModal} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Operating Hours</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ul>
                                        {Object.entries(restData.operating_hours).map(
                                            ([day, hours]) => (
                                                <li key={day}>
                                                    {day}: {hours}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </Modal.Body>
                            </Modal>
                        </div>

                        <div className="reviews">
                            <h2>Reviews:</h2>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="reviews-collapse"
                                aria-expanded={open}
                            >
                                View Reviews
                            </Button>
                            <Collapse in={open}>
                                <div id="reviews-collapse">
                                    {restData.reviews.map(review => (
                                        <div key={review.name} className="review text-dark">
                                            <h4>{review.name} ({review.date})</h4>
                                            <p>Rating: {review.rating}</p>
                                            <p>{review.comments}</p>
                                        </div>
                                    ))}
                                </div>
                            </Collapse>
                        </div>

                    </div>




                ) : 'null'
            }
        </>
    )
}

export default ViewRest