import React from 'react';
import Banner1 from '../../../assets/images/banner/1.jpg';
import Banner2 from '../../../assets/images/banner/2.jpg';
import Banner3 from '../../../assets/images/banner/3.jpg';
import Banner4 from '../../../assets/images/banner/4.jpg';
import Banner5 from '../../../assets/images/banner/5.jpg';
import Banner6 from '../../../assets/images/banner/6.jpg';
import BannerItem from './BannerItem';

const BannerData = [
    {
        image: Banner1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: Banner2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: Banner3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: Banner4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: Banner5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: Banner6,
        prev: 5,
        id: 6,
        next: 1
    }
]
const Banner = () => {

    return (
        <div className="carousel w-full py-10 h-4/5">
            {
                BannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;