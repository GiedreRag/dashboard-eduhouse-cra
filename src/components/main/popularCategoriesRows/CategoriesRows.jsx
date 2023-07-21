import style from '../Main.module.css';

export function CategoriesRows({dataCategories: {title, courses, img}}) {
    return (
        <tr className={style.categoriesRowContent}>
            <td className={style.categoriesText}>
                <p className={style.categoriesRowTitle}>{title}</p>
                <p>{courses} Course</p>
            </td>
            <td><img className={style.categoriesIcon} src={`./img/categories/${img}`} alt="categories" /></td>
        </tr>
    );
}