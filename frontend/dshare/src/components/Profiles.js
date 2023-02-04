import React, { useEffect } from "react"

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
        <div className="Profile">
            <header className="Profile-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.username}</p>
                <p>{data.name}</p>
                <p>{data.pfp}</p>
                <p>{data.type}</p>
                <p>{data.vehicle}</p>
                <p>{data.location}</p>
                <p>{data.phonenumber}</p>
                <p>{data.snapchat}</p>
                <p>{data.schedule}</p>
  
            </header>
        </div>
    );
}