import style from './Main.module.css';

export function Card({data: {icon, header3, header4, explanation, progress}}) {
    const date = 'Dec, 15, 2020';

    return (
        <article className={style.progressCard}>
            <header className={style.cardTop}>
                <p className={style.cardDate}>{date}</p>
                <p className={style.cardIcon}>{icon}</p>
            </header>
            <h3 className={style.cardTitle}>{header3}</h3>
            <h4 className={style.cardSubTitle}>{header4}</h4>
            <p>{explanation}</p>
            <footer className={style.cardBottom}>
                <p>{progress}</p>
            </footer>
        </article>
    );
}