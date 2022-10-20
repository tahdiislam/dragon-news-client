import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/category/')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h4>All categories {categories.length}</h4>
            <div>
                {
                    categories.map(category => <Link className='text-start d-block my-2' to={`/category/${category.id}`} key={category.id}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;