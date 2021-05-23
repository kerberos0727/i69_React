import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const LayoutDefault = ({ children }) => (
  <>
    {
      localStorage.getItem('signup') != null && localStorage.getItem('uid') == null &&
      <Header navPosition="right" className="reveal-from-bottom" hideSignup='true' /> 
    }
    {
      localStorage.getItem('uid') != null &&
      <Header navPosition="right" className="reveal-from-bottom" hideSignin='true' hideSignup='true' />
    }
    {
      localStorage.getItem('signup') == null && localStorage.getItem('uid') == null &&
      <Header navPosition="right" className="reveal-from-bottom" />
    }

    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;  