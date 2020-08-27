import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Courses from '../courses/Courses'
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [courses, setCourses] = useState(first10);
    const [cart, setCart] = useState([])

    const handleAddCourses = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);

    }

    return (
        <div className="shop-container">
            <div className="course-container">

                {
                    courses.map(course => <Courses course={course} handleAddCourses={handleAddCourses}></Courses>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>

        </div>
    );
};

export default Shop;