import style from './Middle.module.css';
import { MiddleLeft } from './MiddleLeft';
import { MiddleRight } from './MiddleRight';

export function Middle() {
    return (
        <middle className={style.middle}>
            <MiddleLeft />
            <MiddleRight />
            MIDDLE CONTENT
        </middle>
    );
}