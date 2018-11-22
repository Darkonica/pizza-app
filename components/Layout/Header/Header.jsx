import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import ReactSVG from 'react-svg';
import Button from '../Button/Button';

import { HeaderStyles, LowerPartStyles } from './styles';

export class Header extends Component {

  state = {
    scroll: 0
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    const scrollTop = window.pageYOffset > 82 ? true : false;

    this.setState({
      scroll: scrollTop
    });
  };

  render() {
		return (
      <Fragment>
        <HeaderStyles>
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
          </div>
        </HeaderStyles>
        <LowerPartStyles scroll={this.state.scroll} >
          <div className="wrapper">
            <nav>
              <ul>
                <li className="logo-mini">
                  <Link href='/'>
                    <a> 
                      <ReactSVG src="/static/images/logo-mini.svg" />
                    </a>
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
                  <Link href="/contacts"><a>Контакты</a></Link>
                </li>
                <li>
                  <Link href="/franchise"><a>Франшиза</a></Link>
                </li>
                <li>
                  <Link href="/about"><a>О нас</a></Link>
                </li>
              </ul>
            </nav>

            <div className="cart">
              <div className="info">
                <div className="price">0 ₽</div>
                <div className="items">0 товаров</div>
              </div>
              <Button link={'/cart'}>
                Корзина
              </Button>
            </div>

          </div>
        </LowerPartStyles>
          
      </Fragment>
    );
  };
};

export default Header;