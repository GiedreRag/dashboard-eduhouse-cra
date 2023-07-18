import style from './Middle.module.css';

export function MiddleLeft() {
    return (
        <div className={style.left}>
            <div className={style.header} >
                <h2>Course in Progress</h2>
                <p>View all</p>
            </div>
             MIDDLE LEFT CONTENT
        </div>
    );
}