import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <>
            <footer className="w-full flex flex-wrap justify-center mt-[65px]">
                <div
                    className="w-full h-[200px] flex flex-wrap items-center lg:h-[60px] border-b border-b-slate-300 border-t border-t-slate-300">
                    <ul dir="rtl" className="w-full flex flex-wrap justify-center">
                        <li
                            className="w-full text-[#2c2c2d] lg:w-fit font-shabnam flex flex-wrap justify-center items-center h-[40px]">
                            <a className="hover:text-[#3ecf8e] transition" href="">صفحه
                                اصلی</a>
                        </li>
                        <li
                            className="w-full text-[#2c2c2d] lg:mr-[53px] lg:ml-[53px] lg:w-fit font-shabnam flex flex-wrap justify-center items-center h-[40px]">
                            <a className="hover:text-[#3ecf8e] transition" href="">تماس
                                با
                                ما</a>
                        </li>
                        <li
                            className="w-full text-[#2c2c2d] lg:ml-[53px] lg:w-fit font-shabnam flex flex-wrap justify-center items-center h-[40px]">
                            <a className="hover:text-[#3ecf8e] transition" href="">وبلاگ</a>
                        </li>
                        <li
                            className="w-full text-[#2c2c2d] lg:w-fit font-shabnam flex flex-wrap justify-center items-center h-[40px]">
                            <a className="hover:text-[#3ecf8e] transition" href="">قوانین
                                و مقررات</a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center items-center h-[100px]">
                    <div className='flex items-center h-[40px]'>
                        Coded by Amir Mohammadian
                    </div>
                    <div className='ml-4 flex flex-wrap items-center justify-center h-[40px]'>
                        <LinkedInIcon sx={{ marginRight: '4px', cursor: 'pointer' }} />
                        <GitHubIcon sx={{ marginLeft: '4px', cursor: 'pointer' }} />
                    </div>
                </div>
            </footer>
        </>
    )
}