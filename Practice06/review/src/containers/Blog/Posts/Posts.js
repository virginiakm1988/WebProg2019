import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Posts extends Component {
    render() {
        const postIDs = ["1", "2", "3", "4", "5"];
        const lists = postIDs.map((i, index) => (
            <li key={index}>
                <NavLink to={"/activities/" + i}>Activities #{i}</NavLink>
            </li>
        ));


        const style ={
            textAlign:'center',
            font: 'inherit',

        }


        return (

           
            <div>
                <header className = "blank">
                </header>
                <div style={style}>
                    <h3 style={{backgroundColor:'blue'}} >Click to view activities </h3>
                    {lists}
                </div> 
            </div>
        );
    }
}
