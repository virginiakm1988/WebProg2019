import React, { Component } from "react";
import { Nav, NavItem, NavLink } from 'react';
import '../../../style/assets/css/main.css';
import slide01 from "../../../style/images/slide01.jpg"
import slide02 from "../../../style/images/slide02.jpg"
import slide03 from "../../../style/images/slide03.jpg"
import slide04 from "../../../style/images/slide04.jpg"
import slide05 from "../../../style/images/slide05.jpg"
import image01 from"../../../style/images/pic01.jpg";
import image02 from"../../../style/images/pic02.jpg";
import image03 from"../../../style/images/pic03.jpg";

export default class Home extends Component {
    render() {
        return (
            <div>
               
               <section id="one" class="wrapper style2">
				<div class="inner">
					<div class="grid-style">

						<div>
							<div class="box">
								<div class="image fit">
									<img src={image01} alt="" />
								</div>
								<div class="content">
									<header class="align-center">
										<p>What is this website about?</p>
										<h2>Han for President!</h2>
									</header>
									<p>Truthful, loyal and actually cares for the people.We support Han to run for the President of Taiwan, the republic of China. We all hope for a better place, a better country, and a better tomorrow.
                                         (Hopefully we can still use Facebook, Youtube and Twitter once we all became chinese)
                                         (I hope that they dont ban reddit!)

                                         click the button below, and join us!
                                         </p>
									<footer class="align-center">
										<a href="https://www.facebook.com/groups/260112827997606/?epa=SEARCH_BOX" class="button alt">Learn More</a>
									</footer>
								</div>
							</div>
						</div>

						<div>
							<div class="box">
								<div class="image fit">
									<img src={image02} alt="" />
								</div>
								<div class="content">
									<header class="align-center">
										<p>Nah Im just kidding.
                                            I bet you cant join the Facebook group anyways LOL
                                        </p>
										<h2>Why are all black man fast?</h2>
									</header>
									<p>The slow ones are in prison.
                                        #BlackLifeMatter 
                                    </p>
                                    <p>           
                                        Why are black guys so good at basketball?
                                        Because it requires running, shooting and stealing.
                                        
                                        ###disclaimer: I DO NOT support racist, if this offend you Im deeply sorry. I just still dont know what to post, and Im kinda stressed bc of the midterm therefore I went on reddit and search for mean Jokes:(                     </p>
									<footer class="align-center">
										<a href="#" class="button alt">Learn More</a>
									</footer>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
                
                
                
            </div>
        );
    }
}