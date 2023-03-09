import s from './Our_services.module.css'

function Our_services(){
    return(
        <div className={s.our_services_box}>
            <div className={s.our_services_box_main}>
                <div className={s.our_services_text}>
                    <h2>Что мы предлагаем</h2>
                    <p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. </p>
                </div>
                <div className={s.our_services_img}></div>
            </div>
            
        </div>        
    )
}

export default Our_services