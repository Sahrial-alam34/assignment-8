import React from 'react';
import './Container.css'

const Container = (props) => {
    // console.log('propssss',props);
    const {blogTitle}=props.blog
    return (
        <div className='bookmark-blog-name'>
            <h2>{blogTitle}</h2>
            
        </div>
    );
};

export default Container;