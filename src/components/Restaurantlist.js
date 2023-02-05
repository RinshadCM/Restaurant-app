import React, { useState, useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurantlist() {


    const [allrestaurant, setAllrestaurant] = useState([])

    // Function to api call for datas inside json file
    const getrestaurantdata = async () => {
        await fetch('/restaurants.json').then(data => data.json()).then(result => {
            // console.log(result);
            setAllrestaurant(result.restaurants)
        })

    }

    console.log(allrestaurant);

    useEffect(() => {
        getrestaurantdata()
    }, [])








    return (

        <Row>
            {
                allrestaurant.map(item => (
                    <RestCard data={item}></RestCard>
                ))
            }
        </Row>
    )

}

export default Restaurantlist