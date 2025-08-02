import React, {useState} from "react";
import './style.css';
import Footer from "./Footer";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as Like} from '../assets/wishlist.svg';
import {ReactComponent as Shop} from '../assets/cart.svg';
import {ReactComponent as Notification} from '../assets/bell.svg';
import {ReactComponent as RightArrow} from '../assets/short-arrow-right-black.svg';
import {ReactComponent as Star} from '../assets/star.svg';
import {ReactComponent as NoStar} from '../assets/noStar.svg';
import {ReactComponent as Designer} from '../assets/span-8.svg';
import {ReactComponent as Globe} from '../assets/language.svg';
import {ReactComponent as Badge} from '../assets/achive.svg';
import {ReactComponent as Cap} from '../assets/cap.svg';
import {ReactComponent as Play} from '../assets/play.svg';
import {ReactComponent as DownArrow} from '../assets/arrow-down.svg';
import {ReactComponent as Reviewer} from '../assets/span-6.svg';
import {ReactComponent as Quotes} from '../assets/quotes.svg';
import {ReactComponent as Comments_profile} from '../assets/span-7.svg';
import {ReactComponent as LeftArrow} from '../assets/short-arrow-left.svg';
import {ReactComponent as RightWhiteArrow} from '../assets/short-arrow-right.svg';
import {ReactComponent as Facebook} from '../assets/facebook.svg';
import {ReactComponent as Github} from '../assets/github.svg';
import {ReactComponent as Google} from '../assets/google.svg';
import {ReactComponent as Twitter} from '../assets/X.svg';
import {ReactComponent as Microsoft} from '../assets/microsoft.svg';
import bg from '../assets/bg.jpg';
import courseImage from '../assets/img.jpg';
import socialMedia from '../assets/socialMedia.png';
 
function Details(){
    const location = useLocation();
    const {state} = location;
    const [tabs, setTabs] = useState(['Description', 'Instructor', 'Syllabus', 'Reviews']);
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();

    const [description, setDescription] = useState({
        description: 'This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises.',
        certification: 'At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field.'
    })
    const [instructor, setInstructor] = useState({
        name: 'Ronald Richards',
        designation: 'UI/UX Designer',
        image: Designer,
        reviews: '40,445',
        students: 500,
        courses: 15,
        description: 'With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences.'
    })
    const [syllabus, setSyllabus] = useState([
        {
            id: 1,
            title: 'Introduction to UX Design',
            lessons: 5,
            hour: 1
        },
        {
            id: 2,
            title: 'Basics of User-Centered Design',
            lessons: 5,
            hour: 1
        },
        {
            id: 3,
            title: 'Elements of User Experience',
            lessons: 5,
            hour: 1
        },
        {
            id: 4,
            title: 'Visual Design Principles',
            lessons: 5,
            hour: 1
        },
    ])
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: 'Mark Doe',
            image: Reviewer,
            rating: 5,
            date: '22nd March, 2024',
            description: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
        },
        {
            id: 2,
            name: 'Mark Doe',
            image: Reviewer,
            rating: 5,
            date: '22nd March, 2024',
            description: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
        },
        {
            id: 3,
            name: 'Mark Doe',
            image: Reviewer,
            rating: 5,
            date: '22nd March, 2024',
            description: 'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
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

    const handleTabs = (index)=> {
        setActiveTab(index);
    }

    const handleDetails = (course)=> {
        const data = course;

        navigate('/details', {state: data});
    }

    return(
        <div id="main">
            <section className="wrapper">
                <header>
                    <h1>
                        <a href="/" className="forLogo">
                            <Logo width={31} height={40} />
                            <h1>Byway</h1>
                        </a>
                    </h1>

                    <ul>
                        <li>
                            <a href="">
                                <Like />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <Shop />
                            </a>
                        </li>

                        <li>
                            <a href="">
                                <Notification />
                            </a>
                        </li>

                        <li>
                            <div className="profileContainer">
                                <h1>J</h1>
                            </div>
                        </li>
                    </ul>
                </header>
            </section>

            <div className="mainContainer">
                <section className="wrapper">
                    <div className="left">
                        <div className="pages">
                            <a href="/">Home</a>
                            <RightArrow className="rightArrow" />
                            <a href="">Categories</a>
                            <RightArrow className="rightArrow" />
                            <p>Introduction to User Experience Design</p>
                        </div>

                        <div className="courseDetails">
                            <h1 className="title">Introduction to User Experience Design</h1>
                            <p className="description">
                                This course is meticulously crafted to provide you with a foundational understanding of the <br />
                                principles, methodologies, and tools that drive exceptional user experiences in the digital <br />
                                landscape.
                            </p>

                            <div className="extraContainer">
                                <div className="additionalInfo">
                                    <div className="ratingsContainer">
                                        <span>4.6</span>

                                        <div className="ratingStars">
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>

                                        <p className="rating">({state?.rating} rating)</p>
                                    </div>

                                    <hr />

                                    <p className="otherDetails">
                                        {state?.total_hours} Total Hours. {state?.total_lectures} Total Lectures. {state?.level}
                                    </p>
                                </div>

                                <div className="designerContainer">
                                    <Designer className="designerImage" />
                                    <p>Created by <a href="">{state?.designer}</a></p>
                                </div>

                                <div className="languageContainer">
                                    <Globe />
                                    <p>English, Spanish, Italian, German</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="anotherContainer">
                            <div className="topContainer">
                                <img src={courseImage} alt="image" />
                                <div className="rateContainer">
                                    <h2 className="originalRate">$49.5</h2>
                                    <span>$99.5</span>
                                    <h2 className="discountRate">50% Off</h2>
                                </div>

                                <div className="buttonsContainer">
                                    <button className="cartButton">Add To Cart</button>
                                    <button className="buyButton">Buy Now</button>
                                </div>
                            </div>

                            <hr />

                            <div className="bottomContainer">
                                <h4>Share</h4>
                                
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
                        </div>
                    </div>
                </section>
            </div>

            <section className="wrapper">
                <div id="tabsContainer">
                    <div className="tabsContainer">
                        {tabs.map((tab, index)=> (
                            <div 
                                className={`tab ${activeTab === index ? 'active' : ''}`}
                                onClick={()=> handleTabs(index)}
                                key={index}
                            >
                                <p>{tab}</p>
                            </div>
                        ))}
                    </div>

                    <hr />

                    <div className={`descriptionTab ${activeTab === 0 ? 'active' : ''}`}>
                        <div className="eachContainer">
                            <h1>Description</h1>
                            <p>{description.description}</p>
                        </div>

                        <div className="eachContainer">
                            <h1>Certification</h1>
                            <p>{description.certification}</p>
                        </div>
                    </div>

                    <div className={`instructorTab ${activeTab === 1 ? 'active' : ''}`}>
                        <h1 className="title">Instructor</h1>

                        <div>
                            <a className="name" href="">{instructor.name}</a>
                            <p className="designation">{instructor.designation}</p>
                        </div>

                        <div className="profile">
                            <instructor.image className="profileImage" />

                            <div>
                                <div className="eachContainer">
                                    <Badge />
                                    <p className="count">{instructor.reviews} Reviews</p>
                                </div>

                                <div className="eachContainer">
                                    <Cap />
                                    <p className="count">{instructor.students} Students</p>
                                </div>

                                <div className="eachContainer">
                                    <Play />
                                    <p className="count">{instructor.courses} Courses</p>
                                </div>
                            </div>
                        </div>

                        <p className="description">{instructor.description}</p>
                    </div>

                    <div className={`syllabusTab ${activeTab === 2 ? 'active' : ''}`}>
                        <h1 className="title">Syllabus</h1>

                        <div className="allSyllabuses">
                            {syllabus.map((course)=> (
                                <div className="syllabusContainer" key={course.id}>
                                    <div className="syllabusTitleContainer">
                                        <DownArrow />
                                        <h1>{course.title}</h1>
                                    </div>

                                    <div className="details">
                                        <p>{course.lessons} Lessons</p>
                                        <p>{course.hour} hour</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="reviewsTab">
                        <h1 className="title">Learner Reviews</h1>

                        <div className="forFlex">
                            <div className="left">
                                <div className="totalRatings">
                                    <div className="rating">
                                        <Star />
                                        <h2>4.6</h2>
                                    </div>

                                    <p>146,951 reviews</p>
                                </div>

                                <div className="allRatings">
                                    <div className="eachRow">
                                        <div className="starsContainer">
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                            <NoStar />
                                        </div>

                                        <span>80%</span>
                                    </div>

                                    <div className="eachRow">
                                        <div className="starsContainer">
                                            <Star />
                                            <Star />
                                            <Star />
                                            <NoStar />
                                            <NoStar />
                                        </div>

                                        <span>10%</span>
                                    </div>

                                    <div className="eachRow">
                                        <div className="starsContainer">
                                            <Star />
                                            <Star />
                                            <NoStar />
                                            <NoStar />
                                            <NoStar />
                                        </div>

                                        <span>5%</span>
                                    </div>

                                    <div className="eachRow">
                                        <div className="starsContainer">
                                            <Star />
                                            <Star />
                                            <NoStar />
                                            <NoStar />
                                            <NoStar />
                                        </div>

                                        <span>3%</span>
                                    </div>

                                    <div className="eachRow">
                                        <div className="starsContainer">
                                            <Star />
                                            <NoStar />
                                            <NoStar />
                                            <NoStar />
                                            <NoStar />
                                        </div>

                                        <span>2%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="right">
                                <div className="allReviews">
                                    {reviews.map((review)=> (
                                        <div className="reviewContainer" key={review.id}>
                                            <div className="reviewer">
                                                <review.image width={60} height={60} />
                                                <h5>{review.name}</h5>
                                            </div>

                                            <div className="content">
                                                <div className="extraDetails">
                                                    <div className="rating">
                                                        <Star />
                                                        <h5>{review.rating}</h5>
                                                    </div>

                                                    <p>Reviewed on {review.date}</p>
                                                </div>

                                                <p className="description">{review.description}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <button>View more Reviews</button>
                                </div>
                            </div>
                        </div>
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
                                <RightWhiteArrow />
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

            <section className="wrapper">
                <div id="courses" style={{margin: '100px 0'}}>
                    <div className="titleContainer">
                        <h1 className="title">More Courses Like This</h1>
                        <a className="seeAll" href="">See All</a>
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
            </section>

            <Footer />
        </div>
    )
}

export default Details;
