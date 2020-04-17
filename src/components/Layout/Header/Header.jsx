import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Layout/Button';
import Logo from 'static/images/logo.svg';
import LogoMini from 'static/images/logo-mini.svg';

import { HeaderStyles, LowerPartStyles } from './styles';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0); // scroll

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset > 82;

    setScrollPosition(scrollTop);
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      <HeaderStyles>
        <div className="wrapper">
          <div className="upper-part">
            <div className="flex">
              <div className="logo">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
              <div className="delivery-info">
                <div>
                  Доставка пиццы <span className="orange">Санкт-Петербург</span>
                </div>
                <div className="desc">Среднее время доставки 34 мин</div>
              </div>
              <div className="phone">
                <div>8 800 302-00-60</div>
                <div className="desc">Звонок бесплатный</div>
              </div>
            </div>
            <div className="login-cont">
              <Button secondary small link="/bonuses">
                Додо рубли
                </Button>
              <Button secondary small link="/login">
                Войти
                </Button>
            </div>
          </div>
        </div>
      </HeaderStyles>
      <LowerPartStyles scroll={scrollPosition}>
        <div className="wrapper">
          <nav>
            <ul>
              <li className="logo-mini">
                <Link to="/">
                  <LogoMini />
                </Link>
              </li>
              <li>
                <a href="#pizza">Пиццы</a>
              </li>
              <li>
                <a href="#combo">Комбо</a>
              </li>
              <li>
                <a href="#antipasta">Закуски</a>
              </li>
              <li>
                <a href="#desserts">Десерты</a>
              </li>
              <li>
                <a href="#drinks">Напитки</a>
              </li>
              <li>
                <a href="#promo">Акции</a>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
              <li>
                <Link to="/franchise">Франшиза</Link>
              </li>
              <li>
                <Link to="/about">О нас</Link>
              </li>
            </ul>
          </nav>

          <div className="cart">
            <div className="info">
              <div className="price">0 ₽</div>
              <div className="items">0 товаров</div>
            </div>
            <Button link="/cart">Корзина</Button>
          </div>
        </div>
      </LowerPartStyles>
    </>
  );
}

export default Header;
