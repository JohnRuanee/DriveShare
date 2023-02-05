import React from "react"
import Profile from "./Profiles"
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTooltip } from 'mdb-react-ui-kit';

export default function (props) {
    const profile = Profile('test');


    return (
        <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src={profile.pfp}
                      alt='profile picture'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{profile.name}</MDBCardTitle>
                    <MDBCardText>{profile.type}</MDBCardText>
                    <MDBCardText>{profile.location}</MDBCardText>
                    <MDBCardText>{profile.vehicle}</MDBCardText>
                  </div>
                  <div style={{ display: "flex" }}>
                        <MDBTooltip placement="top">
                                    <MDBBtn onClick={() => { alert("ssss") }}>Tooltip on top</MDBBtn>
                            <div>Tooltip on top</div>
                        </MDBTooltip>
                    </div>
                    </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    );
}