import style from './Main.module.css';
import { LuBellDot } from 'react-icons/lu';
import headerMan from '../../img/header-photo.png';

export function Header() {
    return (
        <div className={style.header}>
            <form className={style.search}>
                <input className={style.input} placeholder='Search here' type="search" />
            </form>
            <div className={style.right}>
                <LuBellDot size='2rem'/>
                <img className={style.headerMan} src={headerMan} alt='user' />
            </div>
        </div>
    );
}