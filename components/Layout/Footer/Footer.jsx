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

                        <div className="line-cont">
                            <div className="menu-cont">
                                <div className="menu-block">
                                    <div className="title">Додо Пицца</div>
                                    <ul>
                                        <li><Link href="#"><a>О нас</a></Link></li>
                                        <li><Link href="#"><a>Додо Клуб</a></Link></li>
                                        <li><Link href="#"><a>Додо-книга</a></Link></li>
                                        <li><Link href="#"><a>Блог «Сила ума»</a></Link></li>
                                        <li><Link href="#"><a>Додо ИС</a></Link></li>
                                    </ul>
                                </div>
                                <div className="menu-block">
                                    <div className="title">Вакансии</div>
                                    <ul>
                                        <li><Link href="#"><a>В пиццерии</a></Link></li>
                                        <li><Link href="#"><a>В контакт-центре</a></Link></li>
                                    </ul>
                                </div>
                                <div className="menu-block">
                                    <div className="title">Партнерам</div>
                                    <ul>
                                        <li><Link href="#"><a>Франшиза</a></Link></li>
                                        <li><Link href="#"><a>Инвестиции</a></Link></li>
                                        <li><Link href="#"><a>Ищем поставщиков</a></Link></li>
                                        <li><Link href="#"><a>Предложить помещение</a></Link></li>
                                    </ul>
                                </div>
                                <div className="menu-block">
                                    <div className="title">Это интересно</div>
                                    <ul>
                                        <li><Link href="#"><a>Почему мы готовим без перчаток?</a></Link></li>
                                        <li><Link href="#"><a>Экскурсии и мастер-классы</a></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="contacts">
                                <div className="phone">8 800 302-00-60</div>
                                <div className="desc">Звонок бесплатный</div>
                                <div className="email"><Link href="mailto:feedback@dodopizza.com"><a>feedback@dodopizza.com</a></Link></div>
                            </div>
                        </div>

                        <div className="line-cont">
                            <div className="data-cont">
                                <div className="data-block">
                                    <div className="title">762 078 155 ₽</div>
                                    <div className="text">Выручка российской сети в этом месяце. В прошлом — 1 169 357 571 ₽</div>
                                </div>
                                <div className="data-block">
                                    <div className="title">407 пиццерий</div>
                                    <div className="text">в 11 странах, включая Китай, США и Великобританию</div>
                                </div>
                            </div>

                            <div className="socials-cont">
                                <Link href="#"><a className="social">
                                    <ReactSVG src="static/images/socials/facebook.svg" className="svg" />
                                    Facebook
                                </a></Link>
                                <Link href="#"><a className="social">
                                    <ReactSVG src="static/images/socials/instagram.svg" className="svg" />
                                    Instagram
                                </a></Link>
                                <Link href="#"><a className="social">
                                    <ReactSVG src="static/images/socials/vk.svg" className="svg" />
                                    ВКонтакте
                                </a></Link>
                                <Link href="#"><a className="social">
                                    <ReactSVG src="static/images/socials/youtube.svg" className="svg" />
                                    Youtube
                                </a></Link>
                            </div>
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
                            <Link href="#"><a className="google-play social">
                                <img src="static/images/google-play.svg" />
                            </a></Link>
                            <Link href="#"><a className="app-store social">
                                <img src="static/images/app-store.svg" />
                            </a></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </Styles>
    );
};

export default Footer;