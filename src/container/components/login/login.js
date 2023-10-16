import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import background from '../background.avif';

const Login = () => {
  const [form, setForm] = useState({ email: null, pass: null });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ form });
    console.log('submit login');
  };
  return (
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
      >
        <input
          className="w-full p-2 sm:text-xl text-base bg-transparent text-white border border-white
          rounded-2xl placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base
          placeholder:text-xs focus:placeholder:text-transparent focus:outline-0"
          required
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full p-2 sm:text-xl text-base bg-transparent text-white border border-white
          rounded-2xl placeholder:text-white sm:placeholder:text-sm 2xl:placeholder:text-base
          placeholder:text-xs focus:placeholder:text-transparent focus:outline-0"
          required
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, pass: e.target.value })}
        />
        <button
          className="max-w-full font-bold mt-2 mx-auto w-32 text-xl bg-white text-[#96bf01] rounded p-1"
          type="submit"
        >
          Log in
        </button>
      </form>
      <p className="max-[400px]:text-sm xl:w-[33vw] min-[900px]:w-[40vw] sm:w-[60vw] min-[300px]:w-[80vw]
      w-[95vw] text-white font-bold text-base text-right flex flex-wrap min-[230px]:justify-end
      justify-center gap-y-2 z-50"
      >
        Don&apos;t have an account?
        <NavLink
          className="max-[400px]:text-xs ml-1 font-bold text-sm bg-white text-[#96bf01]
        py-1 px-2 underline italic rounded-full"
          to="/signup"
        >
          Sign up
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
