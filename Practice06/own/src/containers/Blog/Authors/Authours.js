import React, { Component } from "react";
import { Nav, NavItem, NavLink } from 'react';
import '../../../style/assets/css/main.css';
import slide01 from "../../../style/images/slide01.jpg";
import image01 from"../../../style/images/pic01.jpg";
import image02 from"../../../style/images/pic02.jpg";
import image03 from"../../../style/images/pic03.jpg";
import author01 from "../../../style/images/auther01.jpg"
import author02 from "../../../style/images/author01.jpeg"
import author03 from "../../../style/images/author03.jpeg"
import author04 from "../../../style/images/auther04.jpg"
import author05 from "../../../style/images/auther05.jpg"

export default class Header extends Component {
    render() {
        return (
            <div>
            
            
              <section id="three" class="wrapper style2">
				<div class="inner">
					<header class="align-center">
						<p class="special">Many special thanks to these evil, greedy people. Facts dont lie, people do.</p>
						<h2>The contributors</h2>
					</header>
					<div class="gallery">
						<div>
							<div class="image fit">
								<a href="#"><img src={author01} alt="" /></a>
							</div>
						</div>
						<div>
							<div class="image fit">
								<a href="#"><img src={author02}  alt="" /></a>
							</div>
						</div>
						<div>
							<div class="image fit">
								<a href="#"><img src={author03}  alt="" /></a>
							</div>
						</div>
						<div>
							<div class="image fit">
								<a href="#"><img src={author04}  alt="" /></a>
							</div>
						</div>
                        <div>
							<div class="image fit">
								<a href="#"><img src={author05}  alt="" /></a>
							</div>
						</div>
					</div>
				</div>
			</section>              
          </div>
        );
    }
}