import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import logoImg from '../public/img/logo.png'
import { Icon } from "@iconify/react";

export default function Navbar() {
    return (
        <>
            <header className="w-full h-[110px] lg:h-[150px]">
                <div className="w-full h-[50px] bg-[#3ecf8e] flex justify-center items-center cursor-pointer">
                    <div className="font-iran font-black text-white text-[15px]">
                        WELCOME20 هزار تومان تخفیف برای اولین خرید با کد <span dir="rtl">۲۰</span>
                    </div>
                </div>
                <div className="w-full h-[60px] flex justify-center border-b border-b-slate-200 xl:border-none">
                    <div className="w-full lg:container h-full flex justify-center">
                        <div dir="rtl" className="w-full h-full lg:container flex justify-between xl:hidden">
                            <div className="w-[60%] h-full">
                                <figure className="h-full w-[140px] flex items-center">
                                    <div className="text-[26px] mr-8 sm:mr-8"><MenuIcon /></div>
                                    <Image width={70} height={88} className="h-[70%] cursor-pointer object-contain"
                                        src={logoImg} alt="LogoImg" />
                                </figure>
                            </div>
                            <div className="w-[40%] h-full flex items-center justify-end">
                                <div className="ml-10 text-[20px] h-[30px] cursor-pointer -scale-x-100"><SearchIcon /></div>
                                <div className="ml-8 text-[24px] h-[30px] cursor-pointer">
                                    <Icon icon="bi:basket2" className='w-[22px]' width="26" height="26" />
                                </div>
                            </div>
                        </div>
                        <div dir="rtl" className="hidden xl:flex xl:w-[1250px] h-[100px] xl:container justify-center">
                            <div className="w-[71%] h-full flex">
                                <figure className="h-full w-[100px] flex items-center mr-8">
                                    <Image width={70} height={88} className="h-[70%] cursor-pointer object-contain"
                                        src={logoImg} alt="LogoImg" />
                                </figure>
                                <ul className="flex w-[800px] items-center">
                                    <li
                                        className="flex items-center text-[16px] hover:text-[#3ecf8e] transition pr-6 cursor-pointer h-fit">
                                        صفحه اصلی
                                    </li>
                                    <li
                                        className="flex items-center text-[16px] hover:text-[#3ecf8e] transition mr-12 cursor-pointer h-fit">
                                        تماس با ما</li>
                                    <li
                                        className="flex items-center text-[16px] hover:text-[#3ecf8e] transition mr-12 cursor-pointer h-fit">
                                        درباره پارس پرمیوم<KeyboardArrowDownIcon /></li>
                                    <li
                                        className="flex items-center text-[16px] hover:text-[#3ecf8e] transition mr-12 cursor-pointer h-fit">
                                        خدمات پرمیوم<KeyboardArrowDownIcon />
                                    </li>
                                    <li
                                        className="flex items-center text-[16px] hover:text-[#3ecf8e] transition mr-12 cursor-pointer h-fit">
                                        وبلاگ</li>
                                </ul>
                            </div>
                            <div className="w-[29%] h-full flex items-center justify-between">
                                <div className="text-[20px] cursor-pointer -scale-x-100">
                                    <SearchIcon />
                                </div>
                                <div
                                    className="flex items-center justify-center gap-2 w-[120px] h-[45px] rounded-[60px] font-shabnam bg-[#dfe2e9] cursor-pointer hover:bg-slate-300 transition">
                                    <span className="flex items-center justify-center w-5 h-full mb-1 shrink-0">
                                        <Icon icon="bi:basket2" className="w-5 h-5 block" />
                                    </span>
                                    <span className="text-sm leading-none">سبد خرید</span>
                                </div>
                                <div className="h-[40px] ml-4 font-shabnam flex items-center justify-center rounded-[20px]">
                                    <div className="hover:text-[#3ecf8e] transition cursor-pointer">عضویت</div> <span
                                        className="mr-4 ml-4 text-slate-500">|</span>
                                    <div className="hover:text-[#3ecf8e] transition cursor-pointer">وارد شوید</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </header >
        </>
    )
}