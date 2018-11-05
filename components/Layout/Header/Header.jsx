import React, { Fragment } from 'react';
import Link from 'next/link';
import ReactSVG from 'react-svg';

import Styles from './styles';

const Header = () => {
		return (
      <Styles>
				<header>
          <div className="wrapper">
            <div className="upper-part">
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
            
            <div className="lower-part">
              <nav>
                <ul>
                  <li>
                    <Link href="/pizza"><a>Pizza</a></Link>
                  </li>
                  <li>
                    <Link href="/combo"><a>Combo</a></Link>
                  </li>
                  <li>
                    <Link href="/antipasta"><a>Antipasta</a></Link>
                  </li>
                  <li>
                    <Link href="/desserts"><a>Desserts</a></Link>
                  </li>
                  <li>
                    <Link href="/drinks"><a>Drinks</a></Link>
                  </li>
                  <li>
                    <Link href="/promo"><a>Promo</a></Link>
                  </li>
                  <li>
                    <Link href="/contacts"><a>Contacts</a></Link>
                  </li>
                  <li>
                    <Link href="/franchise"><a>Franchise</a></Link>
                  </li>
                  <li>
                    <Link href="/about"><a>About us</a></Link>
                  </li>
                </ul>
              </nav>

              <div className="cart">
                Cart
              </div>
            </div>
          </div>
				</header>
      </Styles>
		);
};

export default Header;