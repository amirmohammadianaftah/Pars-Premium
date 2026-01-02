import Image from "next/image"
import smartTool from '../public/img/smartTool.webp'

export default function UpFooter() {
    return (
        <>
            <section className="w-full flex justify-center mt-[50px]">
                <div className="w-full lg:container flex flex-wrap justify-center">
                    <div className="xl:w-[1220px] w-[94%] relative">
                        <figure className="w-full lg:w-[700px] relative cursor-pointer">
                            <Image src={smartTool} alt="SmartTool" />
                        </figure>
                        <div dir="rtl"
                            className="w-full xl:w-[530px] cursor-pointer lg:w-[50%] lg:h-[300px] bg-white shadow-2xl h-[240px] sm:h-[210px] lg:absolute lg:top-[70px] lg:left-[45vw] xl:left-[660px] lg:z-10">
                            <div className="mt-[-20px] lg:mt-0">
                                <div className="mr-5 w-[90%] lg:w-[65%] pt-8 lg:pt-10">
                                    <h5 className="font-shabnam text-[#7db15a] text-[14px]">| جدیدترین مطلب</h5>
                                    <h4 className="font-shabBold text-[#2c2c2d] text-[18px] mt-2 lg:mt-4 lg:text-[22px]">‌بهترین
                                        ابزارهای دایرکت
                                        هوشمند
                                        برای
                                        کسب‌و‌کارهای آنلاین
                                    </h4>
                                    <h5 className="font-shabLi text-[#7989a2] mt-2 lg:mt-4">دوشنبه، ۸ اردیبهشت ۱۴۰۴</h5>
                                </div>
                                <div className="w-full flex justify-center lg:justify-start lg:mr-6 mt-10 lg:mt-8">
                                    <button
                                        className="w-[96%] lg:w-[140px] h-[45px] bg-[#16a34a] flex justify-center items-center rounded-[6px] text-white font-shabnam">مشاهده
                                        مطلب</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}