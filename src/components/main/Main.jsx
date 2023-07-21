import style from './Main.module.css';
import { Header } from './Header';
import { ProgressCards } from './progressCards/ProgressCards';
import { Upgrade } from './Upgrade';
import { Categories } from './popularCategoriesRows/Categories';
import { Mentors } from './mentorsRows/Mentors';


export function Main() {
    return (
        <main className={style.main}>
            <Header />  
            <div className={style.subHeader}>
                <h2>Course in Progress</h2>
                <p className={style.subHeaderP}>View All</p>
            </div>
            <ProgressCards />
            <Upgrade />
            <Categories />
            <Mentors />               
        </main>
    );
}