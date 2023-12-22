import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to={"/"}>
                <div className="flex items-center gap-3">
                    <div className="flex justify-center">
                    {/* <img className="w-12 md:w-16" data-aos="fade-right" src="https://i.ibb.co/N1grhjr/05.png" alt="" /> */}
                    <i className='bx bxs-color text-5xl'></i>
                    </div>
                    <div data-aos="fade-left">
                        <p className=" text-3xl md:text-lg font-bold underline"><span className="text-[#FF444A]">T</span>ask</p>
                        <p className="-mt-1 text-sm"><small className="font-semibold"><span className="text-[#FF444A]">M</span>anagement</small> <span className="text-[#FF444A]"></span> </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Logo;