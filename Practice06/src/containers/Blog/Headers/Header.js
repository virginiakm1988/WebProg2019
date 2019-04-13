import React, { Component } from "react";
import { Nav, NavItem, NavLink } from 'react';
import '../../../style/assets/css/main.css';
import slide01 from "../../../style/images/slide01.jpg"

export default class Header extends Component {
    render() {
        return (
            <div>
              <img src={slide01} alt="" />
              <div className="inner">
                  <header>
                  <h1>Welcome to my webpage</h1>
                  </header>
              </div>
          </div>
        );
    }
}