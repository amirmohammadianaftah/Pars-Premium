import Image from "next/image"
import imageOne from '../public/img/6de00162c98d5a00b90548b0dd0f117b.webp'
import imageTwo from '../public/img/c3978b9353b441d375e3cc69dcde0dec.webp'

export default function AnotherStuff() {
    return (
        <>
            <div className="w-full bg-[url('/img/bakimg.jpg')] flex justify-center flex-wrap mt-[50px] h-[400px] lg:h-[320px]">
                <div className="w-full lg:container flex flex-wrap justify-center">
                    <div className="xl:w-[1220px] w-[90%] flex flex-wrap justify-center">
                        <div
                            className="font-shabBold w-full h-fit flex flex-wrap justify-center text-[22px] mt-[20px] text-[#2e2e2f]">
                            چرا فروشگاه ما؟
                        </div>
                        <div className="w-full flex justify-center mt-[-10px]">
                            <div className="w-[70px] h-[1px] lg:h-[2px] bg-[#2c2c2d]"></div>
                        </div>
                        <div dir="rtl" className="font-shabnam text-center mt-[30px] text-[#3c3d3d]">
                            پارس پرمیوم مرجع تخصصی ارائه اشتراک‌های پرمیوم سرویس‌های بین‌المللی مانند Spotify، Netflix و
                            ابزارهای هوش مصنوعی است. ما با تضمین بهترین قیمت و پشتیبانی سریع، تجربه‌ای مطمئن و آسان را برای
                            کاربران فراهم می‌کنیم.
                        </div>
                        <div
                            className="w-[130px] h-[45px] bg-[#16a34a] text-white font-shabnam flex justify-center items-center rounded-[6px] mb-[-25px]">
                            بیشتر بدانید
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-[65px]">
                <div dir="rtl" className="w-[92%] lg:container xl:w-[1220px] flex flex-wrap justify-between">
                    <figure className="lg:w-[48.5%] cursor-pointer">
                        <Image src={imageOne} alt="" />
                    </figure>
                    <figure className="mt-6 lg:mt-0 lg:w-[48.5%] cursor-pointer">
                        <Image src={imageTwo} alt="" />
                    </figure>
                </div>
            </div>
        </>
    )
}