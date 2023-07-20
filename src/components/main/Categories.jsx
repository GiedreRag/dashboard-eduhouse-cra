import { CategoriesRows } from './CategoriesRows';
import style from './Main.module.css';

export function Categories() {
    return (
        <div className={style.categories}>
            <h3 className={style.categoriesTitle}>Popular Categories</h3>
            <CategoriesRows />
        </div>
    );
}