import { CategoriesRows } from '../popularCategoriesRows/CategoriesRows';
import style from '../Main.module.css';

export function Categories() {
    const dataCategories = [
        {
            title: 'UI/UX Design',
            courses: '18',
            img: 'designLogo.png'
        },

        {
            title: 'Marketing',
            courses: '34',
            img: 'marketingLogo.png'
        },

        {
            title: 'Development',
            courses: '126',
            img: 'developmentLogo.png'
        },

        {
            title: 'Business',
            courses: '213',
            img: 'businessLogo.png'
        }
    ]
    return (
        <div className={style.categories}>
            <h3 className={style.categoriesTitle}>Popular Categories</h3>
            <div className={style.categoriesRows}>
                <table className={style.categoriesEachRow}>
                { dataCategories.map(eachCategoriesObj => <CategoriesRows key={eachCategoriesObj.id} dataCategories={eachCategoriesObj}/>) }
                </table>
            </div>
        </div>
    );
}