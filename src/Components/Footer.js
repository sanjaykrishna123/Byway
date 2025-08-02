import React from "react";
import './style.css';

import byway from '../assets/byway.png';
import {ReactComponent as Facebook} from '../assets/facebook.svg';
import {ReactComponent as Github} from '../assets/github.svg';
import {ReactComponent as Google} from '../assets/google.svg';
import {ReactComponent as Twitter} from '../assets/X.svg';
import {ReactComponent as Microsoft} from '../assets/microsoft.svg';

function Footer(){
    return(
        <footer>
            <section className="wrapper">
                <div className="rowContainer">
                    <h1 className="logo">
                        <a href="#">
                            <img alt="logo" src={byway} />
                        </a>
                    </h1>

                    <p>
                        Empowering learners through accessible and engaging online <br />
                        education. Byway is a leading online learning platform dedicated to <br />
                        providing high-quality, flexible, and affordable educational <br />
                        experiences.
                    </p>
                </div>

                <div className="rowContainer">
                    <h1>Get Help</h1>
                    <a href="#">Contact Us</a>
                    <a href="#">Latest Articles</a>
                    <a href="#">FAQ</a>
                </div>

                <div className="rowContainer">
                    <h1>Programs</h1>
                    <a href="#">Art & Design</a>
                    <a href="#">Business</a>
                    <a href="#">IT & Software</a>
                    <a href="#">Language</a>
                    <a href="#">Programming</a>
                </div>

                <div className="rowContainer">
                    <h1>Contact Us</h1>
                    <a href="#">Address: 123 Main Street, Anytown, CA 12345</a>
                    <a href="#">Tel: +(123) 456-7890</a>
                    <a href="#">Mail: bywayedu@webkul.in</a>

                    <div className="socialMediaContainer">
                        <a href="https://www.facebook.com/" target="blank">
                            <div className="iconContainer">
                                <Facebook width={30} height={30} />
                            </div>
                        </a>

                        <a href="https://github.com/" target="blank">
                            <div className="iconContainer">
                                <Github width={30} height={30} />
                            </div>
                        </a>

                        <a href="https://google.com/" target="blank">
                            <div className="iconContainer">
                                <Google width={30} height={30} />
                            </div>
                        </a>

                        <a href="https://x.com/" target="blank">
                            <div className="iconContainer">
                                <Twitter width={30} height={30} />
                            </div>
                        </a>

                        <a href="https://www.microsoft.com/en-in/" target="blank">
                            <div className="iconContainer">
                                <Microsoft width={30} height={30} />
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
