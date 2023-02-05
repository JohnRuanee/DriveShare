import React from "react"
import Profile from "./Profiles"
import Calc from "./Calc"
import Card from "./Card"


export default function (props) {
    const profile = Profile('test');
    const profile2 = Profile('test2');

    return (
        Card('test')
    );
}