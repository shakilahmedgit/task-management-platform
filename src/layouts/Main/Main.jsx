import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <div >
                {/* Navbar */}
                <Navbar/>
                {/* Outlet */}
                <div className="md:min-h-[calc(100vh-352px)]">
                    <Outlet/>
                </div>
                {/* Footer */}
                <Footer/>
            </div>
        </div>
    );
};

export default Main;