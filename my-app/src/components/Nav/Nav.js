import { useState } from "react"
import { Link } from "react-router-dom"
import style from './nav.module.css'

const Nav = () => {

    const [closeMenu, setCloseMenu] = useState(false)

    const menuHandler = () => {
        setCloseMenu(!closeMenu)
    }

    window.addEventListener('resize', (e) => {
        if (e.target.innerWidth < 1024) setCloseMenu(false)
    })
    
    return (
        <nav className={style.nav}>
            <div className={style.navContainer}>
            <div className={closeMenu ? style.burgerMenuClose : style.burgerMenu} onClick={menuHandler}>
                <span className={style.burgerMenuItem}></span>
                <span className={style.burgerMenuItem}></span>
                <span className={style.burgerMenuItem}></span>
            </div>
                <ul className={closeMenu ? style.navActive : null}>
                    <li><Link to={'/'}>Домашняя страница</Link></li>
                    <li><Link to={'pizzas'}>Пиццы</Link></li>
                    <li><Link to={'info'}>Информация</Link></li>
                    <li><Link to={'cart'}>Корзина</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav