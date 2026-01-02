'use client'

import Image from "next/image"
import underHeader from '../public/img/imHead.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Header() {
    const slides = ['/img/one.webp', '/img/two.webp', '/img/three.webp'];
    return (
        <>
            <div className="w-full flex flex-wrap mt-6 lg:mt-0">
                <div className="w-full flex flex-wrap justify-center">
                    <div className="w-[92%] lg:container xl:w-[1220px] rounded-[20px] overflow-hidden">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            slidesPerView={1}
                            loop
                            navigation
                            pagination={{ el: '.hero-pagination', clickable: true }}
                            onBeforeInit={(sw) => {
                                sw.params.pagination.el = '.hero-pagination';
                            }}
                            speed={1000}
                            autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
                            className="hero-swiper has-nav"
                        >
                            {slides.map((src, i) => (
                                <SwiperSlide key={i}>
                                    <img src={src} alt="" className="w-full h-full object-cover" loading={i ? 'lazy' : 'eager'} />
                                </SwiperSlide>
                            ))}

                            <div className="hero-pagination"></div>
                        </Swiper>
                    </div>
                </div>
                <div className="w-full mt-10 flex flex-wrap justify-center">
                    <figure className="w-[92%] lg:container xl:w-[1220px]">
                        <Image src={underHeader} alt="Process" />
                    </figure>
                </div>
            </div>
        </>
    )
}