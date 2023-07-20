import style from './Main.module.css';

export function Card({dataCards: {img, header3, header4, explanation, progress}}) {
    const date = 'Dec, 15, 2020';

    return (
        <article className={style.progressCard}>
            <header className={style.cardTop}>
                <p className={style.cardDate}>{date}</p>
                <p><img className={style.cardIcon} src={`./img/${img}`} alt="mentor"/></p>
            </header>
            <h3 className={style.cardTitle}>{header3}</h3>
            <h4 className={style.cardSubTitle}>{header4}</h4>
            <p>{explanation}</p>
            <footer className={style.cardBottom}>
                <div className={style.progressBar}>
                    <div className={style.progressBarFill} style={{ width: `${progress}%` }}></div>
                </div>
                <div className={style.progressBarNr}>
                    <p>Progress</p>
                    <p>{`${progress}%`}</p>
                </div>
            </footer>
        </article>
    );
}