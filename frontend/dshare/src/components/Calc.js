import React, { useState } from "react"
import Profile from "./Profiles"

export default function (user1, user2) {
    let total = 0;
    const user1Times = {
        profile: Profile(user1),
        monTime: Profile(user1).schedule[0].split(','),
        tuesTime: Profile(user1).schedule[1].split(','),  
        wedTime: Profile(user1).schedule[2].split(','), 
        thursTime: Profile(user1).schedule[3].split(','), 
        friTime: Profile(user1).schedule[4].split(','), 
    };
    const user2Times = {
        profile: Profile(user2),
        monTime: Profile(user2).schedule[0].split(','),
        tuesTime: Profile(user2).schedule[1].split(','),  
        wedTime: Profile(user2).schedule[2].split(','), 
        thursTime: Profile(user2).schedule[3].split(','), 
        friTime: Profile(user2).schedule[4].split(','), 
    };
    
    total += Math.abs(convert(user1Times.monTime[0]) - convert(user2Times.monTime[0])) + Math.abs(convert(user1Times.monTime[1]) - convert(user2Times.monTime[1]));
    total += Math.abs(convert(user1Times.tuesTime[0]) - convert(user2Times.tuesTime[0])) + Math.abs(convert(user1Times.tuesTime[1]) - convert(user2Times.tuesTime[1]));
    total += Math.abs(convert(user1Times.wedTime[0]) - convert(user2Times.wedTime[0])) + Math.abs(convert(user1Times.wedTime[1]) - convert(user2Times.wedTime[1]));
    total += Math.abs(convert(user1Times.thursTime[0]) - convert(user2Times.thursTime[0])) + Math.abs(convert(user1Times.thursTime[1]) - convert(user2Times.thursTime[1]));
    total += Math.abs(convert(user1Times.friTime[0]) - convert(user2Times.friTime[0])) + Math.abs(convert(user1Times.friTime[1]) - convert(user2Times.friTime[1]));

    return total;
}

function convert(time){
    let timeSplit = time.split(':');

    let total = Number(timeSplit[0]) * 100;

    if(timeSplit[1][2] === 'p' && total !== 1200){
        total += 1200;
        let time2 = timeSplit[1].split('p');
        total += (Number(time2) / 60) * 100;

    }else{
        let time2 = timeSplit[1].split('a');
        total += (Number(time2) / 60) * 100;
    }

    return 0;
}
