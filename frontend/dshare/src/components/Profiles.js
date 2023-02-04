import React, { useEffect } from "react"

function Profile() {
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
        fetch("/data").then((res) =>
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
}