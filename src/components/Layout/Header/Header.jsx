import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Layout/Button';
import Logo from 'static/images/logo.svg';
import LogoMini from 'static/images/logo-mini.svg';

import commonStyles from 'styles/commonStyles';
import styles from './styles';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

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
      <header className={styles.header}>
        <div className={commonStyles.wrapper}>
          <div className={styles.upperPart}>
            <div className={commonStyles.flex}>
              <div className={styles.logo}>
                <Link to="/">
                  <Logo />
                </Link>
              </div>
              <div className={styles.deliveryInfo}>
                <div>
                  Доставка пиццы <span className={styles.orange}>Санкт-Петербург</span>
                </div>
                <div className={styles.desc}>Среднее время доставки 34 мин</div>
              </div>
              <div className={styles.phone}>
                <div>8 800 302-00-60</div>
                <div className={styles.desc}>Звонок бесплатный</div>
              </div>
            </div>
            <div className={styles.loginCont}>
              <Button secondary small link="/bonuses">
                Додо рубли
                </Button>
              <Button secondary small link="/login">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.lowerPart} scroll={scrollPosition}>
        <div className={`${styles.wrapper} ${commonStyles.wrapper}`}>
          <nav>
            <ul>
              <li className={styles.logoMini}>
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

          <div className={styles.cart}>
            <div className={styles.info}>
              <div className={styles.price}>0 ₽</div>
              <div className={styles.items}>0 товаров</div>
            </div>
            <Button link="/cart">Корзина</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
