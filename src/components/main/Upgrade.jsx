import style from './Main.module.css';

export function Upgrade() {
    return (
        <div className={style.upgrade}>
            <div className={style.upgradeCard}>
                <p>
                    You have 5 days left on your subscription
                </p>
                <button className={style.upgradeButton}>
                    Upgrade to Pro
                </button>
            </div>
        </div>
    );
}