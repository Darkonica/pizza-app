import React, { Fragment } from 'react';
import Link from 'next/link';
import ReactSVG from 'react-svg';
import Button from '../Button/Button';

import Styles from './styles';

const Header = () => {
		return (
      <Styles>
				<header>
          <div className="wrapper">
            <div className="upper-part">
              <div className="flex">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <ReactSVG src="/static/images/logo.svg" />
                    </a>
                  </Link>
                </div>
                <div className="delivery-info">
                  <div>Доставка пиццы <span className="orange">Санкт-Петербург</span></div>
                  <div className="desc">Среднее время доставки 34 мин</div>
                </div>
                <div className="phone">
                  <div>8 800 302-00-60</div>
                  <div className="desc">Звонок бесплатный</div>
                </div>
              </div>
              <div className="login-cont">
                <Button secondary small link={'/bonuses'}>Додо рубли</Button>
                <Button secondary small link={'/login'}>Войти</Button>
              </div>
            </div>
            
            <div className="lower-part">
              <nav>
                <ul>
                  <li>
                    <a href="#pizza">Pizza</a>
                  </li>
                  <li>
                    <a href="#combo">Combo</a>
                  </li>
                  <li>
                    <a href="#antipasta">Antipasta</a>
                  </li>
                  <li>
                    <a href="#desserts">Desserts</a>
                  </li>
                  <li>
                    <a href="#drinks">Drinks</a>
                  </li>
                  <li>
                    <a href="#promo">Promo</a>
                  </li>
                  <li>
                    <Link href="#contacts"><a>Contacts</a></Link>
                  </li>
                  <li>
                    <Link href="#franchise"><a>Franchise</a></Link>
                  </li>
                  <li>
                    <Link href="#about"><a>About us</a></Link>
                  </li>
                </ul>
              </nav>

              <div className="cart">
                <Button link={'/cart'}>
                  Корзина
                </Button>
              </div>
            </div>
          </div>
				</header>
      </Styles>
		);
};

export default Header;