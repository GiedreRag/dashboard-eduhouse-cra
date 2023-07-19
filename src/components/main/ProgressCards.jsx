import { Card } from './Card';
import style from './Main.module.css';

export function ProgressCards() {
    const data = [
        {
            id: 1,
            createdAt: 1650532562551,
            image: <img src="/" alt="Icon" />,
            header3: 'App Design',
            header4: 'Learn App design from our expert trainer',
            explanation: 'Finally a comprehensive guide to using sketch for designing...',
            progress: 'Progress bar...'

        },

        {
            id: 2,
            createdAt: 1650532562551,
            header3: 'Web Design',
            image: <img src="/" alt="Icon" />,
            header4: 'Learn App design from our expert trainer',
            explanation: 'Finally a comprehensive guide to using sketch for designing...',
            progress: 'Progress bar...'

        },

        {
            id: 3,
            createdAt: 1650532562551,
            image: <img src="/" alt="Icon" />,
            header3: 'Dashboard',
            header4: 'Learn App design from our expert trainer',
            explanation: 'Finally a comprehensive guide to using sketch for designing...',
            progress: 'Progress bar...'

        }
    ]
    return (
        <div className={style.progressCards}>
            { data.map(cardObj => <Card key={cardObj.id} data={cardObj} />) }
        </div>
    );
} 