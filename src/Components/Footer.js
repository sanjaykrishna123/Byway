import React from "react";
import './style.css';

import byway from '../assets/byway.png';
import socialMedia from '../assets/socialMedia.png';

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

                    <img alt="socialMedia" src={socialMedia} className="socialMedia" />
                </div>
            </section>
        </footer>
    )
}

export default Footer;