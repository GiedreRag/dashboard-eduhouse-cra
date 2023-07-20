import style from './Main.module.css';
import { LuBellDot } from 'react-icons/lu';

export function Header() {
    return (
        <div className={style.header}>
            <form className={style.search}>
                <input className={style.input} placeholder='Search here' type="search" />
            </form>
            <div className={style.headerRight}>
                <LuBellDot size='2rem'/>
                <img className={style.userImg} src='./img/User.png' alt='user' />
            </div>
        </div>
    );
}