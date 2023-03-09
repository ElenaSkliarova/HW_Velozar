import s from './Proposition_item.module.css'


function Proposition_item({text, backgroundColor}){
    
    return(
        <div className={s.proposition_item_box} style={{backgroundColor: backgroundColor}}>
            <div className={s.line}></div>
            <p>{text}</p>
        </div>
    )
}

export default Proposition_item