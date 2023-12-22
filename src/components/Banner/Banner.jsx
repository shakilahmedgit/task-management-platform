import { useContext } from 'react';
import bannerImage from '../../assets/img/task (4).jpg'; // Replace with your banner image path
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Banner = () => {
  
    const {user} = useContext(AuthContext);

    return (
        <section className="lg:px-10 xl:px-20 py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center px-5">
                <img src={bannerImage} alt="Banner" className="lg:max-w-md w-full rounded-lg shadow-lg" />
                <div className="lg:ml-6 md:mt-5 lg:mt-0">
                    <h1 className="text-3xl font-semibold mb-4">Welcome to SCC Technovision</h1>
                    <p className="text-lg mb-6">Your ultimate task management platform</p>
                    {
                        user ? <>
                            <Link to="/dashboard">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">
                                Let’s Explore
                            </button>
                            </Link>
                        </>
                        :
                        <>
                            <Link to="/login">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">
                                Let’s Explore
                            </button>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Banner;
