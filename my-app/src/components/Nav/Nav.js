import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.css';

const Nav = () => {
  const [activeLinkState, setActiveLinkState] = useState('home');
  const [closeMenu, setCloseMenu] = useState(false);

  const menuHandler = () => {
    setCloseMenu(!closeMenu);
  };

  window.addEventListener('resize', (e) => {
    if (e.target.innerWidth < 1024) setCloseMenu(false);
  });

  return (
    <nav className={style.nav}>
      <div className={style.navContainer}>
        <div
          className={closeMenu ? style.burgerMenuClose : style.burgerMenu}
          onClick={menuHandler}
        >
          <span className={style.burgerMenuItem}></span>
          <span className={style.burgerMenuItem}></span>
          <span className={style.burgerMenuItem}></span>
        </div>
        <ul className={closeMenu ? style.navActive : null}>
          <li>
            <Link
              className={
                activeLinkState === 'home'
                  ? style.navLink + ' ' + style.activeNavLink
                  : style.navLink
              }
              to={'/'}
              onClick={() => {
                setActiveLinkState('home');
              }}
            >
              Пицца
            </Link>
          </li>
          {/* <li><Link className={activeLinkState === 'pizzas' ? style.navLink + ' ' + style.activeNavLink : style.navLink} to={'pizzas'} onClick={() => {setActiveLinkState('pizzas')}}>О нас</Link></li> */}
          <li>
            <Link
              className={
                activeLinkState === 'info'
                  ? style.navLink + ' ' + style.activeNavLink
                  : style.navLink
              }
              to={'info'}
              onClick={() => {
                setActiveLinkState('info');
              }}
            >
              Информация
            </Link>
          </li>
          <li>
            <Link
              className={
                activeLinkState === 'cart'
                  ? style.navLink + ' ' + style.activeNavLink
                  : style.navLink
              }
              to={'cart'}
              onClick={() => {
                setActiveLinkState('cart');
              }}
            >
              Корзина
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
