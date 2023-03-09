import Header_about_us from "../Header_about_us/Header_about_us"
import Header_nav from "../Header_nav/Header_nav"
import s from './Header.module.css'

function Header(){
    return(
        <div className={s.header_box}>
            <div className={s.header_box_main}>
                <Header_nav />
                <Header_about_us />
            </div>
        </div>        
    )
}

export default Header