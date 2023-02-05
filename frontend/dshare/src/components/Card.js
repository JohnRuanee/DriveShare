import React from 'react';
import Profile from "./Profiles"
import 'bootstrap/dist/css/bootstrap.css'
import ListGroup from 'react-bootstrap/ListGroup'
import { MDBListGroupItem, MDBListGroup, MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTooltip } from 'mdb-react-ui-kit';


export default function(username) {
  const profile = Profile(username);
  var monTimes = profile.schedule[0].split(',');
  var tueTimes = profile.schedule[1].split(',');
  var wedTimes = profile.schedule[2].split(',');
  var thuTimes = profile.schedule[3].split(',');
  var friTimes = profile.schedule[4].split(',');


    
    
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
                    style={{ width: '140px', maxHeight: '140px', maxWidth: '140px', minHeight: '140px', minWidth: '140px', borderRadius: '10px', overflow: 'hidden' }}
                    src={profile.pfp}
                    alt='profile picture'
                    fluid />
                    
                </div>
                
                <div className="flex-grow-1 ms-3">
                  <MDBCardTitle>{profile.name}</MDBCardTitle>
                  <MDBCardTitle>{profile.type}</MDBCardTitle>
                  <MDBCardText>{profile.location}</MDBCardText>
                  
                  <MDBCardText>{profile.phonenumber}</MDBCardText>

                  

                  {['sm'].map((breakpoint) => (
      <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
        <ListGroup.Item>Mon Tue Wed Thu Fri</ListGroup.Item>
        <ListGroup.Item>{monTimes[0]} {tueTimes[0]} {wedTimes[0]} {thuTimes[0]} {friTimes[0]}</ListGroup.Item>
        <ListGroup.Item>{monTimes[1]} {tueTimes[1]} {wedTimes[1]} {thuTimes[1]} {friTimes[1]}</ListGroup.Item>
      </ListGroup>
    ))}
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