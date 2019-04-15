import React, { Component } from "react";

import Post from "../../../components/Post/Post";

export default class PostRender extends Component {
    render() {
        const postIDs = ["1", "2", "3", "4", "5"];
        //  “Destructuring Assignment” 用法
        const { id } = this.props.match.params;
        // 把右邊object assign 給左邊
        return id && postIDs.includes(id) ? (
            <Post id={id}/>
        ) : (
            <div>

                <header className = "blank">
                </header>
                <h3>Error: Activities #{id} NOT FOUND</h3>
            </div>
        );
    }
}
