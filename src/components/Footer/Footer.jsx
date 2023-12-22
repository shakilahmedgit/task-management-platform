import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Footer = () => {
    return (
        <div>
            <div className="bg-[#111111] text-white px-4 md:px-5 lg:px-10 xl:px-20 grid grid-cols-1 md:grid-cols-3 py-10">
                <div className="mb-5 md:mb-0">
                    <Logo></Logo>
                    <div className="mt-5">
                        <p className="text-2xl md:text-lg"><small>Phone: +8801305330393</small></p>
                        <p className="text-2xl md:text-lg"><small>Email: taskmanagement@gmail.com</small></p>
                    </div>
                </div>
                <div  className="mb-5 md:mb-0">
                    <h2 className="text-3xl font-bold mb-5">Quick Links</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0">
                    <Link  className=" text-2xl md:text-lg hover:text-blue-500" to={'/'}><small>Home</small></Link>
                    <Link  className=" text-2xl md:text-lg hover:text-blue-500" to={'/dashboard'}><small>Dashboard</small></Link>
                    <Link  className=" text-2xl md:text-lg hover:text-blue-500" to={'/about'}><small>About</small></Link>
                    <Link  className=" text-2xl md:text-lg hover:text-blue-500" to={'/contact'}><small>Contact</small></Link>
                    </div>
                </div>
                <div  className="mb-5 md:mb-0">
                    <h2 className="text-3xl font-bold mb-5">Social Media</h2>
                    <div className="mb-4 md:mb-0 flex gap-3 items-center">
                    <i className='text-gray-400 hover:text-white text-2xl md:text-xl bx bxl-facebook'></i>
                    <i className='text-gray-400 hover:text-white text-2xl md:text-xl bx bxl-twitter' ></i>
                    <i className='text-gray-400 hover:text-white text-2xl md:text-xl bx bxl-google' ></i>
                    <i className='text-gray-400 hover:text-white text-2xl md:text-xl bx bxl-instagram' ></i>
                    <i className='text-gray-400 hover:text-white text-2xl md:text-xl bx bxl-youtube' ></i>
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-5 lg:px-10 xl:px-20 bg-[#181818] py-8 md:py-5">
                <p className="text-gray-400 hover:text-white text-center"><small>Copyright &copy; 2023 Task Management Platform. All Rights Reserved.</small></p>
            </div>
        </div>
    );
};

export default Footer;