import style from './Main.module.css';

export function CategoriesRows() {
    return (
        <div className={style.categoriesRows}>
             <table className={style.categoriesEachRow}>
                <tr className={style.categoriesRowContent}>
                    <td className={style.categoriesText}>
                        <p>UI/UX Design</p>
                        <p>18 Course</p>
                    </td>
                    <td>Icon</td>
                </tr>
            </table>
            <table className={style.categoriesEachRow}>
                <tr className={style.categoriesRowContent}>
                    <td className={style.categoriesText}>
                        <p>Marketing</p>
                        <p>34 Course</p>
                    </td>
                    <td>Icon</td>
                </tr>
            </table>
            <table className={style.categoriesEachRow}>
                <tr className={style.categoriesRowContent}>
                    <td className={style.categoriesText}>
                        <p>Development</p>
                        <p>126 Course</p>
                    </td>
                    <td>Icon</td>
                </tr>
            </table>
            <table className={style.categoriesEachRow}>
                <tr className={style.categoriesRowContent}>
                    <td className={style.categoriesText}>
                        <p>Business</p>
                        <p>213 Course</p>
                    </td>
                    <td>Icon</td>
                </tr>
            </table>
        </div>
    );
}