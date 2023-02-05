import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from "mdb-react-ui-kit";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from "react-router-dom";

function RestCard({ data }) {
    return (
        <Col className="p-4" sm={12} md={6} lg={4} xl={3}>
            <Link to={`view-restaurant/${data.id}`}>
                <MDBContainer fluid className="my-5 text-center">
                    <MDBCol className="mb-4">
                        <MDBCard>
                            <MDBRipple
                                rippleColor="light"
                                rippleTag="div"
                                className="bg-image rounded hover-zoom"
                            >
                                <MDBCardImage
                                    src={data.photograph}
                                    fluid
                                    className="w-100 text-center"
                                />
                                <a href="#!">
                                    <div className="mask">
                                    </div>
                                    <div className="hover-overlay">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                        ></div>
                                    </div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody>
                                <a href="#!" className="text-reset">
                                    <h5 className="card-title mb-3">{data.name}</h5>
                                </a>
                                <a href="#!" className="text-reset">
                                    <p>{data.neighborhood}</p>
                                </a>
                                <h6 className="mb-3">&#8982; {data.address}</h6>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBContainer>
            </Link>
        </Col>
    )
}

export default RestCard