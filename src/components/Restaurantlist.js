import React, { useState, useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../actions/restuarantAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Restaurantlist() {



    const dispatch= useDispatch()
    const result=useSelector(state=>state.restaurantReducer)
    const {restaurantList}=result
    useEffect(() => {
        dispatch(RestaurantListAction())
        // getrestaurantdata()
    }, [])



    return (

        

        <Row>
            {
                restaurantList.map(item => (
                    <RestCard data={item}></RestCard>
                ))
            }
        </Row>
    )

}

export default Restaurantlist