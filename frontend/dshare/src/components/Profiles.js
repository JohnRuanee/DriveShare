import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


function Profile(username) {
    const [data, setdata] = useState({
        username: "",
        name: "",
        pfp: "",
        type: "",
        vehicle: "",
        location: "",
        phonenumber: "",
        snapchat: "",
        schedule: [],
    });

    useEffect(() => {
        fetch("/profile/" + username).then((res) =>
        res.json().then((data) =>{
            setdata({
                username: data.userName,
                name: data.realName,
                pfp: data.profliePic,
                type: data.userType,
                vehicle: data.vehicle,
                location: data.location,
                phonenumber: data.phoneNumber,
                snapchat: data.snapchat,
                schedule: data.time,
                });
            })
        );
    }, []);

    return (
        // <div className="Profile">
        //     <header className="Profile-header">
        //         <h1>React and flask</h1>
        //         {/* Calling a data from setdata for showing */}
        //         <p>{data.username}</p>
        //         <p>{data.name}</p>
        //         <p>{data.pfp}</p>
        //         <p>{data.type}</p>
        //         <p>{data.vehicle}</p>
        //         <p>{data.location}</p>
        //         <p>{data.phonenumber}</p>
        //         <p>{data.snapchat}</p>
        //         <p>{data.schedule}</p>
  
        //     </header>
        // </div>

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

            <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                style={{ backgroundColor: '#efefef' }}>
                <div>
                <p className="small text-muted mb-1">Articles</p>
                <p className="mb-0">41</p>
                </div>
                <div className="px-3">
                <p className="small text-muted mb-1">Followers</p>
                <p className="mb-0">976</p>
                </div>
                <div>
                <p className="small text-muted mb-1">Rating</p>
                <p className="mb-0">8.5</p>
                </div>
            </div>
            <div className="d-flex pt-1">
                <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                <MDBBtn className="flex-grow-1">Follow</MDBBtn>
            </div>
            </div>
        </div>
        </MDBCardBody>
        </MDBCard>
    );
}