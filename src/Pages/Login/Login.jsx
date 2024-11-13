import { FcGoogle } from 'react-icons/fc';
import img from '../../assets/images/login.png'
import useFirebase from '../../Hooks/useFirebase';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const {googleSignUp,setUser,userLogin} = useFirebase();
    const navigate = useNavigate();
    const handleLogin = (e) =>{
      e.preventDefault();
      const form = e.target;
      const userEmail = form.email.value;
      const userPassword = form.password.value;
      userLogin(userEmail,userPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        setUser(user)
        navigate('/home')
      })
    }
    const handleGoogleSignUp = () =>{
        googleSignUp()
        .then((result) => {
            const user = result.user;
            setUser(user)
            navigate('/home')
            
          })
    }

  return (
    <div>
      <div className="hero bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row lg:gap-x-11">
        <div>
        <img
      src={img}
      className="lg:max-w-xl md:max-w-lg sm:max-w-sm max-w-xs" />
        </div>
          <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-2xl font-semibold text-center">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered bg-white text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered bg-white text-black"
                  required
                />
                <label className="label">
                  <Link to='/registration' className="label-text-alt link link-hover">
                    Not Registered?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-400  border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500 text-white">Login</button>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleGoogleSignUp} className="btn btn-outline   "><FcGoogle className='text-lg'/>
                 Sign Up With Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
