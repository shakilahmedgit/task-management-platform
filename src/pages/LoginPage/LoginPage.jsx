import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import loginImg from "../../assets/img/task (3).jpg"



const LoginPage = () => {


    const {signIn, googleLogin, githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Current Location', location);


    const validateEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\]).{6,}$/;
        return passwordRegex.test(password);
    };


    const loginBtn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = {email, password};
        console.log(loginInfo);

        // Validate email and password
        if (!validateEmail(email)) {
            toast.error('Invalid email format', { position: 'top-left' });
            return;
        }

        if (!validatePassword(password)) {
            toast.error('Please use at least 6 characters, including both letters, numbers and special character for added security.)', { position: 'top-left' });
            return;
        }

        // Login with email and password
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successfully completed');
                
                // navigate after login success
                navigate(location?.state ? location?.state : '/dashboard')
            })
            .catch(err => {
                console.error(err);
            });
    };

     // google sign in
     const googleSignIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                // navigation to google sign in page
                navigate(location?.state ? location?.state : '/dashboard');
            })
            .catch(err => {
                console.error(err);
            });
    };


    // github sign up page
    const githubLogIn = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
                toast.success('Successfully toasted!')
                // navigation to google sign up page
                navigate(location?.state ? location?.state : '/dashboard');
            })
            .catch(err => {
                console.log(err);
            })
    };
    

    return (
        <div className=" min-h-screen flex items-center justify-center py-10">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                <div className="text-center mb-2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginBtn} className="card-body"  data-aos="flip-left">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white">Login</button>
                        </div>

                        <p className="text-center mt-4"><small>Do not Have an account <Link to="/signup" className="text-blue-600 font-bold">Signup</Link></small></p>

                        <div>
                            <h2 className="text-2xl font-semibold text-center">Login with</h2>
                            <div className="flex justify-between items-center mt-5 gap-3">
                                <button onClick={googleSignIn} className="flex items-center font-medium bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-google' ></i><span className="text-red-500"></span>Google</button>
                                <button onClick={githubLogIn} className="flex items-center font-medium bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-github' ></i><span className="text-red-500"></span>Github</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;