import React, { useState, useRef, useEffect, useReducer, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import { useTranslation } from "react-i18next";
import '../../services/localizationService';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  hideSignup: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  hideSignup: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  hideSignup,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const [isActive, setIsactive] = useState(false);


  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });

  // useLayoutEffect(() => {
  //   window.addEventListener('click', forceUpdate);

  //   return () => window.removeEventListener('click', forceUpdate);
  // }, []);

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const logout = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
    localStorage.removeItem('uid')
    localStorage.removeItem('signup')
  }

  const profile = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
    
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  const changeLanguage = (e) => {
    window.changeLanguage(e.target.dataset.language);
    window.addEventListener('click', forceUpdate);

  }

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <Link to="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                      <Link to="/faq" onClick={closeMenu}>FAQ</Link>
                    </li>
                    <li>
                      <Link to="/policy" onClick={closeMenu}>Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms" onClick={closeMenu}>Terms</Link>
                    </li>
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="/signin" className="button button-secondary button-wide-mobile button-sm" onClick={closeMenu}>Login</Link>
                      </li>
                    </ul>

                  }
                  {
                    hideSignin && <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="/" className="button button-secondary button-wide-mobile button-sm" onClick={
                          logout
                        }>Logout</Link>
                      </li>
                    </ul>
                  }{
                    hideSignin && <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="/profile" className="button button-secondary button-wide-mobile button-sm">Profile</Link>
                      </li>
                    </ul>
                  }
                  {!hideSignup &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="/signup" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Sign up</Link>
                      </li>
                    </ul>}

                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
