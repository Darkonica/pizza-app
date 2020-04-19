import React from 'react';
import { Link } from 'react-router-dom';

import LogoShort from 'static/images/logo-short.svg';
import FacebookIcon from 'static/images/socials/facebook.svg';
import InstagramIcon from 'static/images/socials/instagram.svg';
import VKIcon from 'static/images/socials/vk.svg';
import YoutubeIcon from 'static/images/socials/youtube.svg';

import GooglePlayIcon from 'static/images/google-play.svg';
import AppstoreIcon from 'static/images/app-store.svg';

import commonStyles from 'styles/commonStyles';
import styles from './styles';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={commonStyles.wrapper}>
        <div className={styles.upperPart}>
          <div className={styles.lineCont}>
            <div className={styles.menuCont}>
              <div className={styles.menuBlock}>
                <div className={styles.title}>Додо Пицца</div>
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
              <div className={styles.menuBlock}>
                <div className={styles.title}>Вакансии</div>
                <ul>
                  <li>
                    <Link to="#">В пиццерии</Link>
                  </li>
                  <li>
                    <Link to="#">В контакт-центре</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.menuBlock}>
                <div className={styles.title}>Партнерам</div>
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
              <div className={styles.menuBlock}>
                <div className={styles.title}>Это интересно</div>
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

            <div className={styles.contacts}>
              <div className={styles.phone}>8 800 302-00-60</div>
              <div className={styles.desc}>Звонок бесплатный</div>
              <div className={styles.email}>
                <Link to="mailto:feedback@dodopizza.com">feedback@dodopizza.com</Link>
              </div>
            </div>
          </div>

          <div className={styles.lineCont}>
            <div className={styles.dataCont}>
              <div className={styles.dataBlock}>
                <div className={styles.title}>762 078 155 ₽</div>
                <div className={styles.text}>Выручка российской сети в этом месяце. В прошлом — 1 169 357 571 ₽</div>
              </div>
              <div className={styles.dataBlock}>
                <div className={styles.title}>407 пиццерий</div>
                <div className={styles.text}>в 11 странах, включая Китай, США и Великобританию</div>
              </div>
            </div>

            <div className={styles.socialsCont}>
              <Link to="#" className={styles.social}>
                <FacebookIcon className={styles.svg} />
                Facebook
              </Link>
              <Link to="#" className={styles.social}>
                <InstagramIcon className={styles.svg} />
                Instagram
              </Link>
              <Link to="#" className={styles.social}>
                <VKIcon className={styles.svg} />
                ВКонтакте
              </Link>
              <Link to="#" className={styles.social}>
                <YoutubeIcon className={styles.svg} />
                Youtube
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.lowerPart}>
          <div>
            <ul>
              <li className={styles.copyright}>
                <LogoShort className={styles.svg} />
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
          <div className={styles.appLinks}>
            <Link to="#" className={`${styles.googlePlay} ${styles.social}`}>
              <GooglePlayIcon />
            </Link>
            <Link to="#" className={`${styles.appStore} ${styles.social}`}>
              <AppstoreIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
