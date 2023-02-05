import React from 'react';
import Profile from "./Profiles"


export default function DisplayCard() {
  
  return (
    <MDBContainer>
    <MDBRow className="justify-content-center">
    <MDBCol md="9" lg="7" xl="5" className="mt-5">
        <MDBCard style={{ borderRadius: '15px' }}>
            <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                    <MDBCardImage
                        style={{ width: '180px', borderRadius: '10px' }}
                        src= {data.pfp}
                        alt='profile picture'
                        fluid />
                    </div>
                    <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>data.name</MDBCardTitle>
                    <MDBCardText>data.type</MDBCardText>
                    <MDBCardText>data.location</MDBCardText>
                    <MDBCardText>data.vehicle</MDBCardText>

                    </div>
                </div>
            </MDBCardBody>
        </MDBCard>
    </MDBCol>
    </MDBRow>
</MDBContainer>
  );
}