import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books-categories')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])

    return (
        <div className='ml-12'>
            <h2>Subject Categories:{categories.length}</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/catagory/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;