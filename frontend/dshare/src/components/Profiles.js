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
        schedule: [],
    });

    useEffect(() => {
        // fetch("/profile/" + username).then((res) =>
        // res.json().then((data) =>{
        //     setdata({
        //         username: data.userName,
        //         name: data.realName,
        //         pfp: data.profliePic,
        //         type: data.userType,
        //         vehicle: data.vehicle,
        //         location: data.location,
        //         phonenumber: data.phoneNumber,
        //         snapchat: data.snapchat,
        //         schedule: data.time,
        //         });
        //     })
        // );
        setdata({
            username: 'John',
            name: 'Smith',
            pfp: 'https://pop.inquirer.net/files/2021/05/gigachad.jpg',
            type: 'driver',
            vehicle: '1998 Honda Civic',
            location: 'The Reserve at Clemson',
            phonenumber: '777-777-7777',
            snapchat: '@urmom',
            schedule: ['test'],
            });
    }, []);

    
        

            //console.log(data.username);
    

    return data;
}