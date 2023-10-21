import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import background from '../background.jpg';
import { isLoggedIn, signup } from '../../../redux/authSlice/authSlice';

const Signup = () => {
  const [form, setForm] = useState({
    name: null, email: null, password: null, password_confirmation: null,
  });
  const [error, setError] = useState('');
  const [render, setRender] = useState(false);
  const { pathname } = useLocation();
  const authStatus = useSelector((state) => state.authReducer.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ form });
    dispatch(signup({ form, navigate, setError }));
  };
  useEffect(() => {
    if (authStatus === 'idle') dispatch(isLoggedIn({ navigate, pathname, type: 'authPage' }));
    if (authStatus === 401 || authStatus === 'Failed') setRender(true);
  }, [authStatus]);
  return (
    render && (
    <div className="justify-center h-screen bg-[#96bf01] flex flex-col items-center gap-y-3 sm:p-3 p-0">
      <img
        src={background}
        alt="background"
        className="absolute left-[0%] right-[0%] w-[100%] h-[100%] opacity-[0.15] z-0 object-cover"
      />
      <p className="max-[400px]:text-xl max-[240px]:text-base max-[200px]:text-sm text-3xl text-white
      tracking-wider font-bold"
      >
        Welcome to Flightfull!
      </p>
      <form
        className="xl:w-[33vw] min-[900px]:w-[40vw] sm:w-[60vw] min-[300px]:w-[80vw] w-[95vw] flex flex-col py-3 sm:px-5 px-0 rounded max-w-full gap-y-3 z-50"
        onSubmit={(e) => handleSubmit(e)}
        onChange={() => setError('')}
      >
        <input
          className="w-full p-2 sm:text-xl text-base bg-transparent text-white border border-white
            rounded-2xl placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base
            placeholder:text-xs focus:placeholder:text-transparent focus:outline-0"
          name="name"
          type="text"
          required
          placeholder="Username"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full p-2 sm:text-xl text-base bg-transparent text-white border border-white
          rounded-2xl placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base
          placeholder:text-xs focus:placeholder:text-transparent focus:outline-0"
          name="email"
          type="email"
          required
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full p-2 sm:text-xl text-base bg-transparent text-white border border-white
          rounded-2xl placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base
          placeholder:text-xs focus:placeholder:text-transparent focus:outline-0"
          name="password"
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          className="w-full p-2 sm:text-xl text-base bg-transparent text-white border border-white
          rounded-2xl placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base
          placeholder:text-xs focus:placeholder:text-transparent focus:outline-0"
          name="password_confirmation"
          type="password"
          required
          placeholder="Password Confirmation"
          onChange={(e) => setForm({ ...form, password_confirmation: e.target.value })}
        />
        <button
          className="max-w-full font-bold mt-2 mx-auto w-32 text-xl bg-white text-[#96bf01] rounded p-1"
          type="submit"
        >
          Sign up
        </button>
        {error && (
        <p className="text-[#ff0000] font-semibold text-center max-[400px]:text-xs text-base">
          {
           typeof error === 'object' ? error[0] : error
          }
        </p>
        )}
      </form>
      <p className="max-[400px]:text-sm xl:w-[33vw] min-[900px]:w-[40vw] sm:w-[60vw] min-[300px]:w-[80vw] w-[95vw] text-white font-bold text-base text-right z-50">
        Have an account?
        <NavLink className="max-[400px]:text-xs ml-1 font-bold text-sm bg-white text-[#96bf01] py-1 px-2 underline italic rounded-full" to="/login">
          Login
        </NavLink>
      </p>
    </div>
    )
  );
};

export default Signup;
