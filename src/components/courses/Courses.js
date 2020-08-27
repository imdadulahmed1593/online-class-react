import React from 'react';
import './Courses.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';



const Courses = (props) => {
    // const {img, name} =props.product;
    return (
        <div className='course'>
            <div>
                <img src={props.course.img} alt="" />
            </div>
            <div className='course-detail'>
                <h4 className="course-name">{props.course.name}</h4>
                <br />
                <p>by : {props.course.seller}</p>


                <p>Rating : {props.course.rating} </p>
                <p>${props.course.price}</p>
                <Button onClick={() => props.handleAddCourses(props.course)} variant="outline-success"><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</Button>

            </div>

        </div>
    );
};


export default Courses;