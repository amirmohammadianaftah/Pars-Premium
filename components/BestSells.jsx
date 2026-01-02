import Image from "next/image"
import bestSell1 from '../public/img/best1.webp'
import bestSell2 from '../public/img/best2.webp'
import bestSell3 from '../public/img/best3.webp'
import bestSell4 from '../public/img/best4.webp'

export default function BestSells() {
    return (
        <>
            <section className="w-full flex justify-center">
                <div className="w-full lg:container flex flex-wrap justify-center">
                    <div className="font-shabBold text-[22px] mt-[50px]">
                        دسته‌بندی‌های پرطرفدار
                    </div>
                    <div className="w-full flex justify-center mt-[20px]">
                        <div className="w-[70px] h-[1px] lg:h-[2px] bg-[#2c2c2d]"></div>
                    </div>
                    <div dir="rtl" className="w-full xl:w-[1220px] flex flex-wrap justify-center lg:justify-between mt-[35px]">
                        <figure className="w-[92%] lg:w-[49%] cursor-pointer xl:h-[260px]">
                            <Image src={bestSell1} alt="BestSell1" />
                        </figure>
                        <figure className="w-[92%] lg:w-[49%] lg:mt-0 mt-6 xl:h-[260px] cursor-pointer">
                            <Image src={bestSell2} alt="BestSell2" />
                        </figure>
                        <figure className="w-[92%] lg:w-[49%] lg:mt-[20px] mt-12 xl:h-[260px] cursor-pointer">
                            <Image src={bestSell3} alt="BestSell3" />
                        </figure>
                        <figure className="w-[92%] lg:w-[49%] lg:mt-[20px] mt-6 xl:h-[260px] cursor-pointer">
                            <Image src={bestSell4} alt="BestSell4" />
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}