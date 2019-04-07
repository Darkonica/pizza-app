import React from "react";
import { Link } from "react-router-dom";

import LogoShort from "../../../static/images/logo-short.svg";
import FacebookIcon from "../../../static/images/socials/facebook.svg";
import InstagramIcon from "../../../static/images/socials/instagram.svg";
import VKIcon from "../../../static/images/socials/vk.svg";
import YoutubeIcon from "../../../static/images/socials/youtube.svg";

import Styles from "./styles";

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
                    <li>
                      <Link to="#">О нас</Link>
                    </li>
                    <li>
                      <Link to="#">Додо Клуб</Link>
                    </li>
                    <li>
                      <Link to="#">Додо-книга</Link>
                    </li>
                    <li>
                      <Link to="#">Блог «Сила ума»</Link>
                    </li>
                    <li>
                      <Link to="#">Додо ИС</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-block">
                  <div className="title">Вакансии</div>
                  <ul>
                    <li>
                      <Link to="#">В пиццерии</Link>
                    </li>
                    <li>
                      <Link to="#">В контакт-центре</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-block">
                  <div className="title">Партнерам</div>
                  <ul>
                    <li>
                      <Link to="#">Франшиза</Link>
                    </li>
                    <li>
                      <Link to="#">Инвестиции</Link>
                    </li>
                    <li>
                      <Link to="#">Ищем поставщиков</Link>
                    </li>
                    <li>
                      <Link to="#">Предложить помещение</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-block">
                  <div className="title">Это интересно</div>
                  <ul>
                    <li>
                      <Link to="#">Почему мы готовим без перчаток?</Link>
                    </li>
                    <li>
                      <Link to="#">Экскурсии и мастер-классы</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="contacts">
                <div className="phone">8 800 302-00-60</div>
                <div className="desc">Звонок бесплатный</div>
                <div className="email">
                  <Link to="mailto:feedback@dodopizza.com">
                    feedback@dodopizza.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="line-cont">
              <div className="data-cont">
                <div className="data-block">
                  <div className="title">762 078 155 ₽</div>
                  <div className="text">
                    Выручка российской сети в этом месяце. В прошлом — 1 169 357
                    571 ₽
                  </div>
                </div>
                <div className="data-block">
                  <div className="title">407 пиццерий</div>
                  <div className="text">
                    в 11 странах, включая Китай, США и Великобританию
                  </div>
                </div>
              </div>

              <div className="socials-cont">
                <Link to="#" className="social">
                  <FacebookIcon className="svg" />
                  Facebook
                </Link>
                <Link to="#" className="social">
                  <InstagramIcon className="svg" />
                  Instagram
                </Link>
                <Link to="#" className="social">
                  <VKIcon className="svg" />
                  ВКонтакте
                </Link>
                <Link to="#" className="social">
                  <YoutubeIcon className="svg" />
                  Youtube
                </Link>
              </div>
            </div>
          </div>
          <div className="lower-part">
            <div>
              <ul>
                <li className="copyright">
                  <LogoShort className="svg" />
                  <div>© 2018</div>
                </li>
                <li>
                  <a href="#">Правовая информация</a>
                </li>
                <li>
                  <a href="#">Калорийность и состав</a>
                </li>
                <li>
                  <a href="#">Помощь</a>
                </li>
              </ul>
            </div>
            <div className="app-links">
              <Link to="#" className="google-play social">
                <img src="static/images/google-play.svg" />
              </Link>
              <Link to="#" className="app-store social">
                <img src="static/images/app-store.svg" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </Styles>
  );
};

export default Footer;
