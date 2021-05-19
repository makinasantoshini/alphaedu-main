import React from 'react';

import './courses-component.css'

const CoursesComponent = (props) => {
    return (
        <ul>
            {
                props.courseList.map((item, _i) => {
                    return (
                        <li>
                            <header className='header'>
                                <h2>{item.name}</h2>
                            </header>
                            <p>{item.des}</p>
                            <p>Price: {item.price}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CoursesComponent;