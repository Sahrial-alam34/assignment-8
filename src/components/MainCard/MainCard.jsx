import React from 'react';
import './MainCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';

const MainCard = (props) => {
    // console.log('props',props.blog)
    const { id, blogTitle, blogCoverImg, authorImg, authorName, publishDate, readTime,description } = props.blog
    const handleAddToBlog = props.handleAddToBlog;
    const handleReadMark = props.handleReadMark;
    

    // const handleAddToBlog = (blog)=>{
    //     console.log('id is hete',blog);
    // }

    return (
        <div className='blog'>
            <img className='cover-img' src={blogCoverImg} alt="" />
            <div className='blog-info'>
                <div className='author-info'>
                    <div className='author-desc'>
                        <img className='author-img' src={authorImg} alt="" />
                        <div>
                        <p >{authorName}</p>
                        <p><small>{publishDate}</small></p>
                        </div>
                    </div>
                    <div className='read-mark'>
                    <p><small>{readTime} min Read</small></p>
                    <FontAwesomeIcon 
                    className='bookmark' 
                    icon={regularBookmark}
                    onClick={()=>handleAddToBlog(props.blog)}/>
                    </div>
                    
                </div>
                <h1 className='blog-title'>{blogTitle}</h1>
                <p>{description}</p>
                <button onClick={()=>handleReadMark(props.blog)} className='mark-read'>Mark as read</button>
            </div>
        </div>
    );
};

export default MainCard;