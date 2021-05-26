import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div class="sticky-nav">
            <Link to="/"><i class="fa fa-search active" aria-hidden="true"></i></Link>
            <Link to="/message"><i class="fas fa-comment-dots"></i></Link>
            <Link to="/userinfo"><i class="fas fa-user"></i></Link>
        </div>
    )
}

export default Footer;