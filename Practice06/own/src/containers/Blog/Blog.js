import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Posts from "./Posts/Posts";
import PostRender from "./Posts/PostRender";
import Header from "./Headers/Header";
import Home from "./Home/Home";
import Authors from "./Authors/Authours"

export default class Blog extends Component {
    render() {
        return (
            <div>

                <Header></Header>
                <button>
                    <NavLink to="/home">Home</NavLink>
                </button>
                <button>
                    <NavLink to="/posts">Posts</NavLink>
                </button>
                <button>
                    <NavLink to="/authors">Authors</NavLink>
                </button>
                <hr />
                <Switch>
                    <Route exact path="/posts" component={Posts} />
                    <Route path="/posts/:id?" component={PostRender} />
                    <Route path="/home" component = {Home} />
                    <Route path="/authors" component = {Authors} />
                    <Redirect from="/home" to="/" />
                </Switch>

                <footer id="footer">
				<div class="container">
					<ul class="icons">
						<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
						<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
						<li><a href="#" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
					</ul>
				</div>
				<div class="copyright">
					&copy; Untitled. All rights reserved.
				</div>
			</footer>   
            </div>
        );
    }
}
