import React, { useState } from 'react';
import style from './Main.module.css';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';

export function EachMentor({data: {img, name, title, courses}}) {
    const [followerCount, setFollowerCount] = useState(0);

    const handleFollowButtonClick = () => {
        setFollowerCount((prevCount) => (prevCount === 0 ? 1 :0));
    };

    return (
            <tr className={style.mentorRow}>
                <td><img className={style.mentorImg} src={`./img/${img}`} alt="mentor" /></td>
                <td className={style.mentorName}>{name}</td>
                <td className={style.title}>{title}</td>
                <td className={style.courses}>{courses}</td>
                <td className={style.followers}>{followerCount} Follower</td>
                <td className={style.follow}>
                    <button className={style.followButton} onClick={handleFollowButtonClick}>
                        {followerCount === 0 ? 'Follow' : 'Unfollow'}
                     </button>
                </td>
                <td><HiOutlineMail /></td>
                <td><BiDotsVerticalRounded /></td>
            </tr>
    );
}