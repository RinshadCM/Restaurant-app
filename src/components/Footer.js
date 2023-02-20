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
                            <p className='text-center mt-3' style={{ fontSize: '1.5rem' }}>
                                "Food is not just fuel, it's information. It talks to your DNA and tells it what to do." - Dr. R.W. Todd
                            </p>
                        </section>
                    </MDBContainer>

                    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2023 Copyright:
                        <a className='text-white' href=''>
                        &#160;www.rinshad.com
                        </a>
                    </div>
                </MDBFooter>
            </footer>
        </div>
    )
}

export default Footer
