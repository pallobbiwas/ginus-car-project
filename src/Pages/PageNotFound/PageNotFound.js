import React from 'react';
import notFound from '../../images/4o4-error_14549-5.jpg';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='container-fluid not-found'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default PageNotFound;