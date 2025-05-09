import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <div className={'title'}>
               Вебинары по развитию
            </div>
            <div >
               Id: {user?.id}
            </div>
        </div>
    );
};

export default Header;
