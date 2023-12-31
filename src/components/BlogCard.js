import React from 'react';
import { Link } from 'react-router-dom'

export const BlogCard = () => {
  return (
    <div className="blog-card card-wrapper">
        <div className="card-image" >
            <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>    
        <div className="blog-content">
            <p className="date">1 April, 2023</p>
            <h5 className="title">A beautiful sunday morning renaiance</h5>
            <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <Link to="/blog/:id" className="button">
                Read More
            </Link>
        </div>
    </div>
  )
}
