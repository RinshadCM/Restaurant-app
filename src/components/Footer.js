import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';


function Footer() {
    return (
        <div>
            <footer>
                <MDBFooter className='text-center text-white bg-primary'>
                    <MDBContainer className='p-4 pb-0'>
                        <section className=''>
                            <p className='d-flex justify-content-center align-items-center'>
                                <span className='me-3'>Register for free</span>
                                <MDBBtn type='button' outline color="light" rounded>
                                    Sign up!
                                </MDBBtn>
                            </p>
                        </section>
                    </MDBContainer>

                    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2023 Copyright:
                        <a className='text-white' href=''>
                            riokitchen.com
                        </a>
                    </div>
                </MDBFooter>
            </footer>
        </div>
    )
}

export default Footer