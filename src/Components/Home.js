import React, {useState} from "react";
import './style.css';
import Footer from './Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useNavigate } from "react-router-dom";

import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as Shop} from '../assets/cart.svg';
import {ReactComponent as Astrology} from '../assets/astrology.svg';
import {ReactComponent as Development} from '../assets/devlopment.svg';
import {ReactComponent as Marketing} from '../assets/marketing.svg';
import {ReactComponent as Physics} from '../assets/physics.svg';
import {ReactComponent as Star} from '../assets/star.svg';
import {ReactComponent as Quotes} from '../assets/quotes.svg';
import {ReactComponent as Comments_profile} from '../assets/span-7.svg';
import {ReactComponent as LeftArrow} from '../assets/short-arrow-left.svg';
import {ReactComponent as RightArrow} from '../assets/short-arrow-right.svg';
import {ReactComponent as RightWhiteArrow} from '../assets/arrow-right.svg';
import profile1 from '../assets/profile-1.png';
import profile2 from '../assets/profile-2.png';
import profile3 from '../assets/profile-3.png';
import span1 from '../assets/first.png';
import span2 from '../assets/second.png';
import span3 from '../assets/third.png';
import span4 from '../assets/fourth.png';
import span5 from '../assets/fifth.png';
import bg from '../assets/bg.jpg';
import designer from '../assets/model-5.jpg';
import journey_image from '../assets/journey_image.png';
import journey_image2 from '../assets/journey_image2.png';

function Home(){
    const navigate = useNavigate();

    const [categories, setCategories] = useState([
        {
            id: 1,
            category: 'Astrology',
            courses: 11,
            img_path: Astrology
        },
        {
            id: 2,
            category: 'Development',
            courses: 12,
            img_path: Development
        },
        {
            id: 3,
            category: 'Marketing',
            courses: 12,
            img_path: Marketing
        },
        {
            id: 4,
            category: 'Physics',
            courses: 14,
            img_path: Physics
        }
    ])

    const [courses, setCourses] = useState([
        {
            id: 1,
            img_path: bg,
            designer: 'Ronald Richards',
            rating: 1200,
            total_hours: 22,
            total_lectures: 155,
            level: 'Beginner',
            price: 149.9
        },
        {
            id: 2,
            img_path: bg,
            designer: 'Ronald Richards',
            rating: 1200,
            total_hours: 22,
            total_lectures: 155,
            level: 'Beginner',
            price: 149.9
        },
        {
            id: 3,
            img_path: bg,
            designer: 'Ronald Richards',
            rating: 1200,
            total_hours: 22,
            total_lectures: 155,
            level: 'Beginner',
            price: 149.9
        },
        {
            id: 4,
            img_path: bg,
            designer: 'Ronald Richards',
            rating: 1200,
            total_hours: 22,
            total_lectures: 155,
            level: 'Beginner',
            price: 149.9
        }
    ])

    const [instructors, setInstructors] = useState([
        {
            id: 1,
            name: 'Ronald Richards',
            domain: 'UI/UX Designer',
            rating: 4.9,
            no_of_students: 2400,
            img_path: designer
        },
        {
            id: 2,
            name: 'Ronald Richards',
            domain: 'UI/UX Designer',
            rating: 4.9,
            no_of_students: 2400,
            img_path: designer
        },
        {
            id: 3,
            name: 'Ronald Richards',
            domain: 'UI/UX Designer',
            rating: 4.9,
            no_of_students: 2400,
            img_path: designer
        },
        {
            id: 4,
            name: 'Ronald Richards',
            domain: 'UI/UX Designer',
            rating: 4.9,
            no_of_students: 2400,
            img_path: designer
        },
        {
            id: 5,
            name: 'Ronald Richards',
            domain: 'UI/UX Designer',
            rating: 4.9,
            no_of_students: 2400,
            img_path: designer
        }
    ])

    const [comments, setComments] = useState([
        {
            id: 1,
            user_name: 'Jane Doe',
            occupation: 'Designer',
            img_path: Comments_profile,
            comment: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.'
        },
        {
            id: 2,
            user_name: 'Jane Doe',
            occupation: 'Designer',
            img_path: Comments_profile,
            comment: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.'
        },
        {
            id: 3,
            user_name: 'Jane Doe',
            occupation: 'Designer',
            img_path: Comments_profile,
            comment: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.'
        },
        {
            id: 4,
            user_name: 'Jane Doe',
            occupation: 'Designer',
            img_path: Comments_profile,
            comment: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.'
        },
        {
            id: 5,
            user_name: 'Jane Doe',
            occupation: 'Designer',
            img_path: Comments_profile,
            comment: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.'
        },
        {
            id: 6,
            user_name: 'Jane Doe',
            occupation: 'Designer',
            img_path: Comments_profile,
            comment: '"Byway\'s tech courses are top-notch! As someone who\'s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.'
        }
    ])

    const handleDetails = (course)=> {
        const data = course;

        navigate('/details', {state: data});
    }

    return(
        <div id="main">
            <section className="wrapper">
                <header>
                    <h1>
                        <a href="#" className="forLogo">
                            <Logo width={31} height={40} />
                            <h1>Byway</h1>
                        </a>
                    </h1>

                    <ul>
                        <li>
                            <a href="#">
                                <Shop width={24} height={24} />
                            </a>
                        </li>

                        <li>
                            <button className="logIn">
                                <p>Log In</p>
                            </button>
                        </li>

                        <li>
                            <button className="signUp">
                                <p>Sign Up</p>
                            </button>
                        </li>
                    </ul>
                </header>
            </section>

            <hr />

            <section className="wrapper">
                <div id="spotlight">
                    <div className="topContainer">
                        <div className="left">
                            <h1>Unlock Your Potential <br /> with Byway</h1>

                            <p>
                                Welcome to Byway, where learning knows no bounds. We believe that 
                                <br />
                                education is the key to personal and professional growth, and we're here to 
                                <br />
                                guide you on your journey to success. 
                            </p>

                            <button>Start your instructor journey</button>
                        </div>

                        <div className="right">
                            <div>
                                <div className="forDots">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>

                                <div className="imageContainer">
                                    <img src={profile1} alt="profile" style={{width: '204.54px'}} />
                                </div>

                                <div className="halfCircle"></div>
                            </div>

                            <div>
                                <div className="forDots2">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>

                                <div className="imageContainer2">
                                    <img src={profile2} alt="profile" style={{width: '204.54px'}} />
                                </div>

                                <div className="halfCircle2"></div>

                                <div className="blackCircle">
                                    <div className="polygon"></div>
                                </div>

                                <div className="imageContainer3">
                                    <img src={profile3} alt="profile" style={{width: '260px'}} />
                                </div>

                                <div className="communityContainer">
                                    <div className="images">
                                        <img alt="image" src={span1} />
                                        <img alt="image" src={span2} />
                                        <img alt="image" src={span3} />
                                        <img alt="image" src={span4} />
                                        <img alt="image" src={span5} />
                                    </div>

                                    <p>Join our community of <br /> 1200+ Students</p>
                                </div>

                                <div className="halfCircle3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="spotlightBottomContainer">
                <div className="eachContainer">
                    <h2>250+</h2>
                    <p>Courses by our best mentors</p>
                </div>

                <div className="eachContainer">
                    <h2>1000+</h2>
                    <p>Courses by our best mentors</p>
                </div>

                <div className="eachContainer">
                    <h2>15+</h2>
                    <p>Courses by our best mentors</p>
                </div>

                <div className="eachContainer">
                    <h2>2400+</h2>
                    <p>Courses by our best mentors</p>
                </div>
            </div>

            <section className="wrapper">
                <div id="categories">
                    <div className="titleContainer">
                        <h1 className="title">Top Categories</h1>
                        <a className="seeAll" href="#">See All</a>
                    </div>

                    <div className="itemsContainer">
                        {
                            categories.map((category)=> (
                                <div className="category" key={category.id}>
                                    <div className="iconContainer">
                                        <category.img_path width={40} height={40} />
                                    </div>

                                    <div className="textContainer">
                                        <h4>{category.category}</h4>
                                        <p>{category.courses} Courses</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div id="courses">
                    <div className="titleContainer">
                        <h1 className="title">Top Courses</h1>
                        <a className="seeAll" href="#">See All</a>
                    </div>

                    <div className="itemsContainer">
                        {
                            courses.map((course)=> (
                                <div className="course" key={course.id} onClick={()=> handleDetails(course)}>
                                    <img alt="image" src={course.img_path} />

                                    <div className="textContainer">
                                        <h2>Beginner's Guide to Design</h2>
                                        <p className="designer">By {course.designer}</p>

                                        <div className="ratingContainer">
                                            <div className="rating">
                                                <Star width={20} height={20} />
                                                <Star width={20} height={20} />
                                                <Star width={20} height={20} />
                                                <Star width={20} height={20} />
                                                <Star width={20} height={20} />
                                            </div>

                                            <span>({course.rating} Ratings)</span>
                                        </div>

                                        <p className="extraDetails"><span>{course.total_hours}</span> Total Hours. <span>{course.total_lectures}</span> Lectures. <span>{course.level}</span></p>
                                        <h1 className="price">${course.price}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div id="instructors">
                    <div className="titleContainer">
                        <h1 className="title">Top Instructors</h1>
                        <a className="seeAll" href="#">See All</a>
                    </div>

                    <div className="itemsContainer">
                        {
                            instructors.map((instructor)=> (
                                <div className="instructorContainer" key={instructor.id}>
                                    <img alt="image" src={instructor.img_path} />

                                    <div className="textContainer">
                                        <div className="profileContainer">
                                            <h2>{instructor.name}</h2>
                                            <span>{instructor.domain}</span>
                                        </div>

                                        <hr />

                                        <div className="extraDetails">
                                            <div className="ratingsContainer">
                                                <Star width={20} height={20} />
                                                <p className="rating">{instructor.rating}</p>
                                            </div>

                                            <p className="students">{instructor.no_of_students} Students</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

            <div id="comments">
                <section className="wrapper">
                    <div className="commentsTopContainer">
                        <h1 className="commentsTitle">What Our Customer Say <br />About Us</h1>
                        
                        <div className="custom-nav">
                            <button className="swiper-button-prev-custom">
                                <LeftArrow />
                            </button>
                            <button className="swiper-button-next-custom">
                                <RightArrow />
                            </button>
                        </div>
                    </div>

                    <Swiper id="swiper"
                        modules={[Navigation]}
                        spaceBetween={15}
                        slidesPerView={3}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom'
                        }}
                        breakpoints={{
                            768: {slidesPerView: 2},
                            320: {slidesPerView: 1}
                        }}

                    >
                        {comments.map((comment)=> (
                            <SwiperSlide key={comment.id} className="card">
                                <Quotes />

                                <p className="comment">{comment.comment}</p>

                                <div className="profileContainer">
                                    <comment.img_path style={{borderRadius: '50%'}} />

                                    <div className="userContainer">
                                        <h4>{comment.user_name}</h4>
                                        <p>{comment.occupation}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>

            <div id="journey">
                <div className="firstContainer">
                    <img alt="image" src={journey_image} />

                    <div className="textContainer">
                        <h4>Become an Instructor</h4>
                        <p>
                            Instructors from around the world teach millions of students on Byway. <br />
                            We provide the tools and skills to teach what you love.
                        </p>
                        <button>
                            Start Your Instructor Journey
                            <RightWhiteArrow className="rightArrow" />
                        </button>
                    </div>
                </div>

                <div className="firstContainer">
                    <img alt="image" src={journey_image2} />

                    <div className="textContainer">
                        <h4>Transform your life through education</h4>
                        <p>
                            Learners around the world are launching new careers, advancing in <br />
                            their fields, and enriching their lives.
                        </p>
                        <button>
                            Checkout Courses
                            <RightWhiteArrow className="rightArrow" />
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home;