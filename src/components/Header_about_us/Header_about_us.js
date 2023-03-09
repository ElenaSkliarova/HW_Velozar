import s from './Header_about_us.module.css'

function Header_about_us(){
    return(
        <div className={s.about_us}>
            <div className={s.about_us_text}>
                <h1>Веломастерская “Велозар”</h1>
                <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <div className={s.about_us_din}></div>
        </div>
    )
}

export default Header_about_us