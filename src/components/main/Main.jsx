import style from './Main.module.css';
import { Header } from './Header';
import { SubHeader } from './SubHeader';
import { ProgressCards } from './ProgressCards';
import { Upgrade } from './Upgrade';
import { Categories } from './Categories';
import { Mentors } from './Mentors';


export function Main() {
    return (
        <main className={style.main}>
            <Header />  
            <SubHeader />
            <ProgressCards />
            <Upgrade />
            <Categories />
            <Mentors />               
        </main>
    );
}