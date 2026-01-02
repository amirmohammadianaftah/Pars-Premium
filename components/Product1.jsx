'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useRef } from 'react'

export default function Product1() {
    const items = [
        { id: 1, title: 'خرید اکانت گرامرلی Grammarly با ایمیل شما (۹۵٪ تخفیف)', price: '۶۹/۰۰۰ تومان', oldPrice: '۱۵۹/۰۰۰ تومان', img: '/img/Off1.jpg' },
        { id: 2, title: 'خرید اکانت Sora 2 سورا با ایمیل شما ارزان', price: '۴۹۹/۰۰۰ تومان', oldPrice: '۹۹۹/۰۰۰ تومان', img: '/img/Off2.jpg' },
        { id: 3, title: 'خرید اکانت جمینی Gemini جمنای گوگل با (۹۵٪ تخفیف)', price: '۱۹۵/۰۰۰ تومان', oldPrice: '۵۸۵/۰۰۰ تومان', img: '/img/Off3.jpg' },
        { id: 4, title: 'خرید اکانت CapCut کپ کات پرمیوم با ایمیل شما (ارزان)', price: '۲۷۹/۰۰۰ تومان', oldPrice: '۹۸۵/۰۰۰ تومان', img: '/img/Off4.jpg' },
        { id: 5, title: 'خرید اکانت ChatGPT 5 و ChatGPT Plus (ارزان)', price: '۱۹۹/۰۰۰ تومان', oldPrice: '۳۶۹/۰۰۰ تومان', img: '/img/Off5.jpg' },
        { id: 6, title: 'خرید اکانت هداسپیس Headspace با ایمیل شما (۹۵٪ تخفیف)', price: '۷۵/۰۰۰ تومان', oldPrice: '۲۷۹/۰۰۰ تومان', img: '/img/Off6.jpg' },
        { id: 7, title: 'خرید اکانت اگزیت لگ Exitlag با ایمیل شما (ارزان)', price: '۲۹۹/۰۰۰ تومان', oldPrice: '۴۹۹/۰۰۰ تومان', img: '/img/Off7.jpg' },
        { id: 8, title: 'خرید اکانت Freepik فری پیک پرمیوم ایمیل شما (۹۵٪ تخفیف)', price: '۱۹۹/۰۰۰ تومان', oldPrice: '۹۷۹/۰۰۰ تومان', img: '/img/Off8.jpg' },
        { id: 9, title: 'خرید اکانت Wordtune وردتون پرمیوم با ایمیل شما (ارزان)', price: '۱۹۹/۰۰۰ تومان', oldPrice: '۳۱۹/۰۰۰ تومان', img: '/img/Off9.jpg' },
        { id: 10, title: 'خرید تلگرام پرمیوم Telegram Premium (شارژ سریع و ارزان)', price: '۱/۵۷۹/۰۰۰ تومان', oldPrice: '۱/۹۷۹/۰۰۰ تومان', img: '/img/Off10.jpg' },
        { id: 11, title: 'خرید اکانت دولینگو پلاس/مکس Duolingo Puls/Max (ارزان)', price: '۶۹/۰۰۰ تومان', oldPrice: '۹۹/۰۰۰ تومان', img: '/img/Off11.jpg' },
        { id: 12, title: 'خرید اکانت نتفلیکس  Netflix آمریکا قابل تمدید (ارزان)', price: '۱۸۹/۰۰۰ تومان', oldPrice: '۲۸۹/۰۰۰ تومان', img: '/img/Off12.jpg' },
    ]
    const boxRef = useRef(null)

    return (
        <>
            <div dir="rtl" className="w-full flex justify-center">
                <div ref={boxRef} className="w-[92%] lg:container xl:w-[1220px] relative">
                    <div className='flex flex-wrap justify-between items-center h-[140px]'>
                        <div className='flex flex-wrap justify-between w-full h-[50%] relative'>
                            <div className='flex items-center font-black mr-2 text-[21px] relative'>
                                تخفیف شگفت انگیز
                                <div className='absolute bottom-0 w-[60px] h-[2.5px] bg-black'></div>
                            </div>
                            <div className='flex items-end'>
                                <button
                                    type="button"
                                    className="prod-prev ml-2 z-30 cursor-pointer
                                    w-[28px] h-[28px] rounded-full bg-black border border-zinc-200
                                    flex items-center justify-center transition"
                                    aria-label="Prev"
                                >
                                    <EastIcon sx={{ fontSize: '18px' }} className='text-[white]' />
                                </button>
                                <button
                                    type="button"
                                    className="prod-next z-30 cursor-pointer
                                    w-[28px] h-[28px] rounded-full bg-black border border-zinc-200
                                    flex items-center justify-center transition"
                                    aria-label="Next"
                                >
                                    <WestIcon sx={{ fontSize: '18px' }} className='text-[white]' />
                                </button>
                            </div>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        navigation={{ prevEl: '.prod-prev', nextEl: '.prod-next' }}
                        onInit={(sw) => {
                            const scope = boxRef.current
                            const prev = scope?.querySelector('.prod-prev')
                            const next = scope?.querySelector('.prod-next')
                            sw.params.navigation.prevEl = prev
                            sw.params.navigation.nextEl = next
                            sw.navigation.init()
                            sw.navigation.update()
                        }}
                        observer
                        observeParents
                        loop
                        grabCursor
                        spaceBetween={16}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 12 },
                            640: { slidesPerView: 3, spaceBetween: 16 },
                            1024: { slidesPerView: 4, spaceBetween: 20 }
                        }}
                        className="mt-2"
                    >
                        {items.map((p) => (
                            <SwiperSlide key={p.id}>
                                <article className="group bg-white rounded-2xl cursor-pointer overflow-hidden">
                                    <div className="relative">
                                        <div className="aspect-square overflow-hidden">
                                            <img
                                                src={p.img}
                                                alt={p.title}
                                                className="w-full h-full object-cover transition-transform duration-300"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className='absolute w-[65px] flex justify-center text-white text-[14px] h-[22px] bg-green-500 right-0 top-0'>تخفیف</span>
                                    </div>

                                    <div className="p-3 text-right">
                                        <h3 className="w-full font-medium text-[16px] text-center mt-1 leading-6 line-clamp-2">
                                            {p.title}
                                        </h3>
                                        <div className='mt-2 flex flex-wrap justify-center text-[#6b7c93] font-bold'>
                                            <span className='ml-2 line-through'>{p.oldPrice}</span>
                                            <span className='mr-2'>{p.price}</span>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div >
        </>
    )
}