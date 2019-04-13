import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Posts from "./Posts/Posts";
import PostRender from "./Posts/PostRender";
import Header from "./Headers/Header";
import Home from "./Home/Home";

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
                    <Redirect from="/home" to="/" />
                </Switch>
            </div>
        );
    }
}
