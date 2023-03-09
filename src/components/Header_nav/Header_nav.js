import logo from './header_nav_img/logo.png'
import s from './Header_nav.module.css'


function Header_nav(){
    return(
        <div className={s.header_nav_box}>
            <img src={logo} alt='logo'/>
            <div className={s.menu}>
                <p>О нас</p>
                <p>Услуги</p>
                <p>Аренда</p>
            </div>
            <button className={s.btn}>Связаться</button>
        </div>       
    )
}

export default Header_nav