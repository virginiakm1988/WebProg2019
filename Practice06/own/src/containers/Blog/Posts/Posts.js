import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../../../style/assets/css/main.css';

export default class Posts extends Component {
    render() {
        const postIDs = ["1","2", "3","4", "5"];
        const lists = postIDs.map((i, index) => (
            <li key={index}>
                <NavLink to={"/posts/" + i}>Posts #{i}</NavLink>
            </li>
        ));
        return (


            <section id="two" class="wrapper style3">
				<div class="inner">
					<header class="align-center">
						<p>all the articles shows here, click here to explore more!</p>
						<h2>Posts</h2>
                        <div>
                            <h3>Click to view article ---</h3>
                            {lists}
                        </div>
					</header>
				</div>
			</section>

            
        );
    }
}
