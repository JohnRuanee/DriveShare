import React, { useEffect, useState } from "react";



export default function Profile(username) {
    const [data, setdata] = useState({
        username: "",
        name: "",
        pfp: "",
        type: "",
        vehicle: "",
        location: "",
        phonenumber: "",
        snapchat: "",
        schedule: ['1:00am,0:00pm','1:00am,0:00pm','1:00am,0:00pm','1:00am,0:00pm','1:00am,0:00pm'],
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

    

    
        

            //console.log(data.username);
    

    return data;
}