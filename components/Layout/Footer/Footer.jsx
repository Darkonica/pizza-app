import React from 'react';
import Link from 'next/link';
import ReactSVG from 'react-svg';

import Styles from './styles';

const Footer = () => {
    return (
        <Styles>
            <footer>
                <div className="wrapper">
                    <div className="upper-part">
                        <div className="menu-cont">
                            <div className="menu-block">
                                <div className="title">Dodo pizza</div>
                                <ul>
                                    <li><Link href="#"><a>About us</a></Link></li>
                                    <li><Link href="#"><a>Dodo club</a></Link></li>
                                    <li><Link href="#"><a>Dodo book</a></Link></li>
                                    <li><Link href="#"><a>Blog</a></Link></li>
                                    <li><Link href="#"><a>Dodo IS</a></Link></li>
                                </ul>
                            </div>
                            <div className="menu-block">
                                <div className="title">Dodo pizza</div>
                                <ul>
                                    <li><Link href="#"><a>About us</a></Link></li>
                                    <li><Link href="#"><a>Dodo club</a></Link></li>
                                    <li><Link href="#"><a>Dodo book</a></Link></li>
                                    <li><Link href="#"><a>Blog</a></Link></li>
                                    <li><Link href="#"><a>Dodo IS</a></Link></li>
                                </ul>
                            </div>
                            <div className="menu-block">
                                <div className="title">Dodo pizza</div>
                                <ul>
                                    <li><Link href="#"><a>About us</a></Link></li>
                                    <li><Link href="#"><a>Dodo club</a></Link></li>
                                    <li><Link href="#"><a>Dodo book</a></Link></li>
                                    <li><Link href="#"><a>Blog</a></Link></li>
                                    <li><Link href="#"><a>Dodo IS</a></Link></li>
                                </ul>
                            </div>
                            <div className="menu-block">
                                <div className="title">Dodo pizza</div>
                                <ul>
                                    <li><Link href="#"><a>About us</a></Link></li>
                                    <li><Link href="#"><a>Dodo club</a></Link></li>
                                    <li><Link href="#"><a>Dodo book</a></Link></li>
                                    <li><Link href="#"><a>Blog</a></Link></li>
                                    <li><Link href="#"><a>Dodo IS</a></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="contacts">
                            <div className="phone">8 800 302-00-60</div>
                            <div className="desc">Звонок бесплатный</div>
                            <div className="email"><Link href="mailto:feedback@dodopizza.com"><a>feedback@dodopizza.com</a></Link></div>
                        </div>
                    </div>
                    <div className="lower-part">
                        <div>
                            <ul>
                                <li className="copyright">
                                    <ReactSVG src="static/images/logo-short.svg" className="svg" />
                                    <div>© 2018</div>
                                </li>
                                <li><a href="#">Правовая информация</a></li>
                                <li><a href="#">Калорийность и состав</a></li>
                                <li><a href="#">Помощь</a></li>
                            </ul>
                        </div>
                        <div className="app-links">
                            <a href="#" className="google-play">Google play</a>
                            <a href="#" className="appstore">Appstore</a>
                        </div>
                    </div>
                </div>
            </footer>
        </Styles>
    );
};

export default Footer;