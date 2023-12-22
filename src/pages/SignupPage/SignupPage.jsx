import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import signupImg from "../../assets/img/task (2).jpg"



const SignupPage = () => {

    const {createUser, googleLogin, githubLogin} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const validateEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\]).{6,}$/;
        return passwordRegex.test(password);
    };

    const signup = e => {
        e.preventDefault();

        const form  = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const signupInfo = {name, email, password};
        console.log(signupInfo);

        // Validate email and password
        if (!validateEmail(email)) {
            toast.error('Invalid email format', { position: 'top-left' });
            return;
        }

        if (!validatePassword(password)) {
            toast.error('Please use at least 6 characters, including both letters, numbers and special character for added security.)', { position: 'top-left' });
            return;
        }

        // create a new account
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully toasted!')
                navigate(location?.state ? location?.state : '/dashboard');
            })
            .catch(err => {
                console.error(err);
            })
    };


    // google sign up
    const googleSignUp = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                toast.success('Successfully toasted!')
                // navigation to google sign up page
                navigate(location?.state ? location?.state : '/dashboard');
            })
            .catch(err => {
                console.error(err);
            });
    };


    // github sign up page
    const githubSignUp = () => {
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
                    <img src={signupImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={signup} className="card-body" data-aos="flip-right">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>

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
                    <button className="btn text-white py-2 bg-[#FF444A] hover:bg-black hover:text-white">Signup</button>
                    </div>

                    <p className="text-center mt-4"><small>Already Have an account <Link to="/login" className="text-blue-600 font-bold">Login</Link></small></p>

                    <div>
                        <h2 className="text-2xl font-semibold text-center">Signup with</h2>
                        <div className="flex justify-between items-center mt-5 gap-3">
                            <button onClick={googleSignUp} className="flex items-center font-medium bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-google' ></i><span className="text-red-500"></span>Google</button>
                            <button onClick={githubSignUp} className="flex items-center font-medium bg-[#FF444A] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-github' ></i><span className="text-red-500"></span>Github</button>
                        </div>
                    </div>
                </form>
                
                </div>
            </div>
        </div>
    );
};

export default SignupPage;