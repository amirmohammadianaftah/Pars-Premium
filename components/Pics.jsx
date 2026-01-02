import Image from "next/image"
import img1 from '../public/img/1.webp'
import img2 from '../public/img/2.webp'
import img3 from '../public/img/3.webp'
import img4 from '../public/img/4.webp'

export default function Pics() {
    return (
        <>
            <div className="w-full flex justify-center mt-[65px]">
                <div dir="rtl" className="w-[92%] lg:container xl:w-[1220px] flex flex-wrap justify-between">
                    <div className="w-full lg:w-[32%] lg:h-[350px] h-[300px] bg-[#f6efe0] cursor-pointer">
                        <figure className="w-full flex flex-wrap justify-center mt-[20px]">
                            <Image className="w-[160px]" src={img1} alt="Image1" />
                        </figure>
                        <div className="text-center mt-[25px]">
                            <h5 className="text-[18px] font-shabnam text-[#8d8387]">با ابزارهای تصحیح گرامر نوشتاری و نگارشی</h5>
                            <h5 className="text-[20px] font-shabBold text-[#2c2c35] mt-[10px]">متن هات رو بی نقص کن</h5>
                        </div>
                    </div>
                    <div dir="ltr"
                        className="w-full h-[400px] lg:h-[350px] lg:w-[67%] justify-center flex flex-wrap lg:items-center bg-[#dae0fb] mt-4 lg:mt-0 cursor-pointer">
                        <figure className="lg:w-[50%] w-full flex flex-wrap justify-center mt-[20px]">
                            <Image className="w-[300px] lg:w-[250px]" src={img2} alt="Image2" />
                        </figure>
                        <div className="text-center mt-[25px] lg:w-[50%]">
                            <h5 className="text-[18px] font-shabnam text-[#8d8387]">با ابزارهای برنامه نویسی و توسعه دهندگی</h5>
                            <h5 className="text-[20px] font-shabBold text-[#2c2c35] mt-[10px]">کد بزن، ایده هات رو بساز</h5>
                        </div>
                    </div>
                    <div dir="ltr"
                        className="w-full h-[420px] lg:h-[350px] bg-[#e5ffcb] justify-center flex flex-wrap lg:items-center lg:w-[67%] mt-4 cursor-pointer">
                        <figure className="lg:w-[50%] w-full flex flex-wrap justify-center mt-[20px]">
                            <Image className="w-[250px]" src={img3} alt="Image3" />
                        </figure>
                        <div className="text-center lg:w-[50%] mt-[25px]">
                            <h5 className="text-[18px] font-shabnam text-[#8d8387]">با برنامه های مدیتیشن و تمرکز</h5>
                            <h5 className="text-[20px] font-shabBold text-[#2c2c35] mt-[10px]">حال خوبت رو تضمین کن</h5>
                        </div>
                    </div>
                    <div className="w-full h-[300px] lg:h-[350px] bg-[#f7e0fb] lg:w-[32%] mt-4 cursor-pointer">
                        <figure className="w-full flex flex-wrap justify-center mt-[20px]">
                            <Image className="w-[200px]" src={img4} alt="Image4" />
                        </figure>
                        <div className="text-center mt-[25px]">
                            <h5 className="text-[18px] font-shabnam text-[#8d8387]">با اشتراک سرویس های فضای ابری</h5>
                            <h5 className="text-[20px] font-shabBold text-[#2c2c35] mt-[10px]">فایل هات همیشه همراهت هستن</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}