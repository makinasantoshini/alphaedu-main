import React from 'react';
import CoursesComponent from './courses-component';

const courses = [{
    name: 'HTML',
    price: 2000,
    des: 'Hyper Text Markup Language'
},{
    name: 'JAVASCRIPT',
    price: 2000,
    des: 'Javascript'
},{
    name: 'CSS',
    price: 2000,
    des: 'Cascading Style Sheet'
},{
    name: 'REACT.JS',
    price: 2000,
    des: 'React JS'
},{
    name: 'REDUX',
    price: 2000,
    des: 'Redux'
},{
    name: 'REACT NATIVE',
    price: 2000,
    des: 'React Native'
}]

const CoursesContainer = () => {
    return <CoursesComponent courseList={courses} />
}

export default CoursesContainer;