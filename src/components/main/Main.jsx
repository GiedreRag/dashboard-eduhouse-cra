import { Header } from './Header';
import style from './Main.module.css';
import { Bottom } from './Bottom';
import { Middle } from './Middle';


export function Main() {
    return (
        <main className={style.main}>
            <Header />
            <Middle />
            <Bottom />          
        </main>
    );
}