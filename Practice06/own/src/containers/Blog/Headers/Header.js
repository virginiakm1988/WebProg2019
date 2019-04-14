import React, { Component } from "react";
import { Nav, NavItem, NavLink } from 'react';
import '../../../style/assets/css/main.css';
import slide01 from "../../../style/images/slide01.jpg";
import image01 from"../../../style/images/pic03.jpg";

export default class Header extends Component {
    render() {
        return (
            <div>
              <img src={image01} alt="" />
              <div className="inner">
                  <header class="align-center">
                  <h2>Welcome to my webpage</h2>
                  </header>
              </div>

          </div>
        );
    }
}