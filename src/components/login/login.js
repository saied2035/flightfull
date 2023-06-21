import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import background from '../background.png';

const Login = () => {
  const [form, setForm] = useState({ name: null, pass: null });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ form });
    console.log('submit login');
  };
  return (
    <div className="h-screen bg-[#FFFCF5] flex flex-col items-center sm:justify-center gap-y-3 sm:p-3">
      <img className="max-h-[50vh] mt-0 sm:absolute top-[-7%] sm:mt-0 mt-[-7%]" alt="background" src={background} />
      <p className="max-[400px]:text-xl max-[240px]:text-base max-[400px]:mt-[-6vh] text-3xl text-[#3C4144]
      tracking-wider font-bold sm:mt-[25vh] mt-[-11vh]"
      >
        Welcome to Flightfull!
      </p>
      <form
        className="xl:w-[33vw] sm:w-[40vw] flex flex-col py-3 px-5 gap-y-5 mt-2 bg-[#24536F] rounded max-w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="name" className="w-full">
          <p className="text-xl text-[#FFFCF5] mb-1">Username</p>
          <input
            className="w-full sm:text-xl text-base text-[#3C4144] placeholder-[#3C4144] placeholder-opacity-50
            bg-[#FFFCF5] p-2 rounded"
            type="text"
            placeholder="Username"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
        <label htmlFor="password" className="w-full">
          <p className="text-xl text-[#FFFCF5] mb-1">Password</p>
          <input
            className="w-full sm:text-xl text-base text-[#3C4144] placeholder-[#3C4144] placeholder-opacity-50
            bg-[#FFFCF5] p-2 rounded"
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, pass: e.target.value })}
          />
        </label>
        <button
          className="max-w-full font-bold mx-auto w-32 text-xl bg-[#FFFCF5] text-[#3C4144] rounded p-1"
          type="submit"
        >
          Log in
        </button>
      </form>
      <p className="max-[400px]:text-sm xl:w-[33vw] sm:w-[40vw] text-#3C4144 text-base text-right">
        Don&apos;t have an account?
        <NavLink className="max-[400px]:text-xs ml-1 font-bold text-sm text-[#3C4144] underline italic" to="/signup">
          Sign up
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
