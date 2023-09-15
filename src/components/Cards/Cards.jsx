import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import MainCard from '../MainCard/MainCard';
import SideCard from '../SideCard/SideCard'
import './Cards.css'

const Cards = () => {
    const [blogs, setBlogs] = useState([]);
    const [singleBlog, setSingleBlog] = useState([]);
    const [markRead, setMarkRead] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    const handleAddToBlog = (blog) => {
        // console.log('new blof', blog.id);

        

        const newSingleBlog = [...singleBlog, blog];
        let count = -1;
        for (const isBook of newSingleBlog) {
            if(isBook.id == blog.id){
                count++;
            
            }
            if(count === 1){
                
                toast("Already Bookmarked!!!");

                return;
            }
            
        }
        // console.log('new',newSingleBlog);
        // // const isBookmark = newSingleBlog.find(blog=>blog.id == newSingleBlog.id)
        // // console.log('is book',isBookmark);
        setSingleBlog(newSingleBlog);

    }

    const handleReadMark = (blog) =>{
        const newReadMark = [...markRead, blog];
        setMarkRead(newReadMark);
    }
    return (
        <div className='card-container'>
            <div className='main-card-container'>
                {
                    blogs.map(blog => <MainCard
                        key={blog.id}
                        blog={blog}
                        handleAddToBlog={handleAddToBlog}
                        handleReadMark={handleReadMark}
                    ></MainCard>)
                }
            </div>
            <div className='slide-card-container'>
                <SideCard 
                singleBlog={singleBlog}
                markRead={markRead}
                        
                ></SideCard>

            </div>
            
        </div>
    );
};

export default Cards;