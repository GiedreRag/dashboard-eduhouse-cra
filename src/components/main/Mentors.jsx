import { EachMentor } from './EachMentor';
import style from './Main.module.css';

export function Mentors() {
    const data = [
        {
            id: 1,
            img: 'mentor1.png',
            name: 'Shine Smith',
            title: 'UI/UX Designer',
            courses: '18 Courses',
            // followers: '1200 Followers',
        },

        {
            id: 2,
            img: 'mentor4.png',
            name: 'Mikel',
            title: 'Marketer',
            courses: '24 Courses',
            // followers: '900 Followers',
        },

        {
            id: 3,
            img: 'mentor3.png',
            name: 'Tohid golakar',
            title: 'Androied Developer',
            courses: '64 courses',
            // followers: '1590 Followers',
        },

        {
            id: 4,
            img: 'mentor4.png',
            name: 'Md Sakib',
            title: 'Frontend Developer',
            courses: '85 Courses',
            // followers: '3400 Followers',
        }
    ]
    return (
        <div className={style.mentors}>
            <header className={style.mentorsHeader}>
                <h3>Top Mentors</h3>
                <p>View All</p>
            </header>
            <table className={style.eachMentor}>
            { data.map(eachMentorObj => <EachMentor key={eachMentorObj.id} data={eachMentorObj}/>) }
            </table>
        </div>
    );
}