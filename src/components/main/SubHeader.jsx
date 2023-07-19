import style from './Main.module.css';

export function SubHeader() {
    return (
        <div className={style.subHeader}>
            <h2>Course in Progress</h2>
            <p>View All</p>
        </div>
    );
}