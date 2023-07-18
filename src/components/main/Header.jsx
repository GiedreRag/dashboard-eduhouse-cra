import style from './Header.module.css';
import { LuBellDot } from 'react-icons/lu';
import headerMan from '../../img/header-photo.png';

export function Header() {
    return (
        <div className={style.header}>
            <form className={style.search}>
                <input type="search" />
            </form>
        <div className={style.right}>
            <LuBellDot />
            <img className={style.headerMan} src={headerMan} alt='man' />
        </div>
        </div>
    );
}