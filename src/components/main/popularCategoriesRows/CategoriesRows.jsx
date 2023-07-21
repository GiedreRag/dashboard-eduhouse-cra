import style from '../Main.module.css';

export function CategoriesRows({dataCategories: {title, courses, img}}) {
    return (
        <tr className={style.categoriesRowContent}>
            <td className={style.categoriesText}>
                <p>{title}</p>
                <p>{courses} Course</p>
            </td>
            <td><img src={`./img/categories/${img}`} alt="categories" /></td>
        </tr>
    );
}