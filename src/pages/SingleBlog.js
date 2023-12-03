import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SingleBlog = () => {
  return (
    <>
      <Meta title="Blog Name" />
      <BreadCrumb title="Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blog">
                                <IoArrowBack /> Back
                            </Link>
                            <h3 className="title">A beautiful sunday morning renaiance</h3>
                            <img src="images/blog-1.jpg" className="img-fluid w-100 my-4" alt="blog" />
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting,
                            Lorem Ipsum is simply dummy text of the printing and typesetting.
                            Lorem Ipsum is simply dummy text of the printing and typesetting.
                            Lorem Ipsum is simply dummy text of the printing and typesetting. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default SingleBlog