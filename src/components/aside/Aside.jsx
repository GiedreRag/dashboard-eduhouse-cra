import style from './Aside.module.css';
import { MainMeniu } from './MainMeniu';
import { Setting } from './Setting';

export function Aside() {
    return (
        <aside className={style.aside}>
            <h1 className={style.title}>
                Eduhouse
            </h1>
            <MainMeniu />
            <Setting />
        </aside>
    );
}

// import style from './Aside.module.css';

// export function Aside() {
//     return (
//         <aside>
//             ASIDE CONTENT
//         </aside>
//     );
// }