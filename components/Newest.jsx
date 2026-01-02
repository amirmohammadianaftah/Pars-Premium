'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useRef } from 'react'

export default function Newest() {
    const items = [
        { id: 1, title: 'خرید اکانت Nano Banana گوگل با ایمیل شما ارزان', price: '۱۹۵/۰۰۰ تومان', img: '/img/new1.jpg' },
        { id: 2, title: 'خرید اکانت Lensgo با ایمیل شما ارزان', price: '۵۹۹/۰۰۰ تومان', img: '/img/new2.jpg' },
        { id: 3, title: 'خرید اکانت ILoveSong AI با ایمیل شما ارزان', price: '۱/۹۹۹/۰۰۰ تومان', img: '/img/new3.jpg' },
        { id: 4, title: 'خرید اکانت Veo 3 با ایمیل شما ارزان', price: '۱۹۵/۰۰۰ تومان', img: '/img/new4.jpg' },
        { id: 5, title: 'خرید اکانت Genspark با ایمیل شما ارزان', price: '۳/۲۸۳/۰۰۰ تومان', img: '/img/new5.jpg' },
        { id: 6, title: 'اکانت هداسپیس Higgsfield با ایمیل شما ارزان', price: '۱/۳۱۳/۰۰۰ تومان', img: '/img/new6.jpg' },
        { id: 7, title: 'خرید اکانت Make با ایمیل شما ارزان', price: '۱/۵۹۹/۰۰۰ تومان', img: '/img/new7.jpg' },
        { id: 8, title: 'خرید اکانت Affogate AI با ایمیل شما ارزان', price: '۳/۲۸۳/۰۰۰ تومان', img: '/img/new8.jpg' },
        { id: 9, title: 'خرید اکانت AISEO با ایمیل شما ارزان', price: '۲/۹۹۹/۰۰۰ تومان', img: '/img/new9.jpg' },
        { id: 10, title: 'خرید اکانت Rank Math با ایمیل شما(۹۵٪ تخفیف)', price: '۲/۴۹۹/۰۰۰ تومان', img: '/img/new10.jpg' },
        { id: 11, title: 'خرید اکانت Dynamic.ooo داینامیک المنتور با ایمیل شما ارزان', price: '۲/۲۹۹/۰۰۰ تومان', img: '/img/new11.jpg' },
        { id: 12, title: 'خرید اکانت  Crocoblock کراکو بلاک پرمیوم با ایمیل شما ارزان', price: '۲/۲۹۹/۰۰۰ تومان', img: '/img/new12.jpg' },
        { id: 13, title: 'خرید افزونه  WPivid با ایمیل شما ارزان و قانونی', price: '۱/۲۹۹/۰۰۰ تومان', img: '/img/new13.jpg' },
        { id: 14, title: 'خرید افزونه  WPML پلاگین چند زبانه کردن سایت وردپرس (ارزان)', price: '۱/۲۹۹/۰۰۰ تومان', img: '/img/new14.jpg' },
        { id: 15, title: 'خرید اکانت  mnml.ai با ایمیل شما ارزان', price: '۲/۳۹۹/۰۰۰ تومان', img: '/img/new15.jpg' },
        { id: 16, title: 'خرید اکانت  Cursor AI با ایمیل شما ارزان', price: '۸۷۵/۵۰۰ تومان', img: '/img/new16.jpg' },
    ]
    const boxRef = useRef(null)

    return (
        <>
            <div dir="rtl" className="w-full flex justify-center">
                <div ref={boxRef} className="w-[92%] lg:container xl:w-[1220px] relative">
                    <div className='flex flex-wrap justify-between items-center h-[140px]'>
                        <div className='flex flex-wrap justify-between w-full h-[50%] relative'>
                            <div className='flex items-center font-black mr-2 text-[21px] relative'>
                                جدیدترین اشتراک ها
                                <div className='absolute bottom-0 w-[60px] h-[2.5px] bg-black'></div>
                            </div>
                            <div className='flex items-end ml-2'>
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
                                <article className="group cursor-pointer bg-white rounded-2xl overflow-hidden">
                                    <div className="relative">
                                        <div className="aspect-square overflow-hidden">
                                            <img
                                                src={p.img}
                                                alt={p.title}
                                                className="w-full h-full object-cover transition-transform duration-300"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-3 text-right">
                                        <h3 className="w-full font-medium text-[16px] min-h-[48px] text-center mt-1 leading-6 line-clamp-2">
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