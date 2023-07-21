import { Card } from '../progressCards/Card';
import style from '../Main.module.css';

export function ProgressCards() {
    const dataCards = [
        {
            id: 1,
            createdAt: 1234,
            img: 'progressIcon1.png',
            header3: 'App Design',
            header4: 'Learn App design from our expert trainer',
            explanation: 'Finally a comprehensive guide to using sketch for designing...',
            progress: 20,
            color: '#f4f2fe'

        },

        {
            id: 2,
            createdAt: 1234,
            header3: 'Web Design',
            img: 'progressIcon2.png',
            header4: 'Learn App design from our expert trainer',
            explanation: 'Finally a comprehensive guide to using sketch for designing...',
            progress: 80,
            color: '#fff2ed'

        },

        {
            id: 3,
            createdAt: 1234,
            img: 'progressIcon3.png',
            header3: 'Dashboard',
            header4: 'Learn App design from our expert trainer',
            explanation: 'Finally a comprehensive guide to using sketch for designing...',
            progress: 50,
            color: '#ecfbff'

        }
    ]
    return (
        <div className={style.progressCards}>
            { dataCards.map(cardObj => <Card key={cardObj.id} dataCards={cardObj} />) }
        </div>
    );
} 