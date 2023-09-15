import React, { useState } from 'react';
import './SideCard.css'
import Container from '../Container/Container';



const SideCard = (props) => {
    
    const singleBlog = props.singleBlog;
    const readMark = props.markRead;
    // console.log('read mark',readMark);

     
    let totalTime = 0;
    for(const blog of readMark){
        totalTime = totalTime + blog.readTime;
       
        
    }

    // const getitem = singleBlog.map(blog=>blog.blogTitle);

    
   
     return (
        <div className='side-card'>

            <div className='spent-time'>
                <h3>Spent time on read: {totalTime} </h3>
            </div>
            <div className='bookmark-blog'>
                <h3>Bookmarked Blogs: {singleBlog.length} </h3>

                {
                        singleBlog.map(blog=><Container
                            blog={blog}
                            key={blog.id}
                        ></Container>)
                        // singleBlog.map(blog=>console.log('blog',blog))
                    }
                
            </div>
        </div>
    );
};

export default SideCard;

