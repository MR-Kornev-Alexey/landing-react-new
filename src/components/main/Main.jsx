import React, { useState, useEffect } from 'react';
import './Main.css'
import FirstScreen from "../FirstScreen/FirstScreen"
import Price from "../Price/Price";
import LineBlock from "../SecondScreen/LineBlock"
import ListHW from "../SecondScreen/ListHW"
import ThirdScreen from "../SixWeek/ThirdScreen";
import ProductCTA from "../GTA/ProductCTA";
import Algorithm from "../Algorithm/Algorithm";
import Author from "../Author/Author";
import NewExamples from "../Examples/Examples";
import SecondListLeft from "../SecondScreen/SecondListLeft";
import SixWeek from "../SixWeek/SixWeek";
import HowWork from "../HowWork/HowWork";
import Slider from "../Sliders/Sliders";
import TimeLine from "../TimeLine/TimeLine";
import WhatCourse from "../WhatCourse/WhatCourse";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import {Box} from "@mui/system";

const images = [
    {
        label: 'Надежда',
        imgPath: require("../Sliders/outMain/Image03.jpg")
    },
    {
        label: 'Ксения П.',
        imgPath: require("../Sliders/outMain/Image01.jpg")
    },
    {
        label: 'Nastya',
        imgPath: require("../Sliders/outMain/Image05.jpg")
    },
    {
        label: 'Лейсан',
        imgPath: require("../Sliders/outMain/Image09.jpg")
    },
    {
        label: 'Анастасия',
        imgPath: require("../Sliders/outMain/Image12.jpg")
    },
    {
        label: 'Smex',
        imgPath: require("../Sliders/outMain/Image16.jpg")
    },
    {
        label: 'Alenka',
        imgPath: require("../Sliders/outMain/Image17.jpg")
    },
    {
        label: 'Александра Ф.',
        imgPath: require("../Sliders/outMain/Image18.jpg")
    },
    {
        label: 'Дарья',
        imgPath: require("../Sliders/outMain/Image22.jpg")
    },
    {
        label: 'Мария',
        imgPath: require("../Sliders/outMain/Image25.jpg")
    },
    {
        label: 'Ani M.',
        imgPath: require("../Sliders/outMain/Image29.jpg")
    },
    {
        label: 'Дарья',
        imgPath: require("../Sliders/outMain/Image32.jpg")
    },
    {
        label: 'Асель',
        imgPath: require("../Sliders/outMain/Image33.jpg")
    },
    {
        label: 'Наталья',
        imgPath: require("../Sliders/outMain/Image36.jpg")
    },
    {
        label: 'Марина П.',
        imgPath: require("../Sliders/outMain/Image41.jpg")
    }
];
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CallUS from "../CallUs/CallUS";
import Footer from "../Footer/Footer";


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Определите, насколько экранов нужно прокрутить, чтобы кнопка стала видимой
        const scrollThreshold = window.innerHeight * 1.5;

        if (window.scrollY > scrollThreshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Очистка слушателя событий при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            style={{ display: isVisible ? 'block' : 'none', position: 'fixed', bottom: '20px', right: '20px',  cursor: 'pointer' }}
            onClick={scrollToTop}
        >
            <ArrowUpwardIcon fontSize={"large"}/>
        </button>
    );
};

export default function Main() {
    return (
            <Box >
                {/*<Author/>*/}
                <FirstScreen />
                {/*<CountdownTimer />*/}
                <LineBlock title={"Могу вам помочь"}/>
                 <TimeLine />
                 {/*<ListHW />*/}
                {/*<LineBlock title={"И если Вы:"}/>*/}
                {/*<SecondListLeft />*/}
                <LineBlock title={"Консультация"}/>
                <SixWeek/>
                {/*<LineBlock title={"Как работаем ?"}/>*/}
                {/*<HowWork />*/}
                <LineBlock title={"Остались вопросы?"}/>
                <CallUS />
                <LineBlock title={"Отзывы"}/>
                <Slider imagesFrom={images}/>
                {/*<LineBlock title={"Программа курса"}/>*/}

                {/*<LineBlock title={"Елена Корнева"}/>*/}

                {/*<LineBlock title={"Тарифы"}/>*/}
                {/*<Price />*/}
                <Footer />
                <ScrollToTopButton />
            </Box>
        );
    }
